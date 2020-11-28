import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaState } from './mediastate.enum';
import { CallMediaState } from './callmediastate.entity';
import { CallMediaStateModel } from './callmediastate.model';
//#endregion

export class CallMediaStateCollection<E extends CallMediaState, M extends CallMediaStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}