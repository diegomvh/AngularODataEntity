import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProductsAboveAveragePrice } from './products_above_average_price.entity';
import { ProductsAboveAveragePriceCollection } from './products_above_average_price.collection';
//#endregion

export class ProductsAboveAveragePriceModel<E extends ProductsAboveAveragePrice> extends ODataModel<E> {
  //#region ODataApi Properties
  productName: string;
  unitPrice?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}