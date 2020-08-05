import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThumbnailSet } from './thumbnailset.entity';
//#endregion

export const ThumbnailSetConfig = {
  name: "thumbnailSet",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    large: {type: 'graph.thumbnail'},
    medium: {type: 'graph.thumbnail'},
    small: {type: 'graph.thumbnail'},
    source: {type: 'graph.thumbnail'}
  }
} as EntityConfig<ThumbnailSet>;