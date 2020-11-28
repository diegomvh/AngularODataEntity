import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByYear } from '../../../NorthwindModel/summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearModel } from '../../../NorthwindModel/summary_of_sales_by_year.model';
import { SummaryOfSalesByYearCollection } from '../../../NorthwindModel/summary_of_sales_by_year.collection';
//#endregion

@Injectable()
export class SummaryOfSalesByYearsService extends ODataEntityService<SummaryOfSalesByYear> {
  constructor(protected client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Years', 'NorthwindModel.Summary_of_Sales_by_Year');
  }

  //#region ODataApi Model
  summaryOfSalesByYearModel(): SummaryOfSalesByYearModel<SummaryOfSalesByYear> {
    return super.model() as SummaryOfSalesByYearModel<SummaryOfSalesByYear>;
  }
  //#endregion
  //#region ODataApi Collection
  summaryOfSalesByYearCollection(): SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>> {
    return super.collection() as SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
