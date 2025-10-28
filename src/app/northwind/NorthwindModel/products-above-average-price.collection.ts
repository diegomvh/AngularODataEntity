import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { ProductsAboveAveragePrice } from './products-above-average-price.entity';
import { ProductsAboveAveragePriceModel } from './products-above-average-price.model';

export class ProductsAboveAveragePriceCollection<E extends ProductsAboveAveragePrice, M extends ProductsAboveAveragePriceModel<E>> extends ODataCollection<E, M> {
  
}
