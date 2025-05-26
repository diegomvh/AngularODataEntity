import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SummaryOfSalesByQuarter } from '../../../NorthwindModel/summary-of-sales-by-quarter.entity';

@Injectable()
export class SummaryOfSalesByQuartersService extends ODataEntitySetService<SummaryOfSalesByQuarter> {
  constructor(client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Quarters', 'NorthwindModel.Summary_of_Sales_by_Quarter');
  }
  summaryOfSalesByQuarterModel(entity?: Partial<SummaryOfSalesByQuarter>) {
    return this.model(entity);
  }
  summaryOfSalesByQuarterCollection(entities?: Partial<SummaryOfSalesByQuarter>[]) {
    return this.collection(entities);
  }
}
