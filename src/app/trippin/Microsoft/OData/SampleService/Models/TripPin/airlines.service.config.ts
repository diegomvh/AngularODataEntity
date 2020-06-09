import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const AirlinesServiceConfig = {
  name: "Airlines",
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
]
} as ServiceConfig;