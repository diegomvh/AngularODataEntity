import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const CategoriasServiceConfig = {
  name: "categorias",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;