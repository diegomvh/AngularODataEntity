import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppListItem } from './applistitem.entity';
import { IosNetworkUsageRule } from './iosnetworkusagerule.entity';
import { AppListItemModel } from './applistitem.model';
import { IosNetworkUsageRuleModel } from './iosnetworkusagerule.model';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export class IosNetworkUsageRuleCollection<E extends IosNetworkUsageRule, M extends IosNetworkUsageRuleModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}