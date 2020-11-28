import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.entity';
import { DeviceExchangeAccessStateSummaryModel } from './deviceexchangeaccessstatesummary.model';
//#endregion

export class DeviceExchangeAccessStateSummaryCollection<E extends DeviceExchangeAccessStateSummary, M extends DeviceExchangeAccessStateSummaryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}