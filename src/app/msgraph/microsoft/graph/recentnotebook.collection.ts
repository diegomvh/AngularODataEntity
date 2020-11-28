import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
import { RecentNotebook } from './recentnotebook.complex';
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
import { RecentNotebookModel } from './recentnotebook.model';
import { RecentNotebookLinksModel } from './recentnotebooklinks.model';
import { RecentNotebookLinksCollection } from './recentnotebooklinks.collection';
//#endregion

export class RecentNotebookCollection<E extends RecentNotebook, M extends RecentNotebookModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}