+++
title = 'Mein Linux Install-Script'
date = 2024-10-01T16:15:23+02:00
draft = false
tags = ['linux', 'fedora', 'bash']
+++
Ich habe ine gewagte These: viele IT-affine Linux-User kenne und leben das Phänomen des "Distro-Hoppings": auf Grund der [schieren Auswahl](https://distrowatch.com/) an möglichen Linux-Distributionen probiert man, gerade am Anfang seiner Linux-Karriere, viele Distros aus, bis man seine Lieblingsdistro gefunden hat.

Bei war es zumindest so: bis sich Fedora als meine Wahl für den Desktop herauskristallisiert hatte habe ich viele andere Distros getestet. Hierbei steht man immer vor der Herausforderung das System an seine Bedürfnisse anzupassen. Pakete und Programme wollen installiert, [Dotfiles](https://codeberg.org/rotespferd/dotfiles) konfiguriert und die jeweiligen Desktop-Umgebung an die persönlichen Vorlieben angepasst werden. Bis man sich dann "zu Hause" fühlt kann mehrere Stunden oder gar Tage dauern. Und erst dann beginnt der eigentliche Test der Distribution und man prüft sie auf Alltagstauglichkeit.

Um den Prozess des Einrichtens zu verkürzen bin ich dazu übergangen eine Sammlung von Install-Skripten zu pflegen, die mir den Prozess erleichtern. Gestartet bin ich hierbei mit einer [Sammlung von Ansible-Playbooks](https://codeberg.org/rotespferd/setup). Dies fande ich jedoch mit Kanonen auf Spatzen geschossen, da es hierbei dann eine Abhängigkeit zu Ansible gibt und zusätzlich mein Install-Skript häufig nur einmal läuft. Da reicht dann auch ein Bash-Skript, was schneller geschrieben und ausgeführt ist. Aus dem Kopf verlieren darf man natürlich nicht, dass gerade längliche Bash-Skripte mit Bedingungen udn Verzweigungen schnell unübersichtlich werden können. Ich bewerte deshalb stets kritisch meine Skripte, um früh genug zu merken wann ich mich mit Bash verrenne und doch Ansible ein gutes Werkzeug wäre.

In meinen Install-Skripten teile ich die Funktionalität dann auf nach:
- zu installierenden Programmen
- Installation meiner Dotfiles
- Konfiguration meiner Backup-Lösungen
- Einrichtung des Desktop-Umgebungen

Da ich für jede Funktion eigene Bash-Skripte habe kann ich diese auch leicht einzeln ausführen und somit auch Funktionen, die ich nachträglich einbaue, auf anderen Rechnern ausführen.

Lediglich die Installation von Programmen ist bei meiner Skriptsammlung distributionsabhängig und geschieht per DNF. Die allermeisten Programme mit GUI installiere ich hierbei inzwischen per Flatpak, sodass dieser Part auch distrounabhängig in. Die Installation von Programmiersprachen geschieht per [asdf](https://asdf-vm.com/) und somit auch in unterschiedlichen Umgebungen. Somit kann ich meine Skriptsammlung in Zukunft auch schnell auf eine andere Distro anpassen, falls ich Fedora doch überdrüssig werden. Stichwort: Distro-Hopping ;-)

Aus meiner Sicht ergibt der minimale Mehraufwand eine Skriptsammlung zu erstellen Sinn. Die Befehle würde man eh ausführen, Sie dann noch in eine .sh-Datei zu kopieren geht schnell und spart in Zukunft viel Zeit.

Zu meinem Repository geht es [hier](https://codeberg.org/rotespferd/fedora-setup).