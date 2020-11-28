import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
import { RecentNotebookLinksModel } from './recentnotebooklinks.model';
import { RecentNotebookLinksCollection } from './recentnotebooklinks.collection';
//#endregion

export const RecentNotebookLinksConfig = {
  name: "recentNotebookLinks",
  model: RecentNotebookLinksModel,
  collection: RecentNotebookLinksCollection,
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as StructuredTypeConfig<RecentNotebookLinks>;