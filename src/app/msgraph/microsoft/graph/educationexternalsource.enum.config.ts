import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationExternalSource } from './educationexternalsource.enum';
//#endregion

export const EducationExternalSourceConfig = {
  name: "educationExternalSource",
  members: EducationExternalSource
} as EnumTypeConfig<EducationExternalSource>;