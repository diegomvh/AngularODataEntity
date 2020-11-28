import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { Win32LobAppFileSystemOperationType } from './win32lobappfilesystemoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppFileSystemRule } from './win32lobappfilesystemrule.complex';
import { Win32LobAppFileSystemRuleModel } from './win32lobappfilesystemrule.model';
//#endregion

export class Win32LobAppFileSystemRuleCollection<E extends Win32LobAppFileSystemRule, M extends Win32LobAppFileSystemRuleModel<E>> extends Win32LobAppRuleCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}