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
import { Summary_of_Sales_by_Year } from '../../../NorthwindModel/summary_of_sales_by_year.entity';
//#endregion

@Injectable()
export class Summary_of_Sales_by_YearsService extends ODataEntityService<Summary_of_Sales_by_Year> {
  static path: string = 'Summary_of_Sales_by_Years';
  static type: string = 'ODataWebExperimental.Northwind.Model.Summary_of_Sales_by_Years';
  static entityType: string = 'NorthwindModel.Summary_of_Sales_by_Year';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
