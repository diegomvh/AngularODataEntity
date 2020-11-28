import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AudioConferencing } from './audioconferencing.entity';
import { AudioConferencingCollection } from './audioconferencing.collection';
//#endregion

export class AudioConferencingModel<E extends AudioConferencing> extends ODataModel<E> {
  //#region ODataApi Properties
  conferenceId?: string;
  dialinUrl?: string;
  tollFreeNumber?: string;
  tollNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}