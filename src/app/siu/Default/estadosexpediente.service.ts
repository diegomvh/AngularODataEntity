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
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { EstadoExpediente } from '../SIU/Tramites/estadoexpediente.entity';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { EstadoExpedienteModel } from '../SIU/Tramites/estadoexpediente.model';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { EstadoExpedienteCollection } from '../SIU/Tramites/estadoexpediente.collection';
//#endregion

@Injectable()
export class EstadosExpedienteService extends ODataEntityService<EstadoExpediente> {
  constructor(protected client: ODataClient) {
    super(client, 'estadosExpediente', 'SIU.Tramites.EstadoExpediente');
  }

  //#region ODataApi Model
  estadoExpedienteModel(): EstadoExpedienteModel<EstadoExpediente> {
    return this.entity().asModel() as EstadoExpedienteModel<EstadoExpediente>;
  }
  //#endregion
  //#region ODataApi Collection
  estadoExpedienteCollection(): EstadoExpedienteCollection<EstadoExpediente, EstadoExpedienteModel<EstadoExpediente>> {
    return this.entities().asCollection() as EstadoExpedienteCollection<EstadoExpediente, EstadoExpedienteModel<EstadoExpediente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expedientes(entity: EntityKey<EstadoExpediente>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  //#endregion
}
