import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const CitasServiceConfig = {
  name: "citas",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;