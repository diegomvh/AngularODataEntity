import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { SalesTotalsByAmount } from '../../../NorthwindModel/sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from '../../../NorthwindModel/sales_totals_by_amount.model';
import { SalesTotalsByAmountCollection } from '../../../NorthwindModel/sales_totals_by_amount.collection';
//#endregion

@Injectable()
export class SalesTotalsByAmountsService extends ODataEntityService<SalesTotalsByAmount> {
  constructor(protected client: ODataClient) {
    super(client, 'Sales_Totals_by_Amounts', 'NorthwindModel.Sales_Totals_by_Amount');
  }

  salesTotalsByAmountModel(): SalesTotalsByAmountModel<SalesTotalsByAmount> {
    return super.model() as SalesTotalsByAmountModel<SalesTotalsByAmount>;
  }
  
  salesTotalsByAmountCollection(): SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>> {
    return super.collection() as SalesTotalsByAmountCollection<SalesTotalsByAmount, SalesTotalsByAmountModel<SalesTotalsByAmount>>;
  }
}
