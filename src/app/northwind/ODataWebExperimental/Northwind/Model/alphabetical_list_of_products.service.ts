import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Alphabetical_list_of_product } from '../../../NorthwindModel/alphabetical_list_of_product.entity';
//#endregion

@Injectable()
export class Alphabetical_list_of_productsService extends ODataEntityService<Alphabetical_list_of_product> {
  static path: string = 'Alphabetical_list_of_products';
  static type: string = 'ODataWebExperimental.Northwind.Model.Alphabetical_list_of_products';
  static entityType: string = 'NorthwindModel.Alphabetical_list_of_product';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
