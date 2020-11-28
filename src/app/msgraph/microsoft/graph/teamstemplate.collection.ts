import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TeamsTemplate } from './teamstemplate.entity';
import { TeamsTemplateModel } from './teamstemplate.model';
//#endregion

export class TeamsTemplateCollection<E extends TeamsTemplate, M extends TeamsTemplateModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}