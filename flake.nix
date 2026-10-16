{
  description = "Development shell for www.marianhahne.de";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              git
              git-lfs
              nodejs
              pnpm
            ];

            shellHook = ''
              echo "Node $(node --version), pnpm $(pnpm --version)"
              [ -d node_modules ] || echo "Run 'pnpm install' to install Eleventy."
              echo "Run 'git lfs pull' if gallery images are still LFS pointer files."
              echo "Run 'serve' for the dev server or 'build' for the production build."

              serve() {
                pnpm exec eleventy --serve
              }

              build() {
                pnpm exec eleventy
              }
            '';
          };
        }
      );
    };
}
