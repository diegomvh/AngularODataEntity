import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SalesTotalsByAmountModel } from '../../../NorthwindModel/sales-totals-by-amount.model';
import { SalesTotalsByAmountCollection } from '../../../NorthwindModel/sales-totals-by-amount.collection';
import { SalesTotalsByAmount } from '../../../NorthwindModel/sales-totals-by-amount.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class SalesTotalsByAmountsService extends ODataEntitySetService<SalesTotalsByAmount> {
  constructor(client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }
  salesTotalsByAmountModel(entity?: Partial<SalesTotalsByAmount>) {
    return this.model<SalesTotalsByAmountModel<SalesTotalsByAmount>>(entity);
  }
  salesTotalsByAmountCollection(entities?: Partial<SalesTotalsByAmount>[]) {
    return this.collection<SalesTotalsByAmountModel<SalesTotalsByAmount>, SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>>>(entities);
  }
// #region Custom
// #endregion Custom
}
