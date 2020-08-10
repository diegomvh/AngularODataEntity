import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProductsAboveAveragePrice } from './products_above_average_price.entity';
import { ProductsAboveAveragePriceModel } from './products_above_average_price.model';
//#endregion

export class ProductsAboveAveragePriceCollection<E extends ProductsAboveAveragePrice, M extends ProductsAboveAveragePriceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}