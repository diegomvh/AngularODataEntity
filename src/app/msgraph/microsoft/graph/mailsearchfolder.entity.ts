import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MailFolder } from './mailfolder.entity';
//#endregion

export interface MailSearchFolder extends MailFolder {
  //#region ODataApi Properties
  isSupported?: boolean;
  includeNestedFolders?: boolean;
  sourceFolderIds?: string[];
  filterQuery?: string;
  //#endregion
}