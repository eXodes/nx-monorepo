# Nx Monorepo with Frameworks

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/eXodes/nx-monorepo/CI/main)](https://github.com/eXodes/nx-monorepo/actions)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/eXodes/nx-monorepo.svg)](https://lgtm.com/projects/g/eXodes/nx-monorepo/context:javascript)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/eXodes/nx-monorepo)](https://codeclimate.com/github/eXodes/nx-monorepo)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/eXodes/nx-monorepo)
](https://codeclimate.com/github/eXodes/nx-monorepo)

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

- [Nest](https://nestjs.com)

  - `npm install --save-dev @nrwl/nest`

There are also many [community plugins](https://nx.dev/community) you could add.

### Dependencies

Below are the dependencies comes preset with this repo.

- [Svelte Heroicons](https://github.com/JustinVoitel/svelte-hero-icons)

  - `npm install --save-dev svelte-hero-icons`

- [Svelte HeadlessUI](https://github.com/rgossiaux/svelte-headlessui)

  - `npm install --save-dev @rgossiaux/svelte-headlessui`

## Generate an application

When using Nx, you can create multiple applications and libraries in the same workspace.

### SvelteKit

Run `nx g @nxext/sveltekit:application $app-name` to generate an application.

### Nest

Run `nx g @nrwl/nest:app $app-name` to generate an application.

## Generate a library

Libraries are shareable across libraries and applications. They can be imported from `@nx-monorepo/$lib-name`.

Add a `package.json` file to the root of your library and duplicate the content of the `package.json` file of other library except for the name.

### Svelte Component

Run `nx g @nxext/svelte:library $lib-name` to generate a Svelte component library.

### Nest Library

Run `nx g @nrwl/nest:library $lib-name` to generate a Nest library.

**Resource**

Run `nx g @nrwl/nest:resource $resource-name` to generate a Nest resource.

Resource consist of module, controller, service, dto and entities for basic CRUD process.

**Module**

Run `nx g @nrwl/nest:module $module-name` to generate a Nest module.

**Controller**

Run `nx g @nrwl/nest:controller $controller-name` to generate a Nest controller.

**Service**

Run `nx g @nrwl/nest:service $service-name` to generate a Nest service.

**Resolver**

Run `nx g @nrwl/nest:resolver $resolver-name` to generate a Nest resolver.

**Gateway**

Run `nx g @nrwl/nest:gateway $gateway-name` to generate a Nest gateway.

**Middleware**

Run `nx g @nrwl/nest:middleware $middleware-name` to generate a Nest middleware.

**Interceptor**

Run `nx g @nrwl/nest:interceptor $interceptor-name` to generate a Nest interceptor.

**Filter**

Run `nx g @nrwl/nest:filter $filter-name` to generate a Nest filter.

**Guard**

Run `nx g @nrwl/nest:guard $guard-name` to generate a Nest guard.

**Pipe**

Run `nx g @nrwl/nest:pipe $pipe-name` to generate a Nest pipe.

**Decorator**

Run `nx g @nrwl/nest:decorator $decorator-name` to generate a Nest decorator.

**Class**

Run `nx g @nrwl/nest:class $class-name` to generate a Nest class.

> Alternatively, you can use `--project=$lib-name` to skip the prompt for the library name.

### Typescript Function

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
