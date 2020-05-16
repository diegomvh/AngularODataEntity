import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
//#endregion

export const PersonGenderEnumConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.PersonGender",
  members: PersonGender
} as EnumConfig<PersonGender>;