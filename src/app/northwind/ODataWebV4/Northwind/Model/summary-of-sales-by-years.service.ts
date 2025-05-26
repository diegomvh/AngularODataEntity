import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SummaryOfSalesByYear } from '../../../NorthwindModel/summary-of-sales-by-year.entity';

@Injectable()
export class SummaryOfSalesByYearsService extends ODataEntitySetService<SummaryOfSalesByYear> {
  constructor(client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Years', 'NorthwindModel.Summary_of_Sales_by_Year');
  }
  summaryOfSalesByYearModel(entity?: Partial<SummaryOfSalesByYear>) {
    return this.model(entity);
  }
  summaryOfSalesByYearCollection(entities?: Partial<SummaryOfSalesByYear>[]) {
    return this.collection(entities);
  }
}
