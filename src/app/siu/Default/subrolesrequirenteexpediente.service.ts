import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { RequirenteExpediente } from '../SIU/Tramites/requirenteexpediente.entity';
import { SubRolRequirenteExpediente } from '../SIU/Tramites/subrolrequirenteexpediente.entity';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { SubRolRequirenteExpedienteModel } from '../SIU/Tramites/subrolrequirenteexpediente.model';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { SubRolRequirenteExpedienteCollection } from '../SIU/Tramites/subrolrequirenteexpediente.collection';
//#endregion

@Injectable()
export class SubRolesRequirenteExpedienteService extends ODataEntityService<SubRolRequirenteExpediente> {
  constructor(protected client: ODataClient) {
    super(client, 'subRolesRequirenteExpediente', 'SIU.Tramites.SubRolRequirenteExpediente');
  }

  //#region ODataApi Model
  subRolRequirenteExpedienteModel(): SubRolRequirenteExpedienteModel<SubRolRequirenteExpediente> {
    return this.entity().asModel() as SubRolRequirenteExpedienteModel<SubRolRequirenteExpediente>;
  }
  //#endregion
  //#region ODataApi Collection
  subRolRequirenteExpedienteCollection(): SubRolRequirenteExpedienteCollection<SubRolRequirenteExpediente, SubRolRequirenteExpedienteModel<SubRolRequirenteExpediente>> {
    return this.entities().asCollection() as SubRolRequirenteExpedienteCollection<SubRolRequirenteExpediente, SubRolRequirenteExpedienteModel<SubRolRequirenteExpediente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public rolesRequirentesEmpleadosExpedientes(entity: EntityKey<SubRolRequirenteExpediente>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('rolesRequirentesEmpleadosExpedientes');
  }
  //#endregion
}
