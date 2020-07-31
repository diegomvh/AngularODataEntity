﻿import { Injectable } from '@angular/core';
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
import { Product_Sales_for_1997 } from '../../../NorthwindModel/product_sales_for_1997.entity';
//#endregion

@Injectable()
export class Product_Sales_for_1997Service extends ODataService<Product_Sales_for_1997> {
  constructor(protected client: ODataClient) {
    super(client, 'Product_Sales_for_1997', 'NorthwindModel.Product_Sales_for_1997');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
