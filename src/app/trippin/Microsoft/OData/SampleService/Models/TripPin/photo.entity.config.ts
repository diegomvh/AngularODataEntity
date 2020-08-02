import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
//#endregion

export const PhotoConfig = {
  name: "Photo",
  annotations: [{"type":"Org.OData.Core.V1.AcceptableMediaTypes"}],
  fields: {
    id: {name: 'Id', type: 'Edm.Int64', key: true, ref: 'id', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    name: {name: 'Name', type: 'Edm.String'}
  }
} as EntityConfig<Photo>;