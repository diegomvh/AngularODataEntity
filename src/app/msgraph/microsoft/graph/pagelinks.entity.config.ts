import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PageLinks } from './pagelinks.entity';
//#endregion

export const PageLinksConfig = {
  name: "PageLinks",
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<PageLinks>;