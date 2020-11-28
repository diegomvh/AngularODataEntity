import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppFileSystemOperationType } from './win32lobappfilesystemoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
//#endregion

export interface Win32LobAppFileSystemRule extends Win32LobAppRule {
  //#region ODataApi Properties
  check32BitOn64System: boolean;
  comparisonValue?: string;
  fileOrFolderName?: string;
  operationType: Win32LobAppFileSystemOperationType;
  operator: Win32LobAppRuleOperator;
  path?: string;
  //#endregion
}