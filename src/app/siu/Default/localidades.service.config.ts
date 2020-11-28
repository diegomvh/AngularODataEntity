import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const LocalidadesServiceConfig = {
  name: "localidades",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;