//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { MeService } from './me.service';
//#endregion

//#region ODataApi EntitySetConfig
export const MeServiceEntitySetConfig = {
  name: "Me",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Person",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "Me"
  }
],
  service: MeService
} as EntitySetConfig;
//#endregion