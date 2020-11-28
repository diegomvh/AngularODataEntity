import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Audio } from './audio.complex';
import { AudioCollection } from './audio.collection';
//#endregion

export class AudioModel<E extends Audio> extends ODataModel<E> {
  //#region ODataApi Properties
  album?: string;
  albumArtist?: string;
  artist?: string;
  bitrate?: number;
  composers?: string;
  copyright?: string;
  disc?: number;
  discCount?: number;
  duration?: number;
  genre?: string;
  hasDrm?: boolean;
  isVariableBitrate?: boolean;
  title?: string;
  track?: number;
  trackCount?: number;
  year?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}