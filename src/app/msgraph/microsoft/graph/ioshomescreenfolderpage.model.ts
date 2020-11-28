import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenApp } from './ioshomescreenapp.entity';
import { IosHomeScreenFolderPage } from './ioshomescreenfolderpage.entity';
import { IosHomeScreenAppModel } from './ioshomescreenapp.model';
import { IosHomeScreenAppCollection } from './ioshomescreenapp.collection';
import { IosHomeScreenFolderPageCollection } from './ioshomescreenfolderpage.collection';
//#endregion

export class IosHomeScreenFolderPageModel<E extends IosHomeScreenFolderPage> extends ODataModel<E> {
  //#region ODataApi Properties
  apps: IosHomeScreenAppCollection<IosHomeScreenApp, IosHomeScreenAppModel<IosHomeScreenApp>>;
  displayName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}