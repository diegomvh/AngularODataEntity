import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BooleanColumn } from './booleancolumn.entity';
import { BooleanColumnModel } from './booleancolumn.model';
//#endregion

export class BooleanColumnCollection<E extends BooleanColumn, M extends BooleanColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}