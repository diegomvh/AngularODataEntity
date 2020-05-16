import { ServiceConfig } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export const PhotosServiceConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Photos",
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