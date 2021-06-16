//#region AngularOData Imports
import { 
  EnumTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
//#endregion

//#region ODataApi EnumTypeConfig
export const PersonGenderConfig = {
  name: "PersonGender",
  members: PersonGender,
  fields: {
    Male: {value: 0},
    Female: {value: 1},
    Unknown: {value: 2}
  }
} as EnumTypeConfig<PersonGender>;
//#endregion