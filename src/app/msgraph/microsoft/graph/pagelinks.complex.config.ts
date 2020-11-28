import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PageLinks } from './pagelinks.complex';
import { PageLinksModel } from './pagelinks.model';
import { PageLinksCollection } from './pagelinks.collection';
//#endregion

export const PageLinksConfig = {
  name: "pageLinks",
  model: PageLinksModel,
  collection: PageLinksCollection,
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<PageLinks>;