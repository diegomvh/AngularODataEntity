import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResponseType } from './responsetype.enum';
import { ResponseStatus } from './responsestatus.complex';
import { ResponseStatusModel } from './responsestatus.model';
//#endregion

export class ResponseStatusCollection<E extends ResponseStatus, M extends ResponseStatusModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}