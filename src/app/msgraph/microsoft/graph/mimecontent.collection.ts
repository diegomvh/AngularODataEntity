import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.complex';
import { MimeContentModel } from './mimecontent.model';
//#endregion

export class MimeContentCollection<E extends MimeContent, M extends MimeContentModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}