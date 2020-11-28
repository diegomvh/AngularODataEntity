import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { AppCatalogs } from './appcatalogs.entity';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppModel } from './teamsapp.model';
import { AppCatalogsCollection } from './appcatalogs.collection';
import { TeamsAppCollection } from './teamsapp.collection';
//#endregion

export class AppCatalogsModel<E extends AppCatalogs> extends EntityModel<E> {
  //#region ODataApi Properties
  teamsApps?: TeamsAppCollection<TeamsApp, TeamsAppModel<TeamsApp>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}