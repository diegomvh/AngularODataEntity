# Angular OData — Demo Project

A sample application showing how to use [**angular-odata**](https://github.com/diegomvh/angular-odata), a library for consuming [OData](https://www.odata.org/) services from Angular in a typed, declarative and reactive way.

The demo connects to two public OData reference services:

- **TripPin** (`TripPinServiceRW`): people, airlines, airports, trips and photos. This service supports both reads and writes.
- **Northwind** (V4): categories, products, orders and employees.

## What does this project show?

| Feature | Where to look |
| --- | --- |
| Configuring multiple OData APIs with `provideODataClient` | `src/app/app.config.ts` |
| Code generated from `$metadata` (entities, models, collections and services) | `src/app/trip-pin/`, `src/app/northwind/` |
| Tables with server-side paging, sorting and filtering (`$top`, `$skip`, `$orderby`, `$filter`, `$count`) | `src/app/components/` |
| Columns built dynamically from the schema (`structuredType().fields()`) | `src/app/components/` |
| Nested `$expand`, `levels` and media entity downloads (photos) | `src/app/components/trippin/person.component.ts` |
| Queries, filters with `any` lambdas, `$select` and `$expand` | `src/app/examples/trippin/queries.ts` |
| Models and collections: `fetch`, `save` and navigating between entities | `src/app/examples/trippin/models.ts` |
| In-memory and IndexedDB caching, with the different `fetchPolicy` options | `src/app/examples/trippin/cache.ts` |
| Aggregations (`$apply` / `groupBy`) | `src/app/examples/trippin/aggregations.ts` |
| Computed properties (`$compute`) | `src/app/examples/northwind/compute.ts` |
| Serializing and restoring resources (`toJson` / `fromJson`) | `src/app/examples/trippin/json.ts` |
| CRUD with ETags, references, properties, EDM parsers, dynamic metadata | `src/app/app.ts` |

## Stack

- Angular 22 (standalone components, signals, `inject()`, `@if` / `@for` control flow)
- angular-odata
- PrimeNG 22 (tables, tabs, dialogs) and Tailwind CSS 4

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm start
```

Then open `http://localhost:4200/`. The app has two tabs, **TripPin** and **Northwind**, with tables that run live OData queries against the public services.

> `npm start` runs `ng serve` with `proxy.conf.json`. The proxy forwards `/trippin` to the TripPin service to avoid CORS issues. TripPin RW uses a session URL (`(S(...))`); if the session expires, get a new one by visiting `https://services.odata.org/V4/TripPinServiceRW/` and update the `target` in `proxy.conf.json`.

## Project structure

```
src/app/
├── app.config.ts          # OData API registration (TripPin, Northwind, dynamic APIs)
├── app.ts / app.html      # Tabbed shell + client usage examples
├── components/
│   ├── trippin/           # Airlines, Airports, People, Person (detail)
│   └── northwind/         # Categories, Products, Orders, Employees
├── examples/              # Self-contained examples of the angular-odata API
├── trip-pin/              # Generated code for TripPin
└── northwind/             # Generated code for Northwind
```

## How angular-odata works

### 1. Generate code from the metadata

The library ships with a schematic (`apigen`) that reads a service's `$metadata` document and generates interfaces, models, collections, services and the API configuration:

```bash
npm run apigen:trippin
npm run apigen:northwind
```

### 2. Register the APIs

```ts
provideODataClient({
  config: [
    Object.assign(NorthwindConfig, {
      cache: new ODataInMemoryCache({ maxAge: 60 }),
    }),
    Object.assign(TripPinConfig, {
      serviceRootUrl: 'http://localhost:4200/trippin/',
      cache: new ODataIndexedDBCache({ maxAge: 60, name: 'TripPinCache', version: 1 }),
      default: true,
    }),
  ],
});
```

You can also register an API without generated code and populate it at runtime from its metadata (`populateFromMetadata: true`). This is how `TripPinDynamic` and `MicrosoftGraph` are configured.

### 3. Query with typed services

```ts
const peopleService = inject(PeopleService);

peopleService
  .entities()
  .query((q) => q
    .filter(({ e, t }) => e().contains(t.UserName, 'russell'))
    .expand(({ e, t }) => e().field(t.Friends))
    .orderBy([['LastName', 'asc']])
    .top(10))
  .fetch({ withCount: true })
  .subscribe(({ entities, annots }) => console.log(entities, annots.count));
```

### 4. Work with models

```ts
const scott = peopleService.model<PersonModel<Person>>({ UserName: 'scottketchum' });
await firstValueFrom(scott.fetch());
scott.Gender = PersonGender.Female;
await firstValueFrom(scott.save());
```

## Running the examples

The examples in `src/app/examples/` and the `App` methods print their results to the browser console. The root component instance is exposed as `window.APP`, so you can run them from DevTools:

```js
APP.queries();     // runs the active example inside queries()
APP.personCRUD();  // creates, reads, updates and deletes a person in TripPin
APP.encode();      // EDM and enum parsers
```

To choose which example runs, comment or uncomment the corresponding lines in `App.queries()` (`src/app/app.ts`).

## Resources

- angular-odata: https://github.com/diegomvh/angular-odata
- npm package: https://www.npmjs.com/package/angular-odata
- OData specification: https://www.odata.org/documentation/
