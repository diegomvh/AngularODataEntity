import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategorySalesFor1997 } from '../../../NorthwindModel/category_sales_for_1997.entity';
import { CategorySalesFor1997Model } from '../../../NorthwindModel/category_sales_for_1997.model';
import { CategorySalesFor1997Collection } from '../../../NorthwindModel/category_sales_for_1997.collection';
//#endregion

@Injectable()
export class CategorySalesFor1997Service extends ODataEntitySetService<CategorySalesFor1997> {
  constructor(client: ODataClient) {
    super(client, 'Category_Sales_for_1997', 'NorthwindModel.Category_Sales_for_1997');
  }
  //#region ODataApiGen Model
  categorySalesFor1997Model(attrs?: Partial<CategorySalesFor1997>): CategorySalesFor1997Model<CategorySalesFor1997> {
    return this.entity().asModel<CategorySalesFor1997Model<CategorySalesFor1997>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  categorySalesFor1997Collection(models?: Partial<CategorySalesFor1997>[]): CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>> {
    return this.entities().asCollection<CategorySalesFor1997Model<CategorySalesFor1997>, CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
