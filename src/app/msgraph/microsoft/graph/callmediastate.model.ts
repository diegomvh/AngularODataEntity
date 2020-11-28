import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaState } from './mediastate.enum';
import { CallMediaState } from './callmediastate.complex';
import { CallMediaStateCollection } from './callmediastate.collection';
//#endregion

export class CallMediaStateModel<E extends CallMediaState> extends ODataModel<E> {
  //#region ODataApi Properties
  audio?: MediaState;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}