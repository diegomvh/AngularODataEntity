import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsAppInstallationModel } from './teamsappinstallation.model';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { TeamsAppCollection } from './teamsapp.collection';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export class TeamsAppInstallationCollection<E extends TeamsAppInstallation, M extends TeamsAppInstallationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}