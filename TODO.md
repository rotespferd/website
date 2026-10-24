# TODO: Fehlende Funktionen aus der Hugo-Live-Seite

## Struktur & Permalinks

- [x] **URL-Struktur auf `/posts/<slug>/` umbauen**: Die Hugo-Seite nutzt `/posts/<slug>/`, der Rewrite nutzt aktuell `/post/<jahr>/<slug>/`. Alle alten Links brechen sonst. Anpassung in `eleventy.config.js` (Permalink-Logic) und ggf. bestehende Posts verschieben.

## SEO & Meta-Tags

- [x] **OpenGraph-Meta-Tags** in `base.njk` ergänzen: `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:type`, `og:site_name`
- [x] **Twitter Card Meta-Tags** in `base.njk` ergänzen: `twitter:card`, `twitter:image`, `twitter:title`, `twitter:description`
- [x] **Schema.org JSON-LD** ergänzen: `WebSite` mit `sameAs` (Social-Links) auf allen Seiten, `BlogPosting` auf Post-Seiten
- [x] **Canonical URL** (`<link rel="canonical">`) in `base.njk` ergänzen

## Assets & Icons

- [ ] **Favicons** einrichten: 16×16, 32×32, apple-touch-icon, mask-icon – Bilddateien anlegen und in `base.njk` verlinken

## Interaktivität & UI

- [x] **Dark/Light-Theme-Toggle**: Button mit Mond/Sonne-SVG + `localStorage`-Persistenz (`pref-theme`) + `prefers-color-scheme`-Fallback
- [ ] **Back-to-Top-Button**: Erscheint beim Scrollen (JS), Chevron-SVG, Accesskey `g`

## Inhalte & Navigation

- [x] **Social-Icons auf der Homepage**: Codeberg, GitHub, Mastodon, LinkedIn als SVG-Icons im glänzenden Toolbar-Stil (Late-2000er), gespeist aus `site.profiles`
- [ ] **UberBlogr Webring** im Footer: `← Zurück` / `Mitglied im UberBlogr Webring` / `Vor im Ring` mit Links zu `uberblogr.de`
- [ ] **Themen-Übersichtsseite** (`/tags/`): Zentrale Liste aller Schlagwörter als Navigationspunkt „Themen" (aktuell nur Sidebar-Cloud + einzelne Tag-Seiten)
