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
import { Summary_of_Sales_by_Year } from '../../../NorthwindModel/summary_of_sales_by_year.entity';
//#endregion

@Injectable()
export class Summary_of_Sales_by_YearsService extends ODataService<Summary_of_Sales_by_Year> {
  constructor(protected client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Years', 'NorthwindModel.Summary_of_Sales_by_Year');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
