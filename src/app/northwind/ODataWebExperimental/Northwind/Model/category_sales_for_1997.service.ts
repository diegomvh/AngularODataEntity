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
import { CategorySalesFor1997 } from '../../../NorthwindModel/category_sales_for_1997.entity';
import { CategorySalesFor1997Model } from '../../../NorthwindModel/category_sales_for_1997.model';
import { CategorySalesFor1997Collection } from '../../../NorthwindModel/category_sales_for_1997.collection';
//#endregion

@Injectable()
export class CategorySalesFor1997Service extends ODataEntityService<CategorySalesFor1997> {
  constructor(protected client: ODataClient) {
    super(client, 'Category_Sales_for_1997', 'NorthwindModel.Category_Sales_for_1997');
  }

  categorySalesFor1997Model(): CategorySalesFor1997Model<CategorySalesFor1997> {
    return super.model() as CategorySalesFor1997Model<CategorySalesFor1997>;
  }
  
  categorySalesFor1997Collection(): CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>> {
    return super.collection() as CategorySalesFor1997Collection<CategorySalesFor1997, CategorySalesFor1997Model<CategorySalesFor1997>>;
  }
}
