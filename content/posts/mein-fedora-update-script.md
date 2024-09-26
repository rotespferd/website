+++
title = 'Mein Fedora Update-Script'
date = 2024-09-27T12:58:47+02:00
draft = false
tags = ['linux', 'fedora', 'flathub', 'snapper']
+++
Um meine Fedora-Systeme stehts aktuell zu halten habe ich über die Zeit ein dezidiertes Update-Skript etabliert. Hierüber update ich nicht nur alle DNF-Pakete, sondern auch alle Flatpaks-Apps und VS Code Extensions. Sot habe ich alle zentralen Komponenten auf meinem System in einem Aufwasch aktualisiert.

Das Skript sieht wie folgt aus:
```bash
#!/bin/bash

echo "Create pre snapshot..."
timestamp=$(date +%Y%m%d%H%M%S)
pre_snapshot_number=$(sudo snapper -c root create --description pre-update-${timestamp} --type pre --cleanup number --print-number)

# Update the system
echo "--- Updating the system ---"
sudo dnf update -y

# Update flatpaks
echo ""
echo "--- Updating flatpaks ---"
flatpak update -y

# Update VS Code Extensions
echo ""
echo "--- Updating VS Code Extensions ---"
code --update-extensions

echo "Create post snapshot..."
sudo snapper -c root create --description post-update-${timestamp} --type post --cleanup number --pre-number $pre_snapshot_number 
```

Das Skript liegt ebenfalls in meinem Setup-Repository, mit dem ich neue Clients installiere: [Zum Code](https://codeberg.org/rotespferd/fedora-setup/src/branch/main/update.sh)

## Snapshots
Auf all meinen Clients nutze ich BTRFS als Dateisystem. Insbesondere die Snapshot-Funktion habe ich in den letzten Jahren zu schätzen gelernt.

Diese hilft mir auch beim Durchführen des Updates. Bevor ich die Updates durchführe mache ich ein Snapshot vom root-Subvolume. Hierbei hilft mir das Tool [Snapper](https://wiki.archlinux.org/title/Snapper). Hiermit wird das Erstellen und Verwalten von Snapshots erheblich vereinfacht. Auch kennt Snapper das Konzept der Pre-Post-Snapshots. So kann man Snapshot-Paare erstellen, die erstellt werden bevor und nachdem eine Veränderung am Dateisystem durchgeführt wurden. Technisch sind dies normale Snapshots, beim späteren Bereinigen kann Snapper diese Paare jedoch zusammen entfernen.

Durch die Snapshots kann ich Updates relativ gefahrlos durchführen. Im Zweifelsfall kann ich immer wieder zum Zustand vor dem Update zurückspringen, wenn irgendetwas schief geht. So kann man Updates mit ruhigem Gewissen durchführen, da man immer noch ein Netz hat, was einen auffängt.