import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.complex';
import { RecentNotebookLinks } from './recentnotebooklinks.complex';
import { ExternalLinkModel } from './externallink.model';
import { RecentNotebookLinksModel } from './recentnotebooklinks.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class RecentNotebookLinksCollection<E extends RecentNotebookLinks, M extends RecentNotebookLinksModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}