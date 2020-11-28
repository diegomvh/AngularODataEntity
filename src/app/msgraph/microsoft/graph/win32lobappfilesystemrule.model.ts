import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppFileSystemOperationType } from './win32lobappfilesystemoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppFileSystemRule } from './win32lobappfilesystemrule.complex';
import { Win32LobAppFileSystemRuleCollection } from './win32lobappfilesystemrule.collection';
//#endregion

export class Win32LobAppFileSystemRuleModel<E extends Win32LobAppFileSystemRule> extends Win32LobAppRuleModel<E> {
  //#region ODataApi Properties
  check32BitOn64System: boolean;
  comparisonValue?: string;
  fileOrFolderName?: string;
  operationType: Win32LobAppFileSystemOperationType;
  operator: Win32LobAppRuleOperator;
  path?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}