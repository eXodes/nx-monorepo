# Nx Monorepo with Frameworks

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/eXodes/nx-monorepo/CI/main)

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are plugins used:

- [SvelteKit](https://kit.svelte.dev)

  - `npm install --save-dev @nxext/sveltekit`

- [Svelte](https://svelte.dev)
  - `npm install --save-dev @nxext/svelte`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nxext/sveltekit:application $app-name` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Libraries are shareable across libraries and applications. They can be imported from `@nx-monorepo/$lib-name`.

Add a `package.json` file to the root of your library and duplicate the content of the `package.json` file of other library except for the name.

### Component

Run `nx g @nxext/svelte:library $lib-name` to generate a Svelte component library.

### Function

Run `nx g lib $lib-name` to generate a functional library.

## Code scaffolding

Run `nx g @nxext/svelte:component $component-name --project=$lib-name` to generate a new component.

## Development server

Run `npm run serve` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running tests

Run `npm run test` to execute the tests for all the projects.

Run `nx affected:test` to execute the tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
