import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CategorySalesFor1997 } from '../../../NorthwindModel/category_sales_for_1997.entity';
import { CategorySalesFor1997Model } from '../../../NorthwindModel/category_sales_for_1997.model';
import { CategorySalesFor1997Collection } from '../../../NorthwindModel/category_sales_for_1997.collection';
//#endregion

@Injectable()
export class CategorySalesFor1997Service extends ODataEntitySetService<CategorySalesFor1997> {
  constructor(protected client: ODataClient) {
    super(client, 'Category_Sales_for_1997', 'NorthwindModel.Category_Sales_for_1997');
  }
  //#region ODataApi Model
  categorySalesFor1997Model(attrs?: Partial<CategorySalesFor1997>): CategorySalesFor1997Model<CategorySalesFor1997> {
    return this.entity().asModel<CategorySalesFor1997Model<CategorySalesFor1997>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  categorySalesFor1997Collection(models?: Partial<CategorySalesFor1997>[]): CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>> {
    return this.entities().asCollection<CategorySalesFor1997Model<CategorySalesFor1997>, CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
