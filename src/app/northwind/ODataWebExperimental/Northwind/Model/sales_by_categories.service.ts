import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { SalesByCategory } from '../../../NorthwindModel/sales_by_category.entity';
import { SalesByCategoryModel } from '../../../NorthwindModel/sales_by_category.model';
import { SalesByCategoryCollection } from '../../../NorthwindModel/sales_by_category.collection';
//#endregion

@Injectable()
export class SalesByCategoriesService extends ODataEntityService<SalesByCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Sales_by_Categories', 'NorthwindModel.Sales_by_Category');
  }

  //#region ODataApi Model
  salesByCategoryModel(): SalesByCategoryModel<SalesByCategory> {
    return super.model() as SalesByCategoryModel<SalesByCategory>;
  }
  //#endregion
  //#region ODataApi Collection
  salesByCategoryCollection(): SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>> {
    return super.collection() as SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
