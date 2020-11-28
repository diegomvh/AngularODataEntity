import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
import { RecentNotebookLinksModel } from './recentnotebooklinks.model';
import { RecentNotebookLinksCollection } from './recentnotebooklinks.collection';
//#endregion

export interface RecentNotebook {
  //#region ODataApi Properties
  displayName?: string;
  lastAccessedTime?: Date;
  links?: RecentNotebookLinks;
  sourceService?: OnenoteSourceService;
  //#endregion
}