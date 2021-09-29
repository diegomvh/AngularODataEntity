import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByYear } from '../../../NorthwindModel/summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearModel } from '../../../NorthwindModel/summary_of_sales_by_year.model';
import { SummaryOfSalesByYearCollection } from '../../../NorthwindModel/summary_of_sales_by_year.collection';
//#endregion

@Injectable()
export class SummaryOfSalesByYearsService extends ODataEntitySetService<SummaryOfSalesByYear> {
  constructor(protected client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Years', 'NorthwindModel.Summary_of_Sales_by_Year');
  }
  //#region ODataApiGen Model
  summaryOfSalesByYearModel(attrs?: Partial<SummaryOfSalesByYear>): SummaryOfSalesByYearModel<SummaryOfSalesByYear> {
    return this.entity().asModel<SummaryOfSalesByYearModel<SummaryOfSalesByYear>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  summaryOfSalesByYearCollection(models?: Partial<SummaryOfSalesByYear>[]): SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>> {
    return this.entities().asCollection<SummaryOfSalesByYearModel<SummaryOfSalesByYear>, SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
