import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export class TeamsAppDefinitionModel<E extends TeamsAppDefinition> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  teamsAppId?: string;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}