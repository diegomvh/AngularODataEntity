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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByYear } from '../../../NorthwindModel/summary-of-sales-by-year.entity';
import { SummaryOfSalesByYearModel } from '../../../NorthwindModel/summary-of-sales-by-year.model';
import { SummaryOfSalesByYearCollection } from '../../../NorthwindModel/summary-of-sales-by-year.collection';
//#endregion

@Injectable()
export class SummaryOfSalesByYearsService extends ODataEntitySetService<SummaryOfSalesByYear> {
  constructor(client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Years', 'NorthwindModel.Summary_of_Sales_by_Year');
  }
  //#region ODataApiGen Model
  summaryOfSalesByYearModel(entity?: Partial<SummaryOfSalesByYear>): SummaryOfSalesByYearModel<SummaryOfSalesByYear> {
    return this.entity().asModel<SummaryOfSalesByYearModel<SummaryOfSalesByYear>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  summaryOfSalesByYearCollection(entities?: Partial<SummaryOfSalesByYear>[]): SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>> {
    return this.entities().asCollection<SummaryOfSalesByYearModel<SummaryOfSalesByYear>, SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
