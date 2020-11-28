import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TeamsAppDistributionMethod } from './teamsappdistributionmethod.enum';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { TeamsAppCollection } from './teamsapp.collection';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export class TeamsAppModel<E extends TeamsApp> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  distributionMethod?: TeamsAppDistributionMethod;
  externalId?: string;
  appDefinitions?: TeamsAppDefinitionCollection<TeamsAppDefinition, TeamsAppDefinitionModel<TeamsAppDefinition>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}