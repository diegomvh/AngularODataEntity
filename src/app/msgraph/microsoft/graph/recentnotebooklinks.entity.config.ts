import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecentNotebookLinks } from './recentnotebooklinks.entity';
//#endregion

export const RecentNotebookLinksConfig = {
  name: "RecentNotebookLinks",
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<RecentNotebookLinks>;