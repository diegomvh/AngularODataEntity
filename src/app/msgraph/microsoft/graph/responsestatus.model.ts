import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResponseType } from './responsetype.enum';
import { ResponseStatus } from './responsestatus.entity';
import { ResponseStatusCollection } from './responsestatus.collection';
//#endregion

export class ResponseStatusModel<E extends ResponseStatus> extends ODataModel<E> {
  //#region ODataApi Properties
  response?: ResponseType;
  time?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}