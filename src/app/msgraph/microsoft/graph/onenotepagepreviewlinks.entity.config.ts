import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePagePreviewLinks } from './onenotepagepreviewlinks.entity';
//#endregion

export const OnenotePagePreviewLinksConfig = {
  name: "onenotePagePreviewLinks",
  annotations: [],
  fields: {
    previewImageUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<OnenotePagePreviewLinks>;