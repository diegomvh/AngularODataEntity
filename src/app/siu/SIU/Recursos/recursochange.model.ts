import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoChange } from './recursochange.entity';
import { RecursoChangeCollection } from './recursochange.collection';
//#endregion

export class RecursoChangeModel<E extends RecursoChange> extends ODataModel<E> {
  //#region ODataApi Properties
  created?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}