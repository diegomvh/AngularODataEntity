import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenApp } from './ioshomescreenapp.complex';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.complex';
import { IosHomeScreenAppModel } from './ioshomescreenapp.model';
import { IosHomeScreenFolderPageModel } from './ioshomescreenfolderpage.model';
import { IosHomeScreenAppCollection } from './ioshomescreenapp.collection';
//#endregion

export class IosHomeScreenFolderPageCollection<E extends IosHomeScreenFolderPage, M extends IosHomeScreenFolderPageModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}