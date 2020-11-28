import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotebookLinks } from './notebooklinks.entity';
import { NotebookLinksModel } from './notebooklinks.model';
import { NotebookLinksCollection } from './notebooklinks.collection';
//#endregion

export const NotebookLinksConfig = {
  name: "notebookLinks",
  model: NotebookLinksModel,
  collection: NotebookLinksCollection,
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<NotebookLinks>;