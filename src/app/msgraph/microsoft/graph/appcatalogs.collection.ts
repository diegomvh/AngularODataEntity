import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { AppCatalogs } from './appcatalogs.entity';
import { TeamsApp } from './teamsapp.entity';
import { AppCatalogsModel } from './appcatalogs.model';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsAppCollection } from './teamsapp.collection';
//#endregion

export class AppCatalogsCollection<E extends AppCatalogs, M extends AppCatalogsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}