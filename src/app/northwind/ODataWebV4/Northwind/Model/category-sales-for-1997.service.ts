import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CategorySalesFor1997 } from '../../../NorthwindModel/category-sales-for-1997.entity';

@Injectable()
export class CategorySalesFor1997Service extends ODataEntitySetService<CategorySalesFor1997> {
  constructor(client: ODataClient) {
    super(client, 'Category_Sales_for_1997', 'NorthwindModel.Category_Sales_for_1997');
  }
  categorySalesFor1997Model(entity?: Partial<CategorySalesFor1997>) {
    return this.model(entity);
  }
  categorySalesFor1997Collection(entities?: Partial<CategorySalesFor1997>[]) {
    return this.collection(entities);
  }
}
