import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePagePreview } from './onenotepagepreview.complex';
import { OnenotePagePreviewModel } from './onenotepagepreview.model';
import { OnenotePagePreviewCollection } from './onenotepagepreview.collection';
//#endregion

export const OnenotePagePreviewConfig = {
  name: "onenotePagePreview",
  model: OnenotePagePreviewModel,
  collection: OnenotePagePreviewCollection,
  annotations: [],
  fields: {
    links: {type: 'graph.onenotePagePreviewLinks'},
    previewText: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenotePagePreview>;