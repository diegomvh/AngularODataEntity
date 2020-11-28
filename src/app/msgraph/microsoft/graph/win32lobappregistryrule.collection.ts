import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { Win32LobAppRegistryRuleOperationType } from './win32lobappregistryruleoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppRegistryRule } from './win32lobappregistryrule.complex';
import { Win32LobAppRegistryRuleModel } from './win32lobappregistryrule.model';
//#endregion

export class Win32LobAppRegistryRuleCollection<E extends Win32LobAppRegistryRule, M extends Win32LobAppRegistryRuleModel<E>> extends Win32LobAppRuleCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}