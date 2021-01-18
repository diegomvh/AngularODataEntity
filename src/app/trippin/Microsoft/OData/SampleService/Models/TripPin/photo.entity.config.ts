import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
import { PhotoModel } from './photo.model';
import { PhotoCollection } from './photo.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const PhotoEntityConfig = {
  name: "Photo",
  model: PhotoModel,
  collection: PhotoCollection,
  annotations: [{"type":"Org.OData.Core.V1.AcceptableMediaTypes"}],
  fields: {
    Id: {type: 'Edm.Int64', key: true, ref: 'Id', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Photo>;
//#endregion