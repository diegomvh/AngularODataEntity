//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AirportsService } from './airports.service';
//#endregion

//#region ODataApi EntitySetConfig
export const AirportsServiceEntitySetConfig = {
  name: "Airports",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Airport",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "Airports"
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
  },
  {
    "type": "Org.OData.Capabilities.V1.DeleteRestrictions",
    "values": [
      "",
      ""
    ]
  }
],
  service: AirportsService
} as EntitySetConfig;
//#endregion