//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirlinesService } from './airlines.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AirlinesServiceEntitySetConfig = {
  name: "Airlines",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Airline",
  annotations: [
  {
    "term": "Org.OData.Core.V1.ResourcePath",
    "string": "Airlines"
  },
  {
    "term": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "term": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      ""
    ]
  }
],
  service: AirlinesService
} as EntitySetConfig;
//#endregion