//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PhotosService } from './photos.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PhotosServiceEntitySetConfig = {
  name: 'Photos',
  entityType: 'Microsoft.OData.SampleService.Models.TripPin.Photo',
  annotations: [
  {
    "term": "Org.OData.Core.V1.ResourcePath",
    "string": "Photos"
  },
  {
    "term": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "term": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      ""
    ]
  }
],
  service: PhotosService
} as EntitySetConfig;
//#endregion