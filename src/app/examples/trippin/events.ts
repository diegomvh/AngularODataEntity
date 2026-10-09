import { ODataModelEventType } from "angular-odata";
import { filter, firstValueFrom } from "rxjs";
import { PeopleService, Person, PersonGender, PersonModel } from "../../trip-pin";
import { Injector } from "@angular/core";

async function usingModelEventsForTrackingChanges(injector: Injector) {
  const peopleService = injector.get(PeopleService);
  const russell = peopleService.model<PersonModel<Person>>({ UserName: 'russellwhyte' });

  // Every model emits events: request, sync, change, reset, invalid, destroy...
  russell.events$.subscribe((e) => console.log(`[${e.type}]`, e.path, e.previous, '->', e.value));

  await firstValueFrom(russell.fetch());
  console.log('Has Changed: ', russell.hasChanged());

  russell.FirstName = 'Rusty';
  russell.Gender = PersonGender.Female;
  console.log('Has Changed: ', russell.hasChanged());

  // Discard local changes
  russell.reset();
  console.log('After Reset: ', russell.FirstName, russell.Gender, russell.hasChanged());
}

async function usingModelValidationBeforeSaving(injector: Injector) {
  const peopleService = injector.get(PeopleService);

  // Validation uses the rules from the metadata (Nullable, MaxLength, keys...)
  const someone = peopleService.model<PersonModel<Person>>({ FirstName: 'Some' });
  someone.events$
    .pipe(filter((e) => e.type === ODataModelEventType.Invalid))
    .subscribe((e) => console.log('Invalid: ', e.value));

  console.log('Is Valid: ', someone.isValid({ method: 'create' }));
  console.log('Errors: ', someone.validate({ method: 'create' }));
}

async function usingCollectionEventsForReactingToChanges(injector: Injector) {
  const peopleService = injector.get(PeopleService);
  const people = peopleService.personCollection();

  // Changes in the models bubble up to the collection
  people.events$
    .pipe(filter((e) => e.type === ODataModelEventType.Change))
    .subscribe((e) => console.log('Changed In Collection: ', e.path, e.value));

  await firstValueFrom(people.fetch());
  const first = people.first();
  if (first) first.LastName = 'Changed';
}

export default async (injector: Injector) => {
  await usingModelEventsForTrackingChanges(injector);
  await usingModelValidationBeforeSaving(injector);
  await usingCollectionEventsForReactingToChanges(injector);
}
