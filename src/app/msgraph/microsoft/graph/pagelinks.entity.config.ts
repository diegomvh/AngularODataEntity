import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PageLinks } from './pagelinks.entity';
//#endregion

export const PageLinksConfig = {
  name: "pageLinks",
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<PageLinks>;