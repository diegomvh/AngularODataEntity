import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { AlphabeticalListOfProduct } from '../../../NorthwindModel/alphabetical-list-of-product.entity';

@Injectable()
export class AlphabeticalListOfProductsService extends ODataEntitySetService<AlphabeticalListOfProduct> {
  constructor(client: ODataClient) {
    super(client, 'Alphabetical_list_of_products', 'NorthwindModel.Alphabetical_list_of_product');
  }
  alphabeticalListOfProductModel(entity?: Partial<AlphabeticalListOfProduct>) {
    return this.model(entity);
  }
  alphabeticalListOfProductCollection(entities?: Partial<AlphabeticalListOfProduct>[]) {
    return this.collection(entities);
  }
}
