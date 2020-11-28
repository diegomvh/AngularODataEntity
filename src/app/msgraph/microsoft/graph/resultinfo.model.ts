import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResultInfo } from './resultinfo.entity';
import { ResultInfoCollection } from './resultinfo.collection';
//#endregion

export class ResultInfoModel<E extends ResultInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  code: number;
  message?: string;
  subcode: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}