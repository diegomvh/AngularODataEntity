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
import { SalesTotalsByAmount } from '../../../NorthwindModel/sales-totals-by-amount.entity';
import { SalesTotalsByAmountModel } from '../../../NorthwindModel/sales-totals-by-amount.model';
import { SalesTotalsByAmountCollection } from '../../../NorthwindModel/sales-totals-by-amount.collection';
//#endregion

@Injectable()
export class SalesTotalsByAmountsService extends ODataEntitySetService<SalesTotalsByAmount> {
  constructor(client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }
  //#region ODataApiGen Model
  salesTotalsByAmountModel(entity?: Partial<SalesTotalsByAmount>): SalesTotalsByAmountModel<SalesTotalsByAmount> {
    return this.entity().asModel<SalesTotalsByAmountModel<SalesTotalsByAmount>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  salesTotalsByAmountCollection(entities?: Partial<SalesTotalsByAmount>[]): SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>> {
    return this.entities().asCollection<SalesTotalsByAmountModel<SalesTotalsByAmount>, SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
