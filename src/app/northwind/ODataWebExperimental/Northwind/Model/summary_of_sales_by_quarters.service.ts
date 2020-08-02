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
import { SummaryOfSalesByQuarter } from '../../../NorthwindModel/summary_of_sales_by_quarter.entity';
//#endregion

@Injectable()
export class SummaryOfSalesByQuartersService extends ODataService<SummaryOfSalesByQuarter> {
  constructor(protected client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Quarters', 'NorthwindModel.Summary_of_Sales_by_Quarter');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
