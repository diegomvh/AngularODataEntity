import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
import { DeviceComplianceActionItem } from './devicecomplianceactionitem.entity';
import { DeviceComplianceActionItemModel } from './devicecomplianceactionitem.model';
//#endregion

export class DeviceComplianceActionItemCollection<E extends DeviceComplianceActionItem, M extends DeviceComplianceActionItemModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}