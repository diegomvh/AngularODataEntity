import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ItemAnalytics } from './itemanalytics.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export class ItemAnalyticsModel<E extends ItemAnalytics> extends EntityModel<E> {
  //#region ODataApi Properties
  allTime?: ItemActivityStatModel<ItemActivityStat>;
  itemActivityStats?: ItemActivityStatCollection<ItemActivityStat, ItemActivityStatModel<ItemActivityStat>>;
  lastSevenDays?: ItemActivityStatModel<ItemActivityStat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}