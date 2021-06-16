//#region AngularOData Imports
import { 
  ApiConfig, 
  EDM_PARSERS 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ModelsSchema } from './CBS/Website/ODataApi/Models/models.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

//#region ODataApi ApiConfig
export const CBSConfig = {
  serviceRootUrl: 'https://www.cbs.nl/odata/v1/',
  name: 'CBS',
  version: '4.0',
  creation: new Date('2021-06-15T22:33:10.9276147-03:00'),
  schemas: [
    ModelsSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion