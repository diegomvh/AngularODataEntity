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
import { DeclaracionJurada } from '../SIU/Personas/declaracionjurada.entity';
import { EstadoCivil } from '../SIU/Personas/estadocivil.entity';
import { RequirenteNotaAvenimiento } from '../SIU/Tramites/requirentenotaavenimiento.entity';
import { DeclaracionJuradaModel } from '../SIU/Personas/declaracionjurada.model';
import { EstadoCivilModel } from '../SIU/Personas/estadocivil.model';
import { RequirenteNotaAvenimientoModel } from '../SIU/Tramites/requirentenotaavenimiento.model';
import { DeclaracionJuradaCollection } from '../SIU/Personas/declaracionjurada.collection';
import { EstadoCivilCollection } from '../SIU/Personas/estadocivil.collection';
import { RequirenteNotaAvenimientoCollection } from '../SIU/Tramites/requirentenotaavenimiento.collection';
//#endregion

@Injectable()
export class EstadosCivilesService extends ODataEntityService<EstadoCivil> {
  constructor(protected client: ODataClient) {
    super(client, 'estadosCiviles', 'SIU.Personas.EstadoCivil');
  }

  //#region ODataApi Model
  estadoCivilModel(): EstadoCivilModel<EstadoCivil> {
    return this.entity().asModel() as EstadoCivilModel<EstadoCivil>;
  }
  //#endregion
  //#region ODataApi Collection
  estadoCivilCollection(): EstadoCivilCollection<EstadoCivil, EstadoCivilModel<EstadoCivil>> {
    return this.entities().asCollection() as EstadoCivilCollection<EstadoCivil, EstadoCivilModel<EstadoCivil>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public declaracionesJuradas(entity: EntityKey<EstadoCivil>): ODataNavigationPropertyResource<DeclaracionJurada> {
    return this.entity(entity).navigationProperty<DeclaracionJurada>('declaracionesJuradas');
  }
  public requirentesNotasAvenimientos(entity: EntityKey<EstadoCivil>): ODataNavigationPropertyResource<RequirenteNotaAvenimiento> {
    return this.entity(entity).navigationProperty<RequirenteNotaAvenimiento>('requirentesNotasAvenimientos');
  }
  //#endregion
}
