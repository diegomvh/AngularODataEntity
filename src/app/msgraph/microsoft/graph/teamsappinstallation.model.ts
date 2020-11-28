import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TeamsApp } from './teamsapp.entity';
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { TeamsAppDefinition } from './teamsappdefinition.entity';
import { TeamsAppModel } from './teamsapp.model';
import { TeamsAppDefinitionModel } from './teamsappdefinition.model';
import { TeamsAppCollection } from './teamsapp.collection';
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
import { TeamsAppDefinitionCollection } from './teamsappdefinition.collection';
//#endregion

export class TeamsAppInstallationModel<E extends TeamsAppInstallation> extends EntityModel<E> {
  //#region ODataApi Properties
  teamsApp?: TeamsAppModel<TeamsApp>;
  teamsAppDefinition?: TeamsAppDefinitionModel<TeamsAppDefinition>;
  //#endregion
  //#region ODataApi Actions
  public upgrade(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.upgrade');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}