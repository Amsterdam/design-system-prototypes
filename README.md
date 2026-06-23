# Amsterdam Design System Prototypes

A prototyping environment for the React Library of the [Amsterdam Design System](https://github.com/Amsterdam/design-system).

## Goals

- Serve as a showcase of what can be created using the library
- Identify missing features and experiment with approaches for them
- Evaluate static designs and finalise the design in the browser

## Public website

All current prototypes are listed here: [amsterdam.github.io/design-system-prototypes](http://amsterdam.github.io/design-system-prototypes).

## How to use

Feel welcome to create your own prototype.

Scaffold the initial directories and files through `pnpm run add site 'Site name'`.

Add a page with `pnpm run add page 'Site name or slug' 'Page name'`.

Present a pull request to have it included on the public website.

## Development with local ADS packages

To develop against a local checkout of the [Amsterdam Design System](https://github.com/Amsterdam/design-system), place the `design-system` repository next to this one (both under the same parent directory) and run:

```sh
pnpm run link
```

This replaces the published ADS npm packages with `link:` references pointing to your local `design-system` workspace.
The dev server picks this up automatically: when `link:` entries are detected in `package.json`, `next.config.mjs` widens Turbopack's module-resolution root so it can follow the symlinks into the sibling workspace.

To go back to the published packages:

```sh
pnpm run unlink
```

This restores all ADS dependencies to their pinned registry versions and reinstalls.

> Before creating a production build, run `pnpm run unlink` to ensure no local `link:` dependencies are used.

## Serving the static build locally

The public website is a static export served from a `/design-system-prototypes` subpath.
To reproduce that locally:

1. Build the static export:
   ```sh
   pnpm run build
   ```
2. Serve it (creates a `.serve/design-system-prototypes` symlink into `out/` and starts a local server):
   ```sh
   pnpm run start
   ```

The site is then available at [http://localhost:3000/design-system-prototypes](http://localhost:3000/design-system-prototypes).
