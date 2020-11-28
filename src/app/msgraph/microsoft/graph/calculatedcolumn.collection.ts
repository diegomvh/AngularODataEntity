import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CalculatedColumn } from './calculatedcolumn.complex';
import { CalculatedColumnModel } from './calculatedcolumn.model';
//#endregion

export class CalculatedColumnCollection<E extends CalculatedColumn, M extends CalculatedColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}