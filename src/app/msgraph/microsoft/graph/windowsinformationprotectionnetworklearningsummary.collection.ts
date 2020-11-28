import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
import { WindowsInformationProtectionNetworkLearningSummaryModel } from './windowsinformationprotectionnetworklearningsummary.model';
//#endregion

export class WindowsInformationProtectionNetworkLearningSummaryCollection<E extends WindowsInformationProtectionNetworkLearningSummary, M extends WindowsInformationProtectionNetworkLearningSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}