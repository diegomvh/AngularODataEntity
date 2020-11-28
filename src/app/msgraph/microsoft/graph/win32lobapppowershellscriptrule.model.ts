import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { RunAsAccountType } from './runasaccounttype.enum';
import { Win32LobAppPowerShellScriptRuleOperationType } from './win32lobapppowershellscriptruleoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppPowerShellScriptRule } from './win32lobapppowershellscriptrule.complex';
import { Win32LobAppPowerShellScriptRuleCollection } from './win32lobapppowershellscriptrule.collection';
//#endregion

export class Win32LobAppPowerShellScriptRuleModel<E extends Win32LobAppPowerShellScriptRule> extends Win32LobAppRuleModel<E> {
  //#region ODataApi Properties
  comparisonValue?: string;
  displayName?: string;
  enforceSignatureCheck: boolean;
  operationType: Win32LobAppPowerShellScriptRuleOperationType;
  operator: Win32LobAppRuleOperator;
  runAs32Bit: boolean;
  runAsAccount?: RunAsAccountType;
  scriptContent?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}