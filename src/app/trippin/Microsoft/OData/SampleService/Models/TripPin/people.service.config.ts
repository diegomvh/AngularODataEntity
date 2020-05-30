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
    "type": "Org.OData.Core.V1.ResourcePath"
  },
  {
    "type": "Org.OData.Capabilities.V1.NavigationRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions"
  }
]
} as ServiceConfig;