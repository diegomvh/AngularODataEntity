import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
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
export class SalesByCategoriesService extends ODataService<SalesByCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Sales_by_Categories', 'NorthwindModel.Sales_by_Category');
  }

  salesByCategoryModel(): SalesByCategoryModel<SalesByCategory> {
    return super.model() as SalesByCategoryModel<SalesByCategory>;
  }
  
  salesByCategoriesCollection(): SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>> {
    return super.collection() as SalesByCategoryCollection<SalesByCategory, SalesByCategoryModel<SalesByCategory>>;
  }
}
