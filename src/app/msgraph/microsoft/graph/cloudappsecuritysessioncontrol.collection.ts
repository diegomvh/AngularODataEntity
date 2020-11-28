import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConditionalAccessSessionControlCollection } from './conditionalaccesssessioncontrol.collection';
import { CloudAppSecuritySessionControlType } from './cloudappsecuritysessioncontroltype.enum';
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
import { CloudAppSecuritySessionControlModel } from './cloudappsecuritysessioncontrol.model';
//#endregion

export class CloudAppSecuritySessionControlCollection<E extends CloudAppSecuritySessionControl, M extends CloudAppSecuritySessionControlModel<E>> extends ConditionalAccessSessionControlCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}