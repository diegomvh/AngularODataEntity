import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecentNotebook } from './recentnotebook.entity';
//#endregion

export const RecentNotebookConfig = {
  name: "recentNotebook",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastAccessedTime: {type: 'Edm.DateTimeOffset'},
    links: {type: 'graph.recentNotebookLinks'},
    sourceService: {type: 'graph.onenoteSourceService'}
  }
} as EntityConfig<RecentNotebook>;