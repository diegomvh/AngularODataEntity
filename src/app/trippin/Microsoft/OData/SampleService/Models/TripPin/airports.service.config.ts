import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { AirportsService } from './airports.service';
//#endregion

//#region ODataApi EntitySetConfig
export const AirportsConfig = {
  name: "Airports",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Airport",
  service: AirportsService,
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
]
} as EntitySetConfig;
//#endregion