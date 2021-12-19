//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeService } from './me.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const MeServiceEntitySetConfig = {
  name: 'Me',
  entityType: 'Microsoft.OData.SampleService.Models.TripPin.Person',
  annotations: [
  {
    "term": "Org.OData.Core.V1.ResourcePath",
    "string": "Me"
  }
],
  service: MeService
} as EntitySetConfig;
//#endregion