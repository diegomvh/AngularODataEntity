import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const PhotosServiceConfig = {
  name: "Photos",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "Photos"
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
} as EntitySetConfig;