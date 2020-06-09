import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const AirportsServiceConfig = {
  name: "Airports",
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
} as ServiceConfig;