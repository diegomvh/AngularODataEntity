import { ODataClient, ODataServiceFactory } from "angular-odata";
import { Injector } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Airport } from "../trip-pin";
import { Order } from "../northwind";

async function usingODataClientForQueryingAirportsUsingTripPinAsyncApi(injector: Injector) {
  const client = injector.get(ODataClient);
  const factory = injector.get(ODataServiceFactory);
  const api = client.apiFor("TripPinAsync");
  const hasSchemas = api.schemas.length !== 0;
  if (!hasSchemas) {
    await firstValueFrom(api.metadata().fetch()).then(metadata => {
      api.populate(metadata);
    });
  }
  const entitySet = api.entitySet<Airport>("Airports")
  const entities = await firstValueFrom(entitySet.fetchEntities());
  console.log(entities);
}

async function usingODataClientForQueryingAirportsUsingMicrosoftGraph(injector: Injector) {
  const client = injector.get(ODataClient);
  const api = client.apiFor("MicrosoftGraph");
  const hasSchemas = api.schemas.length !== 0;
  if (!hasSchemas) {
    await firstValueFrom(api.metadata().fetch()).then(metadata => {
      api.populate(metadata);
    });
  }
}

async function usingODataClientForQueryingAirportsUsingTripPin(injector: Injector) {
  const client = injector.get(ODataClient);
  const api = client.apiFor("TripPin");
  const hasSchemas = api.schemas.length !== 0;
  if (!hasSchemas) {
    await firstValueFrom(api.metadata().fetch()).then(metadata => {
      api.populate(metadata);
    });
  }
  const entitySet = api.entitySet<Airport>("Airports")
  const entities = await firstValueFrom(entitySet.fetchEntities());
  console.log(entities);
}


async function usingODataClientForQueryingUsingNorthwind(injector: Injector) {
  const client = injector.get(ODataClient);
  const api = client.apiFor("Northwind");
  const hasSchemas = api.schemas.length !== 0;
  if (!hasSchemas) {
    await firstValueFrom(api.metadata().fetch()).then(metadata => {
      api.populate(metadata);
    });
  }
  const entitySet = api.entitySet<Order>("Orders")
  const entities = await firstValueFrom(entitySet.fetchEntities());
  console.log(entities);
}

export default async (injector: Injector) => {
  console.log("TripPinAsync Api...");
  await usingODataClientForQueryingAirportsUsingTripPinAsyncApi(injector);
  console.log("MicrosoftGraph Api...");
  await usingODataClientForQueryingAirportsUsingMicrosoftGraph(injector);
  console.log("TripPin Api...");
  await usingODataClientForQueryingAirportsUsingTripPin(injector);
  console.log("Northwind Api...");
  await usingODataClientForQueryingUsingNorthwind(injector);
}
