import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Thumbnail } from './thumbnail.complex';
import { ThumbnailModel } from './thumbnail.model';
import { ThumbnailCollection } from './thumbnail.collection';
//#endregion

export const ThumbnailConfig = {
  name: "thumbnail",
  model: ThumbnailModel,
  collection: ThumbnailCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'},
    height: {type: 'Edm.Int32'},
    sourceItemId: {type: 'Edm.String'},
    url: {type: 'Edm.String'},
    width: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Thumbnail>;