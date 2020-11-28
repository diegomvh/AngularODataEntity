import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IncompleteData } from './incompletedata.entity';
import { ItemActionStat } from './itemactionstat.entity';
import { ItemActivity } from './itemactivity.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { IncompleteDataModel } from './incompletedata.model';
import { ItemActionStatModel } from './itemactionstat.model';
import { ItemActivityModel } from './itemactivity.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { IncompleteDataCollection } from './incompletedata.collection';
import { ItemActionStatCollection } from './itemactionstat.collection';
import { ItemActivityCollection } from './itemactivity.collection';
//#endregion

export class ItemActivityStatCollection<E extends ItemActivityStat, M extends ItemActivityStatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}