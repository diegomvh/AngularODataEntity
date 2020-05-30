import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const PhotosServiceConfig = {
  name: "PhotosService",
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions"
  }
]
} as ServiceConfig;