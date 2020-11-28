import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export class TeamsAppCollection<E extends TeamsApp, M extends TeamsAppModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}