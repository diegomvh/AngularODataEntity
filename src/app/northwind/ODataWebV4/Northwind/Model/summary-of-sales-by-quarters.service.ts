import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SummaryOfSalesByQuarterModel } from '../../../NorthwindModel/summary-of-sales-by-quarter.model';
import { SummaryOfSalesByQuarterCollection } from '../../../NorthwindModel/summary-of-sales-by-quarter.collection';
import { SummaryOfSalesByQuarter } from '../../../NorthwindModel/summary-of-sales-by-quarter.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class SummaryOfSalesByQuartersService extends ODataEntitySetService<SummaryOfSalesByQuarter> {
  constructor(client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Quarters', 'NorthwindModel.Summary_of_Sales_by_Quarter');
  }
  summaryOfSalesByQuarterModel(entity?: Partial<SummaryOfSalesByQuarter>) {
    return this.model<SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>>(entity);
  }
  summaryOfSalesByQuarterCollection(entities?: Partial<SummaryOfSalesByQuarter>[]) {
    return this.collection<SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>, SummaryOfSalesByQuarterCollection<SummaryOfSalesByQuarter, SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>>>(entities);
  }
// #region Custom
// #endregion Custom
}
