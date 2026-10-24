---
title: 'Schwarzer Bildschirm bei Steam Remote Play'
date: '2026-10-24'
layout: layout/post.njk
tags: ['steam', 'nixos', 'linux']
---

Ein herbstlicher Samstag lädt zum spielen ein: draussen ist es ungemütlich stürmisch, drinnen wohlig warm. Da setzt man sich doch gerne vor den Rechner, um ein paar Stunden in die römischen Welten von [Anno 117](https://de.wikipedia.org/wiki/Anno_117) einzutauchen. Der leistungsfähige Desktoprechner steht im Arbeitszimmer im Keller, ich will es mir aber mit dem Laptop vor dem Kamin gemütlich machen.
Da hat Steam ja eine Lösung: [Steam Remote Play](https://store.steampowered.com/remoteplay/).

Mit Remote Play kann man das Spiel auf seinem leistungsfähigen Rechner (dem Host) laufen lassen und dieses dann einfach auf ein anderes Gerät (den Client) streamen. Solange die Internetverbindung stabil ist funktioniert das ganz wunderbar. Nur leider nicht, wenn auf dem Host NixOS mit KDE Plasma läuft.

Ich zumindest hatte beim Start von Anno 117 nur einen schwarzen Bildschirm auf dem Client. Ein Gang in den Keller zeigt: auf dem Host läuft das Spiel ganz wunderbar, [Proton](https://en.wikipedia.org/wiki/Proton_(software)) sei Dank. Nur auf dem Client kommt nichts an.
Die Suche nach möglichen Lösungen im Internet hat leider keine richtige Hilfe gebracht. Hilfe brachte dann aber Claude, der das Internet doch effektiver durchsuchen kann als ich und systematisch an die Fehleranalyse herangeht.

**Was ich mit Claudes Hilfe ausgeschlossen habe:**

- Ubisoft-Connect-Dialog auf dem Host: manchmal kann dieser die Remote-Sitzung stören. Bei mir jedoch nicht.
- Anzeigemodi im Spiel: alle (Fenster, rahmenloses Fenster, Vollbild) probiert, alles blieb schwarz.
- gamescope oder PRIME-Offloading als Startoptionen des Spiels: In Valve-Issues sind das bekannte Ursachen für schwarzen Remote-Play-Bildschirm. Bei gab es aber beides nichts.
- alte Treiber oder Kernel: Der Kernel ist linuxPackages_latest, Mesa ist 26.1. Also beides aktuell.

## Lösung des Problems
Ohne die Hilfe von Claude wäre ich selber nicht auf diese Lösung gekommen. Unter Wayland (was KDE Plasma standartmässig einsetzt) kann ein Programm den Bildschirm nicht einfach auslesen. Steam muss dafür den Weg über PipeWire und das xdg-Portal nehmen. In Valves Bugtracker gibt es Berichte mit ähnlichem Fehlerbild:
- [#13585](https://github.com/ValveSoftware/steam-for-linux/issues/13585): RX 9070 XT, KDE Wayland, Remote Play ist schwarz oder eingefroren. Unter X11 funktioniert es.
- [#13340](https://github.com/ValveSoftware/steam-for-linux/issues/13340): Die ScreenCast-Session wird nach dem ersten Stream nicht freigegeben.

Um Steam mit PipeWire zu starten muss man den Parameter `-pipewire` hinzufügen. Wichtig: Steam muss mit dem Parameter gestartet werden, nicht das jeweilige Spiel. So kann man etwa auf dem Terminal `steam -pipewire` ausführen.

Steam so gestartet behebt bei mir das Problem. Anno 117 startet auf dem Client ohne Probleme, sodass einer Reise nach Latium und Albion nichts mehr im Weg steht.

### Mit Nix umgesetzt
Mit Nix und NixOS ist der Startparameter dann auch leicht dauerhaft gesetzt:

```nix
programs.steam = {
  enable = true;
  package = pkgs.unstable.steam.override { extraArgs = "-pipewire"; };
  remotePlay.openFirewall = true;
};
```
