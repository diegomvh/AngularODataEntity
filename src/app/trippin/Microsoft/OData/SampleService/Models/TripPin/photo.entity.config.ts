//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Photo } from './photo.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PhotoEntityConfig = {
  name: 'Photo',
  annotations: [
  {
    "term": "Org.OData.Core.V1.AcceptableMediaTypes"
  }
],
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Int64', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Photo>;
//#endregion