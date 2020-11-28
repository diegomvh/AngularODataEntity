import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenFolder } from './ioshomescreenfolder.entity';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.entity';
import { IosHomeScreenFolderPageModel } from './ioshomescreenfolderpage.model';
import { IosHomeScreenFolderCollection } from './ioshomescreenfolder.collection';
import { IosHomeScreenFolderPageCollection } from './ioshomescreenfolderpage.collection';
//#endregion

export class IosHomeScreenFolderModel<E extends IosHomeScreenFolder> extends IosHomeScreenItemModel<E> {
  //#region ODataApi Properties
  pages: IosHomeScreenFolderPageCollection<IosHomeScreenFolderPage, IosHomeScreenFolderPageModel<IosHomeScreenFolderPage>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}