//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportsService } from './airports.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const AirportsServiceEntitySetConfig = {
  name: "Airports",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Airport",
  annotations: [
  {
    "term": "Org.OData.Core.V1.ResourcePath",
    "string": "Airports"
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
  },
  {
    "term": "Org.OData.Capabilities.V1.DeleteRestrictions",
    "values": [
      "",
      ""
    ]
  }
],
  service: AirportsService
} as EntitySetConfig;
//#endregion