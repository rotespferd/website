+++
title = 'ChatGPT und das Problem mit dem Zählen'
date = 2024-09-25T18:20:06+02:00
draft = false
tags = ['chatgpt', 'llm']
+++

Einer der gerne genutzten Beispiele um darzustellen, das LLMs ja ach so "dumm" sind, ist das Zählen von Buchstaben oder Teilen einer Liste.

Wenn ich etwa ChatGPT 4o den einfachen Prompt "Erstelle ein Wort mit 10 Buchstaben zum Thema 'Meer'", dann erhalte ich relativ reproduzierbar Antworten wie diese:

>Das Wort **"Meeresküste"** besteht aus 10 Buchstaben und passt gut zum Thema "Meer". Es beschreibt den Bereich, an dem das Meer auf das Land trifft.

Beim Nachzählen wird schnell klar: das Wort "Meeresküste" hat 11 Buchstaben und nicht 10. Auch wenn man nun versucht ChatGPT zu *korrigieren* mit einem Prompt wie "Das Wort hat nicht 10 Buchstaben, sondern 11." kommen keine besseren Antworten:

>Entschuldige den Fehler! Ein passendes Wort mit genau 10 Buchstaben zum Thema "Meer" ist **"Meeresgrund"**. Es bezieht sich auf den Boden des Meeres.

Weiterhin sind es 11 Buchstaben. Ich habe die Erfahrung gemacht das ChatGPT sehr häufig einen Buchstaben zu viel oder einen zu wenig macht. Weit daneben liegt es nie, aber richtig ist es nunmal auch nicht.

Erst wenn man ihn dazu anleitet selber *nachzuzählen* werden die Ergebnisse besser. Ein Prompt wie "Versuch es erneut und überprüfe mit einem Code, ob das vorgeschlagene Programm wirklich 10 Buchstaben hat." führt dazu, dass ChatGPT Python nutzt um sein eigenes Ergebnis zu validieren:

>Du hast recht, das Wort "Meeresgrund" hat 11 Buchstaben. Ich werde ein neues Wort vorschlagen und sicherstellen, dass es genau 10 Buchstaben hat.
>Das Wort **"Wellenritt"** hat 10 Buchstaben und passt gut zum Thema "Meer", da es das Reiten von Wellen beschreibt.

Der folgende, einfache Python-Code kommt in der Antwort auch vor:
```python
# Hier überprüfen wir die Anzahl der Buchstaben des vorgeschlagenen Wortes
wort = "Meeresgrund"
anzahl_buchstaben = len(wort)
anzahl_buchstaben
```
Reproduzierbar ist es jedoch nicht, dass danach ein korrektes Ergebnis rauskommt.

Soweit, so bekannt. Das oben gezeigte "Experiment" wurde schon häufig herangezogen. Nun gibt es aber in meinem Leben immer mal wieder Anwendungsfälle, wo ich Wörter mit einer bestimmten Zeichenanzahl und zu einem bestimmten Thema suche. Für ein Lösungswort für ein Rätsel will man häufig nicht selber kreativ werden, sondern die Maschine arbeiten lassesn ;-)

## "reasoning" oder ChatGPT *denkt* logisch
Am 12.09.2024 [veröffentliche](https://openai.com/index/introducing-openai-o1-preview/) OpenAI mit ChatGPT o1 ein neues Modell seines LLM. Das neue Modell soll über die gestellten Fragen mehr *nachgrübeln*, also länger über die Antwort *nachdenken* und unterschiedliche Lösungsansätze bewerten, hinterfragen und ggf. auch verwerfen. Damit sollen die Antworten zuverlässiger und insbesondere das Phänomen des "halluzinieren" verhindert werden.

Direkt nach der Veröffentlichung war die Kritik trotzdem nicht überhörbar. Das neue Modell wird seinen Erwartungen nicht gerecht und [sei nur ein teures Selbstgespräch](https://www.nzz.ch/meinung/strawberry-open-ai-verkauft-seine-neueste-ki-als-durchbruch-in-wirklichkeit-fuehrt-sie-nur-teure-selbstgespraeche-ld.1848624) und würde [einfache Fehler machen](https://t3n.de/news/chatgpt-o1-revolutionaer-oder-enttaeuschend-1646529/).

Gerade das mit dem einfachen Fehlern wollte ich natürlich anhand meiner Wortlängen-Aufgabe prüfen. Der selbe Prompt wie beim Test mit ChatGPT 4o liefert spürbar bessere Ergebnisse:

>Ein 10-Buchstaben-Wort zum Thema **„Meer“** ist **„Wellengang“**.

>Zwei weitere 10-Buchstaben-Wörter zum Thema **„Meer“** sind **„Leuchtturm“** und **„Meereswoge“**.

>Zwei weitere 10-Buchstaben-Wörter zum Thema **„Meer“** sind **„Kreuzfahrt“** und **„Strandkorb“**.

Beim neuen Modell o1 kann man den *Gedankengang* des LLM nachvollziehen. Hierbei sieht man, dass ChatGPT tatsächliche gewisse Worte ausschliesst und andere in Betracht zieht. Hier wird also wohl wirklich *gegrübelt*. Das Ergebnis ist, für mich, reproduzierbar besser, auch wenn es seltene Ausreisser gibt und die AI dann doch wieder Worte mit 11 oder 9 Buchstaben vorschlägt.

## Lohnt sich das?
Im Durchschnitt habe ich ChatGPT 01-preview 10 Sekunden *nachdenken* lassen, um mir ein Wort auszuspucken. Insbesondere zum Start von o1 dauerte es jedoch auch gerne mal 50 bis 70 Sekunden, bis es eine Antwort gab. So lange *grübelte* das LLM über die Antwort. Wie ressourcenhungrig ChatGPT ist ist inzwischen hinlänglich [bekannt](https://www.heise.de/news/ChatGPTs-Stromverbrauch-Zehnmal-mehr-als-bei-Google-9852126.html).

Aus meiner Sicht dauert es noch zu lange, bis die AI eine, für uns Menschen recht einfache, Aufgabe erfüllt. Ohne AI könnte man wahrscheinlich leichter ein Wörterbuch nach Länge sortieren, alle Wörter mit 10 Buchstaben rausfiltern und diese dann versucht per AI oder anderer Heuristik nach dem Thema "Meer" zu kategorisieren.
Das Kosten-Nutzen-Verhältnis ist für mich aktuell noch nicht gut genug, insbesondere im Hinblick auf die Auswirkungen auf die Umwelt.

Ich will deshalb in Zukunft meine Nutzung von LLMs mehr reflektieren und, bevor ich einen Prompt verfasse, doch noch einmal mein eigenes Hirn nutzen. So eine Wortsuche kann ja auch ungemein kreativ sein, wenn man sich Worte hin und her wirft und versucht noch bessere Begriffe zu nutzen.

---

P.S.: wenn ich in diesem Text über ChatGPT schreibe, habe ich Begriffe wie "denkt" kursiv geschrieben. Damit will ich deutlich machen, dass ChatGPT natürlich nicht wirklich denken kann. Es ist kein Wesen mit Bewusst sein und alle Prozesse, die eine Antwort liefern, basieren auf statistischen Wahrscheinlichkeiten innerhalb des Modells. Um den Text verständlicher zu halten habe ich trotzdem diese Analogien zum menschlischen Denken benutzt.