import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeService } from './me.service';
//#endregion

//#region ODataApi EntitySetConfig
export const MeConfig = {
  name: "Me",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Person",
  service: MeService,
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "Me"
  }
]
} as EntitySetConfig;
//#endregion