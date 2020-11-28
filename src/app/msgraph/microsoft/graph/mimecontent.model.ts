import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.entity';
import { MimeContentCollection } from './mimecontent.collection';
//#endregion

export class MimeContentModel<E extends MimeContent> extends ODataModel<E> {
  //#region ODataApi Properties
  type?: string;
  value?: ArrayBuffer;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}