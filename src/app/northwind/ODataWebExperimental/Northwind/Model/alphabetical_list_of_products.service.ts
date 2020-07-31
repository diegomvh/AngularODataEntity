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
import { Alphabetical_list_of_product } from '../../../NorthwindModel/alphabetical_list_of_product.entity';
//#endregion

@Injectable()
export class Alphabetical_list_of_productsService extends ODataService<Alphabetical_list_of_product> {
  constructor(protected client: ODataClient) {
    super(client, 'Alphabetical_list_of_products', 'NorthwindModel.Alphabetical_list_of_product');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
