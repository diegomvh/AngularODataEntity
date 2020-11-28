import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsModel } from './sourceurls.model';
import { SkuaUrls } from './skuaurls.entity';
import { SkuaUrlsCollection } from './skuaurls.collection';
//#endregion

export class SkuaUrlsModel<E extends SkuaUrls> extends SourceUrlsModel<E> {
  //#region ODataApi Properties
  embedded?: string;
  share?: string;
  proxyPdf?: string;
  proxyHtml?: string;
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