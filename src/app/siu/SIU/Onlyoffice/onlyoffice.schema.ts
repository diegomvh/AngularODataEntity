import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllowConversionConfig } from './allowconversion.entity.config';
//#endregion

export const OnlyofficeSchema = {
  namespace: "SIU.Onlyoffice",
  enums: [],
  entities: [AllowConversionConfig],
  callables: [],
  containers: []
} as SchemaConfig;