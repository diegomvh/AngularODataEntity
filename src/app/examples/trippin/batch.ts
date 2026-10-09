import { ODataClient } from "angular-odata";
import { firstValueFrom, forkJoin } from "rxjs";
import { AirlinesService, AirportsService, PeopleService } from "../../trip-pin";
import { Injector } from "@angular/core";

async function usingBatchForFetchingSeveralResources(injector: Injector) {
  const client = injector.get(ODataClient);
  const airlinesService = injector.get(AirlinesService);
  const airportsService = injector.get(AirportsService);
  const peopleService = injector.get(PeopleService);

  // Every request made inside exec is queued and sent in a single POST /$batch
  // exec emits once the batch response arrives, with the result of the context and the raw response
  const [results, response] = await firstValueFrom(
    client.batch('TripPin').exec(() =>
      forkJoin({
        airlines: airlinesService.entities().fetchEntities(),
        airports: airportsService.entities().query((q) => q.top(3)).fetchEntities(),
        russell: peopleService.entity('russellwhyte').fetchEntity(),
      })
    )
  );
  console.log('Batch Response: ', response);
  // Each inner observable resolves with its own part of the batch response
  const { airlines, airports, russell } = await firstValueFrom(results);
  console.log('Airlines: ', airlines, 'Airports: ', airports, 'Russell: ', russell);
}

async function usingBatchForChangingSeveralEntities(injector: Injector) {
  const client = injector.get(ODataClient);
  const peopleService = injector.get(PeopleService);

  // Writes can be grouped too
  const [results] = await firstValueFrom(
    client.batch('TripPin').exec(() =>
      forkJoin([
        peopleService.entity('russellwhyte').modify({ LastName: 'White' }),
        peopleService.entity('scottketchum').modify({ LastName: 'Ketchup' }),
      ])
    )
  );
  const [russell, scott] = await firstValueFrom(results);
  console.log('Russell: ', russell.annots.etag, 'Scott: ', scott.annots.etag);
}

export default async (injector: Injector) => {
  await usingBatchForFetchingSeveralResources(injector);
  await usingBatchForChangingSeveralEntities(injector);
}
