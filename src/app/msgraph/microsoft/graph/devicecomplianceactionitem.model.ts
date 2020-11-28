import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
import { DeviceComplianceActionItemCollection } from './devicecomplianceactionitem.collection';
//#endregion

export class DeviceComplianceActionItemModel<E extends DeviceComplianceActionItem> extends EntityModel<E> {
  //#region ODataApi Properties
  actionType: DeviceComplianceActionType;
  gracePeriodHours: number;
  notificationMessageCCList?: string[];
  notificationTemplateId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}