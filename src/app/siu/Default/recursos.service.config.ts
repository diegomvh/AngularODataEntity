import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const RecursosServiceConfig = {
  name: "recursos",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;