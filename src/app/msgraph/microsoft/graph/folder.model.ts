import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Folder } from './folder.complex';
import { FolderView } from './folderview.complex';
import { FolderViewModel } from './folderview.model';
import { FolderCollection } from './folder.collection';
import { FolderViewCollection } from './folderview.collection';
//#endregion

export class FolderModel<E extends Folder> extends ODataModel<E> {
  //#region ODataApi Properties
  childCount?: number;
  view?: FolderViewModel<FolderView>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}