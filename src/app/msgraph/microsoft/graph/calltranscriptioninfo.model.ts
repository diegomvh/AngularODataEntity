import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CallTranscriptionState } from './calltranscriptionstate.enum';
import { CallTranscriptionInfo } from './calltranscriptioninfo.complex';
import { CallTranscriptionInfoCollection } from './calltranscriptioninfo.collection';
//#endregion

export class CallTranscriptionInfoModel<E extends CallTranscriptionInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  lastModifiedDateTime?: Date;
  state: CallTranscriptionState;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}