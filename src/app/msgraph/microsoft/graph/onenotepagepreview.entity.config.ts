import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePagePreview } from './onenotepagepreview.entity';
//#endregion

export const OnenotePagePreviewConfig = {
  name: "onenotePagePreview",
  annotations: [],
  fields: {
    previewText: {type: 'Edm.String'},
    links: {type: 'graph.onenotePagePreviewLinks'}
  }
} as EntityConfig<OnenotePagePreview>;