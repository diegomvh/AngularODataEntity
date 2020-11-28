import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRegistryRuleOperationType } from './win32lobappregistryruleoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppRegistryRule } from './win32lobappregistryrule.complex';
import { Win32LobAppRegistryRuleCollection } from './win32lobappregistryrule.collection';
//#endregion

export class Win32LobAppRegistryRuleModel<E extends Win32LobAppRegistryRule> extends Win32LobAppRuleModel<E> {
  //#region ODataApi Properties
  check32BitOn64System: boolean;
  comparisonValue?: string;
  keyPath?: string;
  operationType: Win32LobAppRegistryRuleOperationType;
  operator: Win32LobAppRuleOperator;
  valueName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}