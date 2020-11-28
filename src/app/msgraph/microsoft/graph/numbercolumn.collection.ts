import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NumberColumn } from './numbercolumn.entity';
import { NumberColumnModel } from './numbercolumn.model';
//#endregion

export class NumberColumnCollection<E extends NumberColumn, M extends NumberColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}