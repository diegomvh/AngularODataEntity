import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NotebookLinks } from './notebooklinks.complex';
import { ExternalLink } from './externallink.complex';
import { ExternalLinkModel } from './externallink.model';
import { NotebookLinksCollection } from './notebooklinks.collection';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class NotebookLinksModel<E extends NotebookLinks> extends ODataModel<E> {
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