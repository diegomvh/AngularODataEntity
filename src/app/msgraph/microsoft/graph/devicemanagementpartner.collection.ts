import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceManagementPartnerAppType } from './devicemanagementpartnerapptype.enum';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
import { DeviceManagementPartnerModel } from './devicemanagementpartner.model';
//#endregion

export class DeviceManagementPartnerCollection<E extends DeviceManagementPartner, M extends DeviceManagementPartnerModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}