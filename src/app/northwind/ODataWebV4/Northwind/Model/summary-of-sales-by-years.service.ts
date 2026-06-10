import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SummaryOfSalesByYearModel } from '../../../NorthwindModel/summary-of-sales-by-year.model';
import { SummaryOfSalesByYearCollection } from '../../../NorthwindModel/summary-of-sales-by-year.collection';
import { SummaryOfSalesByYear } from '../../../NorthwindModel/summary-of-sales-by-year.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class SummaryOfSalesByYearsService extends ODataEntitySetService<SummaryOfSalesByYear> {
  constructor(client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Years', 'NorthwindModel.Summary_of_Sales_by_Year');
  }
  summaryOfSalesByYearModel(entity?: Partial<SummaryOfSalesByYear>) {
    return this.model<SummaryOfSalesByYearModel<SummaryOfSalesByYear>>(entity);
  }
  summaryOfSalesByYearCollection(entities?: Partial<SummaryOfSalesByYear>[]) {
    return this.collection<SummaryOfSalesByYearModel<SummaryOfSalesByYear>, SummaryOfSalesByYearCollection<SummaryOfSalesByYear, SummaryOfSalesByYearModel<SummaryOfSalesByYear>>>(entities);
  }
// #region Custom
// #endregion Custom
}
