import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.entity';
import { ConditionalAccessSessionControlModel } from './conditionalaccesssessioncontrol.model';
//#endregion

export class ConditionalAccessSessionControlCollection<E extends ConditionalAccessSessionControl, M extends ConditionalAccessSessionControlModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}