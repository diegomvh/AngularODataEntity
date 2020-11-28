import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenFolder } from './ioshomescreenfolder.complex';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.complex';
import { IosHomeScreenFolderModel } from './ioshomescreenfolder.model';
import { IosHomeScreenFolderPageModel } from './ioshomescreenfolderpage.model';
import { IosHomeScreenFolderPageCollection } from './ioshomescreenfolderpage.collection';
//#endregion

export class IosHomeScreenFolderCollection<E extends IosHomeScreenFolder, M extends IosHomeScreenFolderModel<E>> extends IosHomeScreenItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}