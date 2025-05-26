import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SalesByCategory } from '../../../NorthwindModel/sales-by-category.entity';

@Injectable()
export class SalesByCategoriesService extends ODataEntitySetService<SalesByCategory> {
  constructor(client: ODataClient) {
    super(client, 'Sales_by_Categories', 'NorthwindModel.Sales_by_Category');
  }
  salesByCategoryModel(entity?: Partial<SalesByCategory>) {
    return this.model(entity);
  }
  salesByCategoryCollection(entities?: Partial<SalesByCategory>[]) {
    return this.collection(entities);
  }
}
