import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
//#endregion

export const PersonGenderConfig = {
  name: "PersonGender",
  members: PersonGender
} as EnumConfig<PersonGender>;