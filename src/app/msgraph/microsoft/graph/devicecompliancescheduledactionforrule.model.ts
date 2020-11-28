import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceActionItemModel } from './devicecomplianceactionitem.model';
import { DeviceComplianceActionItemCollection } from './devicecomplianceactionitem.collection';
import { DeviceComplianceScheduledActionForRuleCollection } from './devicecompliancescheduledactionforrule.collection';
//#endregion

export class DeviceComplianceScheduledActionForRuleModel<E extends DeviceComplianceScheduledActionForRule> extends EntityModel<E> {
  //#region ODataApi Properties
  ruleName?: string;
  scheduledActionConfigurations?: DeviceComplianceActionItemCollection<DeviceComplianceActionItem, DeviceComplianceActionItemModel<DeviceComplianceActionItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}