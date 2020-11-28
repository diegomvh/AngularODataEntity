import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoChange } from './recursochange.entity';
import { RecursoChangeModel } from './recursochange.model';
//#endregion

export class RecursoChangeCollection<E extends RecursoChange, M extends RecursoChangeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}