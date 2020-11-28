import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CurrencyColumn } from './currencycolumn.entity';
import { CurrencyColumnModel } from './currencycolumn.model';
//#endregion

export class CurrencyColumnCollection<E extends CurrencyColumn, M extends CurrencyColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}