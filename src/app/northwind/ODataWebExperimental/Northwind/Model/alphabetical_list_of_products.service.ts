import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from '../../../NorthwindModel/alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductModel } from '../../../NorthwindModel/alphabetical_list_of_product.model';
import { AlphabeticalListOfProductCollection } from '../../../NorthwindModel/alphabetical_list_of_product.collection';
//#endregion

@Injectable()
export class AlphabeticalListOfProductsService extends ODataService<AlphabeticalListOfProduct> {
  constructor(protected client: ODataClient) {
    super(client, 'Alphabetical_list_of_products', 'NorthwindModel.Alphabetical_list_of_product');
  }

  alphabeticalListOfProductModel(): AlphabeticalListOfProductModel<AlphabeticalListOfProduct> {
    return super.model() as AlphabeticalListOfProductModel<AlphabeticalListOfProduct>;
  }
  
  alphabeticalListOfProductsCollection(): AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>> {
    return super.collection() as AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>>;
  }
}
