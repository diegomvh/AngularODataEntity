import { MetaEnum } from 'angular-odata';

import { PersonGender } from './persongender.enum';

export const PersonGenderMetaEnum = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PersonGender",
  members: PersonGender
} as MetaEnum<PersonGender>;