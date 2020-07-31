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
import { Sales_Totals_by_Amount } from '../../../NorthwindModel/sales_totals_by_amount.entity';
//#endregion

@Injectable()
export class Sales_Totals_by_AmountsService extends ODataService<Sales_Totals_by_Amount> {
  constructor(protected client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
