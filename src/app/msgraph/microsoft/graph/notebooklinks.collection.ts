import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NotebookLinks } from './notebooklinks.complex';
import { ExternalLink } from './externallink.complex';
import { NotebookLinksModel } from './notebooklinks.model';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export class NotebookLinksCollection<E extends NotebookLinks, M extends NotebookLinksModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}