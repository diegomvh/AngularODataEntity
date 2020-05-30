import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const MeServiceConfig = {
  name: "Me",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath"
  }
]
} as ServiceConfig;