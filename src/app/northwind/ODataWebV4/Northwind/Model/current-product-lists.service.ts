import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CurrentProductListModel } from '../../../NorthwindModel/current-product-list.model';
import { CurrentProductListCollection } from '../../../NorthwindModel/current-product-list.collection';
import { CurrentProductList } from '../../../NorthwindModel/current-product-list.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class CurrentProductListsService extends ODataEntitySetService<CurrentProductList> {
  constructor(client: ODataClient) {
    super(client, 'Current_Product_Lists', 'NorthwindModel.Current_Product_List');
  }
  currentProductListModel(entity?: Partial<CurrentProductList>) {
    return this.model<CurrentProductListModel<CurrentProductList>>(entity);
  }
  currentProductListCollection(entities?: Partial<CurrentProductList>[]) {
    return this.collection<CurrentProductListModel<CurrentProductList>, CurrentProductListCollection<CurrentProductList, CurrentProductListModel<CurrentProductList>>>(entities);
  }
// #region Custom
// #endregion Custom
}
