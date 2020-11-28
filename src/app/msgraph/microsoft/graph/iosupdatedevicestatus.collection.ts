import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ComplianceStatus } from './compliancestatus.enum';
import { IosUpdatesInstallStatus } from './iosupdatesinstallstatus.enum';
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
import { IosUpdateDeviceStatusModel } from './iosupdatedevicestatus.model';
//#endregion

export class IosUpdateDeviceStatusCollection<E extends IosUpdateDeviceStatus, M extends IosUpdateDeviceStatusModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}