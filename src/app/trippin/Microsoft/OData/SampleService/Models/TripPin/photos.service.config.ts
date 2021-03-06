﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PhotosService } from './photos.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PhotosServiceEntitySetConfig = {
  name: "Photos",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Photo",
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
],
  service: PhotosService
} as EntitySetConfig;
//#endregion