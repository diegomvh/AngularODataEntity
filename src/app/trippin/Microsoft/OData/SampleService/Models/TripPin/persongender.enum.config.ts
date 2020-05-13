import { EnumConfig } from 'angular-odata';

import { PersonGender } from './persongender.enum';

export const PersonGenderEnumConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PersonGender",
  members: PersonGender
} as EnumConfig<PersonGender>;