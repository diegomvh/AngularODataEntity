import { EntityConfig } from 'angular-odata';

import { Photo } from './photo.entity';

export const PhotoEntityConfig = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Photo",
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]},{"type":"Org.OData.Core.V1.AcceptableMediaTypes"}],
  fields: {
    Id: {type: 'number', key: true, ref: 'Id', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'string'}
  }
} as EntityConfig<Photo>;