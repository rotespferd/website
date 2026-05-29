# Website marianhahne.de
The sources of my personal website [www.marianhahne.de](https://www.marianhahne.de).

In this repo you can get a sneak-peak on the posts which are in the making and are stil drafts ;-)

## Development

This repository provides a Nix development shell with Hugo and Git LFS:

```sh
nix develop
```

After cloning, fetch the theme submodules and LFS-managed images:

```sh
git submodule update --init --recursive
git lfs pull
```

Inside the Nix shell, run the local development server with drafts enabled:

```sh
serve
```

Build the production site with:

```sh
build
```
