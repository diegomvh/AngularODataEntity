import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { RecentNotebookLinks } from './recentnotebooklinks.entity';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
import { RecentNotebookLinksCollection } from './recentnotebooklinks.collection';
//#endregion

export class RecentNotebookLinksModel<E extends RecentNotebookLinks> extends ODataModel<E> {
  //#region ODataApi Properties
  oneNoteClientUrl?: ExternalLinkModel<ExternalLink>;
  oneNoteWebUrl?: ExternalLinkModel<ExternalLink>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}