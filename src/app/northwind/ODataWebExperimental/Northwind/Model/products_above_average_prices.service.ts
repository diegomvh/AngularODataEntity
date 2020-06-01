import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Products_Above_Average_Price } from '../../../NorthwindModel/products_above_average_price.entity';
//#endregion

@Injectable()
export class Products_Above_Average_PricesService extends ODataEntityService<Products_Above_Average_Price> {
  static path: string = 'Products_Above_Average_Prices';
  static type: string = 'ODataWebExperimental.Northwind.Model.Products_Above_Average_Prices';
  static entity: string = 'NorthwindModel.Products_Above_Average_Price';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
