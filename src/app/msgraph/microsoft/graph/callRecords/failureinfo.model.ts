import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FailureStage } from './failurestage.enum';
import { FailureInfo } from './failureinfo.complex';
import { FailureInfoCollection } from './failureinfo.collection';
//#endregion

export class FailureInfoModel<E extends FailureInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  reason?: string;
  stage: FailureStage;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}