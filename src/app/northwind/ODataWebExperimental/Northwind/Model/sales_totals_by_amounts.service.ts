import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Sales_Totals_by_Amount } from '../../../NorthwindModel/sales_totals_by_amount.entity';
//#endregion

@Injectable()
export class Sales_Totals_by_AmountsService extends ODataEntityService<Sales_Totals_by_Amount> {
  static path: string = 'Sales_Totals_by_Amounts';
  static type: string = 'ODataWebExperimental.Northwind.Model.Sales_Totals_by_Amounts';
  static entity: string = 'NorthwindModel.Sales_Totals_by_Amount';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
