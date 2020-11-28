import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThumbnailSet } from './thumbnailset.entity';
import { ThumbnailSetModel } from './thumbnailset.model';
import { ThumbnailSetCollection } from './thumbnailset.collection';
//#endregion

export const ThumbnailSetConfig = {
  name: "thumbnailSet",
  base: "microsoft.graph.entity",
  open: true,
  model: ThumbnailSetModel,
  collection: ThumbnailSetCollection,
  annotations: [],
  fields: {
    large: {type: 'graph.thumbnail'},
    medium: {type: 'graph.thumbnail'},
    small: {type: 'graph.thumbnail'},
    source: {type: 'graph.thumbnail'}
  }
} as StructuredTypeConfig<ThumbnailSet>;