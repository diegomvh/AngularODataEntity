import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
import { PersistentBrowserSessionMode } from './persistentbrowsersessionmode.enum';
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.entity';
import { PersistentBrowserSessionControlCollection } from './persistentbrowsersessioncontrol.collection';
//#endregion

export class PersistentBrowserSessionControlModel<E extends PersistentBrowserSessionControl> extends ConditionalAccessSessionControlModel<E> {
  //#region ODataApi Properties
  mode?: PersistentBrowserSessionMode;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}