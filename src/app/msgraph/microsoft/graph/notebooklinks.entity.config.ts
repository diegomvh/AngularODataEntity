import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotebookLinks } from './notebooklinks.entity';
//#endregion

export const NotebookLinksConfig = {
  name: "notebookLinks",
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<NotebookLinks>;