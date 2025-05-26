import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CurrentProductList } from '../../../NorthwindModel/current-product-list.entity';

@Injectable()
export class CurrentProductListsService extends ODataEntitySetService<CurrentProductList> {
  constructor(client: ODataClient) {
    super(client, 'Current_Product_Lists', 'NorthwindModel.Current_Product_List');
  }
  currentProductListModel(entity?: Partial<CurrentProductList>) {
    return this.model(entity);
  }
  currentProductListCollection(entities?: Partial<CurrentProductList>[]) {
    return this.collection(entities);
  }
}
