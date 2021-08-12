import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SalesTotalsByAmount } from '../../../NorthwindModel/sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from '../../../NorthwindModel/sales_totals_by_amount.model';
import { SalesTotalsByAmountCollection } from '../../../NorthwindModel/sales_totals_by_amount.collection';
//#endregion

@Injectable()
export class SalesTotalsByAmountsService extends ODataEntitySetService<SalesTotalsByAmount> {
  constructor(protected client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }
  //#region ODataApi Model
  salesTotalsByAmountModel(attrs?: Partial<SalesTotalsByAmount>): SalesTotalsByAmountModel<SalesTotalsByAmount> {
    return this.entity().asModel<SalesTotalsByAmountModel<SalesTotalsByAmount>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  salesTotalsByAmountCollection(models?: Partial<SalesTotalsByAmount>[]): SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>> {
    return this.entities().asCollection<SalesTotalsByAmountModel<SalesTotalsByAmount>, SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
