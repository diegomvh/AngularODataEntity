import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
import { WindowsInformationProtectionNetworkLearningSummaryCollection } from './windowsinformationprotectionnetworklearningsummary.collection';
//#endregion

export class WindowsInformationProtectionNetworkLearningSummaryModel<E extends WindowsInformationProtectionNetworkLearningSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  deviceCount: number;
  url?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}