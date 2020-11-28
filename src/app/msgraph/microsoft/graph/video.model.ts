import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Video } from './video.entity';
import { VideoCollection } from './video.collection';
//#endregion

export class VideoModel<E extends Video> extends ODataModel<E> {
  //#region ODataApi Properties
  audioBitsPerSample?: number;
  audioChannels?: number;
  audioFormat?: string;
  audioSamplesPerSecond?: number;
  bitrate?: number;
  duration?: number;
  fourCC?: string;
  frameRate?: number;
  height?: number;
  width?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}