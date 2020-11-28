import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IncompleteData } from './incompletedata.complex';
import { ItemActionStat } from './itemactionstat.complex';
import { ItemActivity } from './itemactivity.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { IncompleteDataModel } from './incompletedata.model';
import { ItemActionStatModel } from './itemactionstat.model';
import { ItemActivityModel } from './itemactivity.model';
import { IncompleteDataCollection } from './incompletedata.collection';
import { ItemActionStatCollection } from './itemactionstat.collection';
import { ItemActivityCollection } from './itemactivity.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

export class ItemActivityStatModel<E extends ItemActivityStat> extends EntityModel<E> {
  //#region ODataApi Properties
  access?: ItemActionStatModel<ItemActionStat>;
  create?: ItemActionStatModel<ItemActionStat>;
  delete?: ItemActionStatModel<ItemActionStat>;
  edit?: ItemActionStatModel<ItemActionStat>;
  endDateTime?: Date;
  incompleteData?: IncompleteDataModel<IncompleteData>;
  isTrending?: boolean;
  move?: ItemActionStatModel<ItemActionStat>;
  startDateTime?: Date;
  activities?: ItemActivityCollection<ItemActivity, ItemActivityModel<ItemActivity>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}