import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { UserInstallStateSummaryModel } from './userinstallstatesummary.model';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
//#endregion

export class UserInstallStateSummaryCollection<E extends UserInstallStateSummary, M extends UserInstallStateSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}