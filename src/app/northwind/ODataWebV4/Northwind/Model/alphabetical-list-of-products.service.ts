import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { AlphabeticalListOfProductModel } from '../../../NorthwindModel/alphabetical-list-of-product.model';
import { AlphabeticalListOfProductCollection } from '../../../NorthwindModel/alphabetical-list-of-product.collection';
import { AlphabeticalListOfProduct } from '../../../NorthwindModel/alphabetical-list-of-product.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class AlphabeticalListOfProductsService extends ODataEntitySetService<AlphabeticalListOfProduct> {
  constructor(client: ODataClient) {
    super(client, 'Alphabetical_list_of_products', 'NorthwindModel.Alphabetical_list_of_product');
  }
  alphabeticalListOfProductModel(entity?: Partial<AlphabeticalListOfProduct>) {
    return this.model<AlphabeticalListOfProductModel<AlphabeticalListOfProduct>>(entity);
  }
  alphabeticalListOfProductCollection(entities?: Partial<AlphabeticalListOfProduct>[]) {
    return this.collection<AlphabeticalListOfProductModel<AlphabeticalListOfProduct>, AlphabeticalListOfProductCollection<AlphabeticalListOfProduct, AlphabeticalListOfProductModel<AlphabeticalListOfProduct>>>(entities);
  }
// #region Custom
// #endregion Custom
}
