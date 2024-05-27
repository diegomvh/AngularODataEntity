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
import { SalesTotalsByAmount } from '../../../NorthwindModel/sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from '../../../NorthwindModel/sales_totals_by_amount.model';
import { SalesTotalsByAmountCollection } from '../../../NorthwindModel/sales_totals_by_amount.collection';
//#endregion

@Injectable()
export class SalesTotalsByAmountsService extends ODataEntitySetService<SalesTotalsByAmount> {
  constructor(client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }
  //#region ODataApiGen Model
  salesTotalsByAmountModel(attrs?: Partial<SalesTotalsByAmount>): SalesTotalsByAmountModel<SalesTotalsByAmount> {
    return this.entity().asModel<SalesTotalsByAmountModel<SalesTotalsByAmount>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  salesTotalsByAmountCollection(models?: Partial<SalesTotalsByAmount>[]): SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>> {
    return this.entities().asCollection<SalesTotalsByAmountModel<SalesTotalsByAmount>, SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
