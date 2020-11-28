import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleType } from './win32lobappruletype.enum';
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
//#endregion

export class Win32LobAppRuleModel<E extends Win32LobAppRule> extends ODataModel<E> {
  //#region ODataApi Properties
  ruleType: Win32LobAppRuleType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}