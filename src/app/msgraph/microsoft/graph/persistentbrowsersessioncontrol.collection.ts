import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
import { PersistentBrowserSessionMode } from './persistentbrowsersessionmode.enum';
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.complex';
import { PersistentBrowserSessionControlModel } from './persistentbrowsersessioncontrol.model';
//#endregion

export class PersistentBrowserSessionControlCollection<E extends PersistentBrowserSessionControl, M extends PersistentBrowserSessionControlModel<E>> extends ConditionalAccessSessionControlCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}