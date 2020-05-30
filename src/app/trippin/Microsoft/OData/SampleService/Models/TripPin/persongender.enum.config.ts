import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
//#endregion

export const PersonGenderEnumConfig = {
  name: "PersonGender",
  members: PersonGender
} as EnumConfig<PersonGender>;