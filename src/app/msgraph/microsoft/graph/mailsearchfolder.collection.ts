import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MailFolderCollection } from './mailfolder.collection';
import { MailSearchFolder } from './mailsearchfolder.entity';
import { MailSearchFolderModel } from './mailsearchfolder.model';
//#endregion

export class MailSearchFolderCollection<E extends MailSearchFolder, M extends MailSearchFolderModel<E>> extends MailFolderCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}