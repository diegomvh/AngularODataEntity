import { firstValueFrom } from "rxjs";
import { Airline, PeopleService, Person, PersonGender, Photo, PhotosService, PlanItem, Trip } from "../../trip-pin";
import { Injector } from "@angular/core";

async function usingNavigationPropertiesForTraversingRelations(injector: Injector) {
  const peopleService = injector.get(PeopleService);
  const russell = peopleService.entity('russellwhyte');

  // GET /People('russellwhyte')/Friends
  const friends = russell.navigationProperty<Person>('Friends');
  console.log('Friends: ', await firstValueFrom(friends.fetchEntities()));

  // Navigation properties can be queried like entity sets
  const female = friends.clone().query((q) => q.filter(({ e, t }) => e().eq(t.Gender, PersonGender.Female)));
  console.log('Female Friends: ', await firstValueFrom(female.fetchEntities()));

  // And counted: GET /People('russellwhyte')/Friends/$count
  console.log('Friends Count: ', await firstValueFrom(friends.count().fetch()));

  // Chained navigation: GET /People('russellwhyte')/Trips(0)/PlanItems
  const planItems = russell.navigationProperty<Trip>('Trips').key(0).navigationProperty<PlanItem>('PlanItems');
  console.log('Plan Items: ', await firstValueFrom(planItems.fetchEntities()));

  // Derived types with cast: GET /People('russellwhyte')/Trips(0)/PlanItems/NS.Flight
  const flights = planItems.cast<PlanItem & { Airline?: Airline }>('Microsoft.OData.SampleService.Models.TripPin.Flight');
  console.log('Flights: ', await firstValueFrom(flights.fetchEntities()));
}

async function usingReferencesForLinkingEntities(injector: Injector) {
  const peopleService = injector.get(PeopleService);
  const photosService = injector.get(PhotosService);

  const russell = peopleService.entity('russellwhyte');
  const scott = peopleService.entity('scottketchum');

  // Add a link to a collection: POST /People('russellwhyte')/Friends/$ref
  const friends = russell.navigationProperty<Person>('Friends');
  await firstValueFrom(friends.reference().add(scott));
  console.log('Friends After Add: ', await firstValueFrom(friends.fetchEntities()));

  // Remove it: DELETE /People('russellwhyte')/Friends/$ref?$id=...
  await firstValueFrom(friends.reference().remove(scott));
  console.log('Friends After Remove: ', await firstValueFrom(friends.fetchEntities()));

  // Set a single-valued link: PUT /People('russellwhyte')/Photo/$ref
  const photo = russell.navigationProperty<Photo>('Photo');
  await firstValueFrom(photo.reference().set(photosService.entity(1)));
  console.log('Photo: ', await firstValueFrom(photo.fetchEntity()));
}

export default async (injector: Injector) => {
  await usingNavigationPropertiesForTraversingRelations(injector);
  await usingReferencesForLinkingEntities(injector);
}
