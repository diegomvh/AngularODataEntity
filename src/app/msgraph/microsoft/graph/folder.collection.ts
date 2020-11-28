import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Folder } from './folder.complex';
import { FolderView } from './folderview.complex';
import { FolderModel } from './folder.model';
import { FolderViewModel } from './folderview.model';
import { FolderViewCollection } from './folderview.collection';
//#endregion

export class FolderCollection<E extends Folder, M extends FolderModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}