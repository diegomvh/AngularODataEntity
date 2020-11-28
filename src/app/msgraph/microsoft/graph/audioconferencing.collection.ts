import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AudioConferencing } from './audioconferencing.entity';
import { AudioConferencingModel } from './audioconferencing.model';
//#endregion

export class AudioConferencingCollection<E extends AudioConferencing, M extends AudioConferencingModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}