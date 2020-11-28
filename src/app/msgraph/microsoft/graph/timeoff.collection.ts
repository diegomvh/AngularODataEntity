import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeTrackedEntityCollection } from './changetrackedentity.collection';
import { TimeOffItem } from './timeoffitem.entity';
import { TimeOff } from './timeoff.entity';
import { TimeOffItemModel } from './timeoffitem.model';
import { TimeOffModel } from './timeoff.model';
import { TimeOffItemCollection } from './timeoffitem.collection';
//#endregion

export class TimeOffCollection<E extends TimeOff, M extends TimeOffModel<E>> extends ChangeTrackedEntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}