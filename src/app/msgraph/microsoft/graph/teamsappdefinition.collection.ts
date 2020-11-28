import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
//#endregion

export class TeamsAppDefinitionCollection<E extends TeamsAppDefinition, M extends TeamsAppDefinitionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}