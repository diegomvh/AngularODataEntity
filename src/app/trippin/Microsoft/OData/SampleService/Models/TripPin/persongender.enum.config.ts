import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
//#endregion

//#region ODataApi EnumTypeConfig
export const PersonGenderConfig = {
  name: "PersonGender",
  members: PersonGender,
  annotations: [],
  fields: {
    Male: {value: 0},
    Female: {value: 1},
    Unknown: {value: 2}
  }
} as EnumTypeConfig<PersonGender>;
//#endregion