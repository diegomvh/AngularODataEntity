//#region ODataApiGen ODataImports
import {
  SingletonConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeService } from './me.service';
//#endregion

//#region ODataApiGen SingletonConfig
export const MeServiceSingletonConfig = {
  name: 'Me',
  type: 'Microsoft.OData.SampleService.Models.TripPin.Person',
  annotations: [
  {
    "term": "Org.OData.Core.V1.ResourcePath",
    "string": "Me"
  }
],
  service: MeService
} as SingletonConfig;
//#endregion