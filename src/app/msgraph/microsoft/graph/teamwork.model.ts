import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Teamwork } from './teamwork.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
import { WorkforceIntegrationModel } from './workforceintegration.model';
import { TeamworkCollection } from './teamwork.collection';
import { WorkforceIntegrationCollection } from './workforceintegration.collection';
//#endregion

export class TeamworkModel<E extends Teamwork> extends EntityModel<E> {
  //#region ODataApi Properties
  workforceIntegrations?: WorkforceIntegrationCollection<WorkforceIntegration, WorkforceIntegrationModel<WorkforceIntegration>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}