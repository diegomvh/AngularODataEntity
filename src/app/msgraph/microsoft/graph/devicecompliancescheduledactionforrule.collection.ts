import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceActionItemModel } from './devicecomplianceactionitem.model';
import { DeviceComplianceScheduledActionForRuleModel } from './devicecompliancescheduledactionforrule.model';
import { DeviceComplianceActionItemCollection } from './devicecomplianceactionitem.collection';
//#endregion

export class DeviceComplianceScheduledActionForRuleCollection<E extends DeviceComplianceScheduledActionForRule, M extends DeviceComplianceScheduledActionForRuleModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}