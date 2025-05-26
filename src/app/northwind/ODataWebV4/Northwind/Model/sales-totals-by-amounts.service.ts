import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SalesTotalsByAmount } from '../../../NorthwindModel/sales-totals-by-amount.entity';

@Injectable()
export class SalesTotalsByAmountsService extends ODataEntitySetService<SalesTotalsByAmount> {
  constructor(client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }
  salesTotalsByAmountModel(entity?: Partial<SalesTotalsByAmount>) {
    return this.model(entity);
  }
  salesTotalsByAmountCollection(entities?: Partial<SalesTotalsByAmount>[]) {
    return this.collection(entities);
  }
}
