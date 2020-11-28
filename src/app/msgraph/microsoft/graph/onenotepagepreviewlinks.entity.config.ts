import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
import { OnenotePagePreviewLinksModel } from './onenotepagepreviewlinks.model';
import { OnenotePagePreviewLinksCollection } from './onenotepagepreviewlinks.collection';
//#endregion

export const OnenotePagePreviewLinksConfig = {
  name: "onenotePagePreviewLinks",
  model: OnenotePagePreviewLinksModel,
  collection: OnenotePagePreviewLinksCollection,
  annotations: [],
  fields: {
    previewImageUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<OnenotePagePreviewLinks>;