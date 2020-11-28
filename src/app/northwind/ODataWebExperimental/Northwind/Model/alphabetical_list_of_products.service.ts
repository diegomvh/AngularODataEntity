import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
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
export class AlphabeticalListOfProductsService extends ODataEntityService<AlphabeticalListOfProduct> {
  constructor(protected client: ODataClient) {
    super(client, 'Alphabetical_list_of_products', 'NorthwindModel.Alphabetical_list_of_product');
  }

  //#region ODataApi Model
  alphabeticalListOfProductModel(): AlphabeticalListOfProductModel<AlphabeticalListOfProduct> {
    return this.entity().asModel() as AlphabeticalListOfProductModel<AlphabeticalListOfProduct>;
  }
  //#endregion
  //#region ODataApi Collection
  alphabeticalListOfProductCollection(): AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>> {
    return this.entities().asCollection() as AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
