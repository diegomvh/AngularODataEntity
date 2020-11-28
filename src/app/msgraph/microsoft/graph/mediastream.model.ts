import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaDirection } from './mediadirection.enum';
import { Modality } from './modality.enum';
import { MediaStream } from './mediastream.complex';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export class MediaStreamModel<E extends MediaStream> extends ODataModel<E> {
  //#region ODataApi Properties
  direction: MediaDirection;
  label?: string;
  mediaType: Modality;
  serverMuted: boolean;
  sourceId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}