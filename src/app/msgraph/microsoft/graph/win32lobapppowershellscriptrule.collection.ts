import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { RunAsAccountType } from './runasaccounttype.enum';
import { Win32LobAppPowerShellScriptRuleOperationType } from './win32lobapppowershellscriptruleoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppPowerShellScriptRule } from './win32lobapppowershellscriptrule.complex';
import { Win32LobAppPowerShellScriptRuleModel } from './win32lobapppowershellscriptrule.model';
//#endregion

export class Win32LobAppPowerShellScriptRuleCollection<E extends Win32LobAppPowerShellScriptRule, M extends Win32LobAppPowerShellScriptRuleModel<E>> extends Win32LobAppRuleCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}