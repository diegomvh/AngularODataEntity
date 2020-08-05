import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
import { RecentNotebookLinks } from './recentnotebooklinks.entity';
//#endregion

export interface RecentNotebook {
  //#region ODataApi Properties
  displayName?: string;
  lastAccessedTime?: Date;
  links?: RecentNotebookLinks;
  sourceService?: OnenoteSourceService;
  //#endregion
}