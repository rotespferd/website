+++
title = 'Freiheit unter Vorbehalt: Warum Codebergs LLM-Verbot mehr Fragen aufwirft als es löst'
date = 2026-08-08T17:33:46+02:00
draft = true
tags = ['ai', 'dev']
+++

Am 23.07.2026 hat codeberg.org in einem [Blogpost](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html) veröffentlicht, dass in Zukunft "vibe-coded projects" auf der Plattform nicht mehr erlaubt sind. Dieser Entscheidung ging eine Abstimmung auf der Jahresmitgliederversammlung 2026 des Codeberg e.V. statt. Die Mitglieder von Codeberg e.V. haben über eine Erweiterung der Terms of Use abgestimmt, die Projekte verbietet, deren Code "mostly" (größtenteils) durch unüberprüften LLM-Output ("vibe-coded") entsteht. Das Ergebnis der Abstimmung war 358-144, wobei etwa 50% der stimmberechtigten Mitglieder an der Abstimmung teilgenommen haben.

Ich bin bisher Fördermitglied des Codeberg e.V., weil ich die Idee einer durch die Community getragenen Git-Forge sehr begrüße. Als Alternative zu Github, welche mit der Zeit durch enshittification immer unbenutztbarer wurde, habe ich Codeberg gerne benutzt.
Ich bin aber ebenso Nutzer von Coding-Agents und lasse mir einen Teil meines Codes durch LLMs generieren. Auch Projekte, die auf Codeberg von mir liegen, beinhalten LLM-generierten Code. Ich bin also von dieser Entscheidung direkt betroffen.

Nach langem Überlegen bin ich deshalb zu dem Entschluss gekommen, meine Fördermitgliedschaft bei Codeberg e.V. zu kündigen und über die nächste Zeit meine Projekte zu einer anderen Forge umzuziehen. Meine Beweggründe möchte ich hier erläutern.

## Kritik an LLM berechtigt — aber zu eindimensional
Die Kritik an LLM ist legitim, aber die aktuelle Form ist zu eindimensional. In einem [vorherigen Blogpost](/posts/industrialisierung-der-softwareentwicklung/#warum-ich-trotzdem-mitmache) habe ich meine Bedenken bereits zum Ausdruck gebracht. LLMs birgen große Risiken für unser Zusammenleben in der Gesellschaft. Auch ihre Auswirkungen auf die Kunst und Kultur sind bedenklich. Die Macht, die große Tech-Konzerne haben, ist bedenklich und gefährdet unsere Demokratie. Die Auswirkungen auf die Umwelt, die durch das Training und das Betreiben der LLMs entstehen, müssen scharf beobachtet werden. LLMs mit Atom- oder Gasstrom zu betreiben bringt uns nur tiefer in die Klimakrise.

Der Geist ist aber nun mal aus der Flasche, wir werden LLMs nicht mehr wegbekommen. Ein kritischer Umgang mit LLMs ist notwendig - aber das ist etwas anderes als ein pauschales Verbot.

Außerdem gilt, was der Philosoph Theodor W. Adorno bereits gesagt hat:
> Es gibt kein richtiges Leben im falschen.

Wir leben in einer Welt, in der es LLMs gibt. Wir als Gesellschaft müssen uns damit beschäftigen und eine kritischen Umgang finden. Dies kann nur gelingen, wenn wir uns mit den Systemen beschäftigen und uns argumentiv dazu austauschen.

## Tribalismus
Im Diskurs zu LLM-generierten Code nehme ich eine immer stärkere Lagerbildung war, sei es nun im privaten, beruflichen oder open-source Kontext. Es entsteht ein Wir-gegen-Die-Denken, bei der es scheinbar nur zwei Pole gibt, die sich fast schon feindlich gegenüberstehen. Wie auch im allgemeinen politischen Diskurs gibt es kein Grau mehr, nur Schwarz oder Weiß. So verhärten sich die Lager und eine Diskussion ist nicht mehr möglich.

Gerade im Nachklang der Codeberg-Entscheidung habe ich in Issues oder auf Mailinglisten häufig das Argument "hoste es doch selber, Forgejo (die Plattform mit der Codeberg betrieben wird) ist doch Open Source.". Um etwas zuzuspitzen erinnerte mich das an das Argument "dann geh doch nach drüben!" aus dem kalten Krieg. Das Argument ist mir zu eindimensional. Ich kann durchaus mit bestimmten Punkten bei Codeberg nicht einverstanden sein, aber die Grundidee der Plattform trotzdem unterstützen.

Ein "wir gegen die" denken hilft niemanden weiter und unterbindet einen Diskurs im Entstehen.

## Demokratie - aber für wen?

Ein Argument, das mir seit der Entscheidung immer wieder begegnet: Das sei doch demokratisch gelaufen, die Mitglieder hätten schließlich abgestimmt. Stimmt - nur eben nicht die Mitglieder von Codeberg, sondern die Mitglieder des Codeberg e.V. Das ist ein Unterschied, der in der Debatte gerne untergeht.

Codeberg wird von einer Vielzahl an Nutzer:innen verwendet, weit über den Kreis der Vereinsmitglieder hinaus. Abgestimmt haben aber nur diese, und davon auch nur etwa die Hälfte. Am Ende haben also gut 500 Menschen eine Regel beschlossen, die für alle gilt. Wenige entscheiden über viele.

Mitglied werden kann grundsätzlich jeder. Aber genau das nehme ich als Ausrede wahr, wenn es um eine derart grundlegende Entscheidung geht. Bei einer Änderung, die direkt in die Nutzung der Plattform eingreift, hätte ich mir eine Rückkopplung an die gesamte Community gewünscht, ein RFC, eine offene Diskussion, eine Umfrage unter allen Nutzer:innen. Stattdessen wurde intern entschieden, was für alle gilt.

## Ressourcenschutz - aber für alle gleich

Ein Argument aus der Codeberg-Diskussion halte ich für absolut berechtigt: Der Schutz der Infrastruktur. Codeberg wird von Freiwilligen betrieben, in deren Freizeit, kostenlos zur Verfügung gestellt für die Community. Wer diese Ressourcen überlastet, dem darf und sollte man den Zugang begrenzen oder im Zweifel auch sperren.

Zu viele oder zu schnelle Pushes, exzessive Zugriffe, eine Flut an automatisiert erzeugten Issues, all das belastet eine Infrastruktur, die niemand kommerziell querfinanziert. Wer hier über die Stränge schlägt, verhält sich rücksichtslos gegenüber den Menschen, die diesen Dienst am Laufen halten.

Nur: Diese Belastung hat nichts mit LLMs zu tun. Sie entsteht durch Verhalten, nicht durch das Werkzeug, mit dem der Code entstanden ist. Ein Script, das im Minutentakt pusht, überlastet die Server genauso, ob dahinter ein Mensch mit LLM, ein Mensch ohne LLM oder ein Bot ohne jede Code-Erzeugung steckt. Eine Regel, die Ressourcen schützen will, muss deshalb für alle gelten, unabhängig davon, ob jemand LLM-affin ist oder nicht.

Was es dafür braucht, ist keine Regel gegen ein bestimmtes Werkzeug, sondern eine gute, transparente Metrik: Wie viele Pushes pro Stunde sind noch vertretbar, wie viele erstellte Issues, wie viele Requests pro Minute. Eine Grenze, an der sich alle messen lassen müssen, gleich womit sie ihren Code schreiben.

## Wie können LLMs sinnvoll eingesetzt werden
Nicht jeder, der LLM nutzt, ist ein "Vibe Coder". Das Feld des "Agentic Codings" hat sich in den letzten Monaten enorm schnell weiterentwickelt. Natürlich gibt es weiterhin einfach "hingerotzte" Projekte ohne großen Anspruch. Aber immer mehr Code entsteht mit oder durch LLMs, der geplant, sorgfältig implementiert, getestet und gereviewed ist. Ein Coding-Agent ist hier dann nur ein Werkzeug der Code-Erstellung. Planung und Verifizierung findet weiter durch Menschen statt.

Gerade wenn es um das Finden und Beheben von Sicherheitslücken geht kann ein LLM ein unverzichtbares Werkzeug sein. @DrWhax hat es mit einem [Post](https://infosec.exchange/@drwhax/116997238394916522) auf Mastodon gut zusammengefasst:

> You cannot patch faster than the attackers can easily chain all kinds of vulnerabilities together.

Für Angreifer gehören LLMs schon jetzt fest ins Repotoiure der Angriffs-Werkzeuge. Sie finden Lücken viel besser als Menschen, weil sie nicht müde werden und viel mehr Rechenpower darauf werden können. Die Angriffswege zu diesen Lücken liefern sie dann häufig noch frei Haus.

Viele Open-Source-Projekte haben Probleme, überhaupt noch zu patchen, da sie nicht genug Maintainer haben. Bug-Reports, die durch oder mit LLMs gefunden werden, überlasten das System noch weiter. curl-Maintainer Daniel Stenberg hat genau das in seinem Blogpost ["The end of the curl bug-bounty"](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/) beschrieben: Die Quote bestätigter Schwachstellen unter den eingereichten Reports fiel 2025 auf unter 5%, weil das Bugbounty-Programm mit KI-generiertem "Slop" überflutet wurde, bis das Team die Geldprämien komplett strich. Bemerkenswert ist der Effekt, den er in seinem Folgepost ["High-Quality Chaos"](https://daniel.haxx.se/blog/2026/04/22/high-quality-chaos/) beschreibt: Ohne Geldprämie kamen zwar etwa doppelt so viele Reports wie 2025, die Bestätigungsquote stieg aber auf 15-16%. Fast jeder Report wirkt weiterhin KI-unterstützt, nur eben deutlich sorgfältiger.

@DrWhax fasst es überspitzt so zusammen:

> I think outright not running an LLM over your codebase to find critical security vulnerabilities because of your moral stance will keep us more insecure.

Ein LLM-Verbot bedeutet also nicht nur "kein Vibe Coding", sondern auch, dass Sicherheitslücken unentdeckt bleiben können. LLMs können gerade bei kritischer, internet-facing Infrastruktur ein Werkzeug für *mehr* Sicherheit sein.

Was bringt uns Open-Source-Software, die ohne LLM-Nutzung nicht gefundene oder nicht gehobene Sicherheitslücken hat? Man fühlt sich dann vielleicht im "moralischen Highground", gefährdet aber seine Nutzer speziellen und der Sache der Open-Source-Bewegung im allgemeinen.

## Die Sache mit der Freiheit

Das bringt mich zum Titel dieses Beitrags. Mein Verständnis von Freiheit orientiert sich an einem Satz, der gerne Voltaire zugeschrieben wird, tatsächlich aber von seiner Biografin Evelyn Beatrice Hall stammt:

> Ich bin zwar anderer Meinung als Sie, aber ich würde mein Leben dafür geben, dass Sie Ihre Meinung frei aussprechen dürfen.

Übertragen auf dieses Thema heißt das: Ich muss LLM-gestütztes Arbeiten nicht gutheißen, um es zu tolerieren, genauso wenig, wie ich eine Meinung teilen muss, um für das Recht zu kämpfen, sie zu äußern. Die Freiheit, mit welchen Werkzeugen ich Code schreibe, sollte nicht dort enden, wo sie jemandem moralisch missfällt, sondern erst dort, wo sie anderen tatsächlich schadet, etwa durch überlastete Infrastruktur. Genau das ist der Vorbehalt im Titel dieses Beitrags: Freiheit ist nicht grenzenlos, aber die Grenze sollte am Schaden liegen, nicht an der Frage, ob einem ein Werkzeug gefällt.

Natürlich kann man entgegnen: LLMs schaden unserer Umwelt und auch unserer Gesellschaft. Ich denke aber, dass das nicht LLM-imanent ist. Ich kann mir eine Welt vorstellen, in der wir KIs mit Solar- oder Windenergie und nur freiem oder lizensiertem Material tranieren. Nur, weil es heute noch nicht gemacht wurde heißt ja nicht, das es nicht geht.

## Wieso verlasse ich nun aber Codeberg?
"Put your money where your mouth is". Worte müssen auch Taten folgen. Auch wenn es mir schwer fällt, die guten Ziele von Codeberg nicht mehr finanziell zu unterstützen, so fühle ich mich aktuell bei Codeberg fehl am Platz. Meine eigene Einstellung zu LLMs scheint mit der Mehrheit der Vereinsmitglieder nicht mehr übereinzustimmen. Da der Verein die Plattform maßgeblich gestaltet hat diese Meinungsverschiedenheit auch eine Auswirkung auf meine Nutzung.

Vorerst schließe ich den Entschluss daraus, dass ich die Plattform und den Verein verlasse. Es muss aber keine Trennung für immer sein. Die Idee und viele der Ideale von Codeberg unterstütze ich aber weiterhin.

Eine Sache möchte ich dem Verein Codeberg e.V. und seinen Mitgliedern aber noch mitgeben: Die Befürworter des LLM-Bans fühlen sich im Recht - sie dürfen jetzt aber nicht dogmatisch werden. Denn ansonsten schaden sie der guten Sache von Codeberg.
