import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MailFolder } from './mailfolder.entity';
import { MailFolderModel } from './mailfolder.model';
import { MailFolderCollection } from './mailfolder.collection';
//#endregion

export interface MailSearchFolder extends MailFolder {
  //#region ODataApi Properties
  filterQuery?: string;
  includeNestedFolders?: boolean;
  isSupported?: boolean;
  sourceFolderIds?: string[];
  //#endregion
}