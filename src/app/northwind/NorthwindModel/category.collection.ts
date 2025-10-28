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
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';

export class CategoryCollection<E extends Category, M extends CategoryModel<E>> extends ODataCollection<E, M> {
  
}
