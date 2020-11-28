import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const DocumentosServiceConfig = {
  name: "documentos",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;