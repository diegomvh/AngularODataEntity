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
import { AlphabeticalListOfProduct } from './alphabetical-list-of-product.entity';
import { AlphabeticalListOfProductModel } from './alphabetical-list-of-product.model';

export class AlphabeticalListOfProductCollection<E extends AlphabeticalListOfProduct, M extends AlphabeticalListOfProductModel<E>> extends ODataCollection<E, M> {
  
}
