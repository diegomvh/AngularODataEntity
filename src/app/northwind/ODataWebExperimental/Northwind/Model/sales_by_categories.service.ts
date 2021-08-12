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
import { SalesByCategory } from '../../../NorthwindModel/sales_by_category.entity';
import { SalesByCategoryModel } from '../../../NorthwindModel/sales_by_category.model';
import { SalesByCategoryCollection } from '../../../NorthwindModel/sales_by_category.collection';
//#endregion

@Injectable()
export class SalesByCategoriesService extends ODataEntitySetService<SalesByCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Sales_by_Categories', 'NorthwindModel.Sales_by_Category');
  }
  //#region ODataApi Model
  salesByCategoryModel(attrs?: Partial<SalesByCategory>): SalesByCategoryModel<SalesByCategory> {
    return this.entity().asModel<SalesByCategoryModel<SalesByCategory>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  salesByCategoryCollection(models?: Partial<SalesByCategory>[]): SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>> {
    return this.entities().asCollection<SalesByCategoryModel<SalesByCategory>, SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
