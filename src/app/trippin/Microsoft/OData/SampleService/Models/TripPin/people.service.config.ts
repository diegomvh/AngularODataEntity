import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const PeopleServiceConfig = {
  name: "People",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "Concurrency"
    ]
  },
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "People"
  },
  {
    "type": "Org.OData.Capabilities.V1.NavigationRestrictions"
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
      "TripsFriends"
    ]
  }
]
} as ServiceConfig;