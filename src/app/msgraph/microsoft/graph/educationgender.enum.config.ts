import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationGender } from './educationgender.enum';
//#endregion

export const EducationGenderConfig = {
  name: "educationGender",
  members: EducationGender
} as EnumTypeConfig<EducationGender>;