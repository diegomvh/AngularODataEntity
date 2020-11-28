import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InstallState } from './installstate.enum';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
//#endregion

export class DeviceInstallStateCollection<E extends DeviceInstallState, M extends DeviceInstallStateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}