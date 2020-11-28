import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MailFolderModel } from './mailfolder.model';
import { MailSearchFolder } from './mailsearchfolder.entity';
import { MailSearchFolderCollection } from './mailsearchfolder.collection';
//#endregion

export class MailSearchFolderModel<E extends MailSearchFolder> extends MailFolderModel<E> {
  //#region ODataApi Properties
  filterQuery?: string;
  includeNestedFolders?: boolean;
  isSupported?: boolean;
  sourceFolderIds?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}