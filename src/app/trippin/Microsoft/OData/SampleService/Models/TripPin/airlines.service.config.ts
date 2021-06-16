//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AirlinesService } from './airlines.service';
//#endregion

//#region ODataApi EntitySetConfig
export const AirlinesServiceEntitySetConfig = {
  name: "Airlines",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Airline",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "Airlines"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      ""
    ]
  }
],
  service: AirlinesService
} as EntitySetConfig;
//#endregion