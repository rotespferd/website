const profiles = [
    { name: "Codeberg", url: "https://codeberg.org/rotespferd", icon: "codeberg" },
    { name: "GitHub", url: "https://github.com/rotespferd", icon: "github" },
    { name: "Mastodon", url: "https://nrw.social/@rotespferd", icon: "mastodon" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/marian-hahne-a531b8106/", icon: "linkedin" },
];

export default {
    year: new Date().getFullYear(),
    url: "https://www.marianhahne.de",
    title: "Marians Blog",
    description: "Blog über Kochen, Git und alles, was gerade so passiert.",
    profiles,
    social: profiles.map(profile => profile.url),
};
