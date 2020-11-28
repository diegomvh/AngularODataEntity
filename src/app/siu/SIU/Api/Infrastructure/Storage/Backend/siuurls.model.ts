import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsModel } from './sourceurls.model';
import { SiuUrls } from './siuurls.entity';
import { SiuUrlsCollection } from './siuurls.collection';
//#endregion

export class SiuUrlsModel<E extends SiuUrls> extends SourceUrlsModel<E> {
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