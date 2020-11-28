import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const PadronDepartamentosServiceConfig = {
  name: "padronDepartamentos",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "values": [
      "rev"
    ]
  }
]
} as ServiceConfig;