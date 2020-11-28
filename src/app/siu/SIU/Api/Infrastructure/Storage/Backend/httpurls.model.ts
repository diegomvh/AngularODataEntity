import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsModel } from './sourceurls.model';
import { HttpUrls } from './httpurls.entity';
import { HttpUrlsCollection } from './httpurls.collection';
//#endregion

export class HttpUrlsModel<E extends HttpUrls> extends SourceUrlsModel<E> {
  //#region ODataApi Properties
  embedded?: string;
  share?: string;
  pdf?: string;
  html?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}