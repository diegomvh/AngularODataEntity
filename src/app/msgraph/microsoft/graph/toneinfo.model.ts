import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Tone } from './tone.enum';
import { ToneInfo } from './toneinfo.complex';
import { ToneInfoCollection } from './toneinfo.collection';
//#endregion

export class ToneInfoModel<E extends ToneInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  sequenceId: number;
  tone: Tone;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}