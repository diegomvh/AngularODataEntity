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
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { RequirenteExpediente } from '../SIU/Tramites/requirenteexpediente.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { RolRequirenteExpediente } from '../SIU/Tramites/rolrequirenteexpediente.entity';
import { SubRolRequirenteExpediente } from '../SIU/Tramites/subrolrequirenteexpediente.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { RolRequirenteExpedienteModel } from '../SIU/Tramites/rolrequirenteexpediente.model';
import { SubRolRequirenteExpedienteModel } from '../SIU/Tramites/subrolrequirenteexpediente.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { RolRequirenteExpedienteCollection } from '../SIU/Tramites/rolrequirenteexpediente.collection';
import { SubRolRequirenteExpedienteCollection } from '../SIU/Tramites/subrolrequirenteexpediente.collection';
//#endregion

@Injectable()
export class RequirentesExpedientesService extends ODataEntityService<RequirenteExpediente> {
  constructor(protected client: ODataClient) {
    super(client, 'requirentesExpedientes', 'SIU.Tramites.RequirenteExpediente');
  }

  //#region ODataApi Model
  requirenteExpedienteModel(): RequirenteExpedienteModel<RequirenteExpediente> {
    return this.entity().asModel() as RequirenteExpedienteModel<RequirenteExpediente>;
  }
  //#endregion
  //#region ODataApi Collection
  requirenteExpedienteCollection(): RequirenteExpedienteCollection<RequirenteExpediente, RequirenteExpedienteModel<RequirenteExpediente>> {
    return this.entities().asCollection() as RequirenteExpedienteCollection<RequirenteExpediente, RequirenteExpedienteModel<RequirenteExpediente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expediente(entity: EntityKey<RequirenteExpediente>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expediente');
  }
  public oficina(entity: EntityKey<RequirenteExpediente>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public rolRequirente(entity: EntityKey<RequirenteExpediente>): ODataNavigationPropertyResource<RolRequirenteExpediente> {
    return this.entity(entity).navigationProperty<RolRequirenteExpediente>('rolRequirente');
  }
  public subRolRequirente(entity: EntityKey<RequirenteExpediente>): ODataNavigationPropertyResource<SubRolRequirenteExpediente> {
    return this.entity(entity).navigationProperty<SubRolRequirenteExpediente>('subRolRequirente');
  }
  //#endregion
}
