import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhotosService } from './photos.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PhotosConfig = {
  name: "Photos",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Photo",
  service: PhotosService,
  annotations: [
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "Photos"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      ""
    ]
  }
]
} as EntitySetConfig;
//#endregion