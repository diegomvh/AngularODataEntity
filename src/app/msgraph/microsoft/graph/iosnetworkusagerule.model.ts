import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppListItem } from './applistitem.entity';
import { IosNetworkUsageRule } from './iosnetworkusagerule.entity';
import { AppListItemModel } from './applistitem.model';
import { AppListItemCollection } from './applistitem.collection';
import { IosNetworkUsageRuleCollection } from './iosnetworkusagerule.collection';
//#endregion

export class IosNetworkUsageRuleModel<E extends IosNetworkUsageRule> extends ODataModel<E> {
  //#region ODataApi Properties
  cellularDataBlocked: boolean;
  cellularDataBlockWhenRoaming: boolean;
  managedApps?: AppListItemCollection<AppListItem, AppListItemModel<AppListItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}