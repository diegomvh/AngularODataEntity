import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const JuzgadosServiceConfig = {
  name: "juzgados",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;