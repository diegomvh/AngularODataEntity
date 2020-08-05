import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EducationExternalSource } from './educationexternalsource.enum';
//#endregion

export const EducationExternalSourceConfig = {
  name: "EducationExternalSource",
  members: EducationExternalSource
} as EnumConfig<EducationExternalSource>;