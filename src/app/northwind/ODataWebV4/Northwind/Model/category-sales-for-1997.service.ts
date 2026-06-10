import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CategorySalesFor1997Model } from '../../../NorthwindModel/category-sales-for-1997.model';
import { CategorySalesFor1997Collection } from '../../../NorthwindModel/category-sales-for-1997.collection';
import { CategorySalesFor1997 } from '../../../NorthwindModel/category-sales-for-1997.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class CategorySalesFor1997Service extends ODataEntitySetService<CategorySalesFor1997> {
  constructor(client: ODataClient) {
    super(client, 'Category_Sales_for_1997', 'NorthwindModel.Category_Sales_for_1997');
  }
  categorySalesFor1997Model(entity?: Partial<CategorySalesFor1997>) {
    return this.model<CategorySalesFor1997Model<CategorySalesFor1997>>(entity);
  }
  categorySalesFor1997Collection(entities?: Partial<CategorySalesFor1997>[]) {
    return this.collection<CategorySalesFor1997Model<CategorySalesFor1997>, CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>>>(entities);
  }
// #region Custom
// #endregion Custom
}
