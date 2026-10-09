import { firstValueFrom } from "rxjs";
import { MeService, Person, Photo, Trip } from "../../trip-pin";
import { Injector } from "@angular/core";

async function usingMeServiceForFetchingSingleton(injector: Injector) {
  const meService = injector.get(MeService);

  // A singleton is a single entity addressed by name, without key: GET /Me
  const me = await firstValueFrom(meService.entity().fetchEntity());
  console.log('Me: ', me);

  // Singletons support the same query options as entities
  const meWithTrips = await firstValueFrom(
    meService
      .entity()
      .query((q) => {
        q.select(({ e, t }) => e().fields(t.UserName, t.FirstName, t.LastName));
        q.expand(({ e, t }) => e().field(t.Trips, (f) => f.select(({ e, t }) => e().fields(t.Name, t.Budget))));
      })
      .fetchEntity()
  );
  console.log('Me with Trips: ', meWithTrips);
}

async function usingMeServiceForNavigatingFromSingleton(injector: Injector) {
  const meService = injector.get(MeService);
  const me = meService.entity();

  // Properties and navigation properties of the singleton
  const emails = await firstValueFrom(me.property<string[]>('Emails').fetchProperty());
  console.log('My Emails: ', emails);

  const friends = await firstValueFrom(me.navigationProperty<Person>('Friends').fetchEntities());
  console.log('My Friends: ', friends);

  const trips = await firstValueFrom(me.navigationProperty<Trip>('Trips').fetchEntities());
  console.log('My Trips: ', trips);

  const photo = await firstValueFrom(me.navigationProperty<Photo>('Photo').fetchEntity());
  console.log('My Photo: ', photo);
}

async function usingMeServiceForModifyingSingleton(injector: Injector) {
  const meService = injector.get(MeService);

  // PATCH /Me
  const { entity } = await firstValueFrom(meService.entity().modify({ FirstName: 'Diego' }));
  console.log('Me Modified: ', entity);
}

export default async (injector: Injector) => {
  await usingMeServiceForFetchingSingleton(injector);
  await usingMeServiceForNavigatingFromSingleton(injector);
  await usingMeServiceForModifyingSingleton(injector);
}
