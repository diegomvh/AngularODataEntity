import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaDirection } from './mediadirection.enum';
import { Modality } from './modality.enum';
import { MediaStream } from './mediastream.complex';
import { MediaStreamModel } from './mediastream.model';
//#endregion

export class MediaStreamCollection<E extends MediaStream, M extends MediaStreamModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}