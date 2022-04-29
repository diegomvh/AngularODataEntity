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
import { SalesByCategory } from '../../../NorthwindModel/sales_by_category.entity';
import { SalesByCategoryModel } from '../../../NorthwindModel/sales_by_category.model';
import { SalesByCategoryCollection } from '../../../NorthwindModel/sales_by_category.collection';
//#endregion

@Injectable()
export class SalesByCategoriesService extends ODataEntitySetService<SalesByCategory> {
  constructor(client: ODataClient) {
    super(client, 'Sales_by_Categories', 'NorthwindModel.Sales_by_Category');
  }
  //#region ODataApiGen Model
  salesByCategoryModel(attrs?: Partial<SalesByCategory>): SalesByCategoryModel<SalesByCategory> {
    return this.entity().asModel<SalesByCategoryModel<SalesByCategory>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  salesByCategoryCollection(models?: Partial<SalesByCategory>[]): SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>> {
    return this.entities().asCollection<SalesByCategoryModel<SalesByCategory>, SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
