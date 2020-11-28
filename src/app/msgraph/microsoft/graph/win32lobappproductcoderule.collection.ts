import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppProductCodeRule } from './win32lobappproductcoderule.complex';
import { Win32LobAppProductCodeRuleModel } from './win32lobappproductcoderule.model';
//#endregion

export class Win32LobAppProductCodeRuleCollection<E extends Win32LobAppProductCodeRule, M extends Win32LobAppProductCodeRuleModel<E>> extends Win32LobAppRuleCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}