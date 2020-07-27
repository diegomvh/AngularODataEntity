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
import { Summary_of_Sales_by_Quarter } from '../../../NorthwindModel/summary_of_sales_by_quarter.entity';
//#endregion

@Injectable()
export class Summary_of_Sales_by_QuartersService extends ODataEntityService<Summary_of_Sales_by_Quarter> {
  static path: string = 'Summary_of_Sales_by_Quarters';
  static type: string = 'ODataWebExperimental.Northwind.Model.Summary_of_Sales_by_Quarters';
  static entityType: string = 'NorthwindModel.Summary_of_Sales_by_Quarter';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
