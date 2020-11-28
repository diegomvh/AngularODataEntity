import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ItemPreviewInfo } from './itempreviewinfo.complex';
import { ItemPreviewInfoCollection } from './itempreviewinfo.collection';
//#endregion

export class ItemPreviewInfoModel<E extends ItemPreviewInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  getUrl?: string;
  postParameters?: string;
  postUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}