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
import { ProductsByCategory } from '../../../NorthwindModel/products_by_category.entity';
import { ProductsByCategoryModel } from '../../../NorthwindModel/products_by_category.model';
import { ProductsByCategoryCollection } from '../../../NorthwindModel/products_by_category.collection';
//#endregion

@Injectable()
export class ProductsByCategoriesService extends ODataService<ProductsByCategory> {
  constructor(protected client: ODataClient) {
    super(client, 'Products_by_Categories', 'NorthwindModel.Products_by_Category');
  }

  productsByCategoryModel(): ProductsByCategoryModel<ProductsByCategory> {
    return super.model() as ProductsByCategoryModel<ProductsByCategory>;
  }
  
  productsByCategoriesCollection(): ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>> {
    return super.collection() as ProductsByCategoryCollection<ProductsByCategory, ProductsByCategoryModel<ProductsByCategory>>;
  }
}
