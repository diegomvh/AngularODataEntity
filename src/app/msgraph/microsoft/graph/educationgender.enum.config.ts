import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationGender } from './educationgender.enum';
//#endregion

export const EducationGenderConfig = {
  name: "EducationGender",
  members: EducationGender
} as EnumConfig<EducationGender>;