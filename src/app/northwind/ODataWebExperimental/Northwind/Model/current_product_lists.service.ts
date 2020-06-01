import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Current_Product_List } from '../../../NorthwindModel/current_product_list.entity';
//#endregion

@Injectable()
export class Current_Product_ListsService extends ODataEntityService<Current_Product_List> {
  static path: string = 'Current_Product_Lists';
  static type: string = 'ODataWebExperimental.Northwind.Model.Current_Product_Lists';
  static entity: string = 'NorthwindModel.Current_Product_List';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
