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
import { RolRequirenteExpediente } from '../SIU/Tramites/rolrequirenteexpediente.entity';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { RolRequirenteExpedienteModel } from '../SIU/Tramites/rolrequirenteexpediente.model';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { RolRequirenteExpedienteCollection } from '../SIU/Tramites/rolrequirenteexpediente.collection';
//#endregion

@Injectable()
export class RolesRequirenteExpedienteService extends ODataEntityService<RolRequirenteExpediente> {
  constructor(protected client: ODataClient) {
    super(client, 'rolesRequirenteExpediente', 'SIU.Tramites.RolRequirenteExpediente');
  }

  //#region ODataApi Model
  rolRequirenteExpedienteModel(): RolRequirenteExpedienteModel<RolRequirenteExpediente> {
    return this.entity().asModel() as RolRequirenteExpedienteModel<RolRequirenteExpediente>;
  }
  //#endregion
  //#region ODataApi Collection
  rolRequirenteExpedienteCollection(): RolRequirenteExpedienteCollection<RolRequirenteExpediente, RolRequirenteExpedienteModel<RolRequirenteExpediente>> {
    return this.entities().asCollection() as RolRequirenteExpedienteCollection<RolRequirenteExpediente, RolRequirenteExpedienteModel<RolRequirenteExpediente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public requirenteExpedientes(entity: EntityKey<RolRequirenteExpediente>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('requirenteExpedientes');
  }
  //#endregion
}
