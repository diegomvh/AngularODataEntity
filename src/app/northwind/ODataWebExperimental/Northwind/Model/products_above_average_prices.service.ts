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
import { Products_Above_Average_Price } from '../../../NorthwindModel/products_above_average_price.entity';
//#endregion

@Injectable()
export class Products_Above_Average_PricesService extends ODataService<Products_Above_Average_Price> {
  constructor(protected client: ODataClient) {
    super(client, 'Products_Above_Average_Prices', 'NorthwindModel.Products_Above_Average_Price');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
