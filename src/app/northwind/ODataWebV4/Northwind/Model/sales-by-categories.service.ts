import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SalesByCategoryModel } from '../../../NorthwindModel/sales-by-category.model';
import { SalesByCategoryCollection } from '../../../NorthwindModel/sales-by-category.collection';
import { SalesByCategory } from '../../../NorthwindModel/sales-by-category.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class SalesByCategoriesService extends ODataEntitySetService<SalesByCategory> {
  constructor(client: ODataClient) {
    super(client, 'Sales_by_Categories', 'NorthwindModel.Sales_by_Category');
  }
  salesByCategoryModel(entity?: Partial<SalesByCategory>) {
    return this.model<SalesByCategoryModel<SalesByCategory>>(entity);
  }
  salesByCategoryCollection(entities?: Partial<SalesByCategory>[]) {
    return this.collection<SalesByCategoryModel<SalesByCategory>, SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>>>(entities);
  }
// #region Custom
// #endregion Custom
}
