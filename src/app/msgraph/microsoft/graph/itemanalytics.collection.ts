import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ItemAnalytics } from './itemanalytics.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export class ItemAnalyticsCollection<E extends ItemAnalytics, M extends ItemAnalyticsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}