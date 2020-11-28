import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContentTypeInfo } from './contenttypeinfo.complex';
import { ContentTypeInfoModel } from './contenttypeinfo.model';
import { ContentTypeInfoCollection } from './contenttypeinfo.collection';
//#endregion

export const ContentTypeInfoConfig = {
  name: "contentTypeInfo",
  model: ContentTypeInfoModel,
  collection: ContentTypeInfoCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ContentTypeInfo>;