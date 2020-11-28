import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
import { RecentNotebook } from './recentnotebook.complex';
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
import { RecentNotebookLinksModel } from './recentnotebooklinks.model';
import { RecentNotebookCollection } from './recentnotebook.collection';
import { RecentNotebookLinksCollection } from './recentnotebooklinks.collection';
//#endregion

export class RecentNotebookModel<E extends RecentNotebook> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  lastAccessedTime?: Date;
  links?: RecentNotebookLinksModel<RecentNotebookLinks>;
  sourceService?: OnenoteSourceService;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}