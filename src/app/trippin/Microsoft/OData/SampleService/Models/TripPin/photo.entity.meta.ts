import { MetaEntity } from 'angular-odata';

import { Photo } from './photo.entity';

export const PhotoMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Photo",
  set: { 
    name: "Photos",
    annotations: [{"type":"Org.OData.Core.V1.ResourcePath"},{"type":"Org.OData.Capabilities.V1.SearchRestrictions"},{"type":"Org.OData.Capabilities.V1.InsertRestrictions"}],
  },
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]},{"type":"Org.OData.Core.V1.AcceptableMediaTypes"}],
  fields: {
    Id: {type: 'number', key: true, ref: 'Id', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string'}
  }
} as MetaEntity<Photo>;