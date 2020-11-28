import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoUser } from './recursouser.entity';
import { RecursoUserCollection } from './recursouser.collection';
//#endregion

export class RecursoUserModel<E extends RecursoUser> extends ODataModel<E> {
  //#region ODataApi Properties
  id: string;
  name?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}