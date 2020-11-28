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
import { DeclaracionJurada } from '../SIU/Personas/declaracionjurada.entity';
import { EstadoCivil } from '../SIU/Personas/estadocivil.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { DeclaracionJuradaModel } from '../SIU/Personas/declaracionjurada.model';
import { EstadoCivilModel } from '../SIU/Personas/estadocivil.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { DeclaracionJuradaCollection } from '../SIU/Personas/declaracionjurada.collection';
import { EstadoCivilCollection } from '../SIU/Personas/estadocivil.collection';
//#endregion

@Injectable()
export class DeclaracionesJuradasService extends ODataEntityService<DeclaracionJurada> {
  constructor(protected client: ODataClient) {
    super(client, 'declaracionesJuradas', 'SIU.Personas.DeclaracionJurada');
  }

  //#region ODataApi Model
  declaracionJuradaModel(): DeclaracionJuradaModel<DeclaracionJurada> {
    return this.entity().asModel() as DeclaracionJuradaModel<DeclaracionJurada>;
  }
  //#endregion
  //#region ODataApi Collection
  declaracionJuradaCollection(): DeclaracionJuradaCollection<DeclaracionJurada, DeclaracionJuradaModel<DeclaracionJurada>> {
    return this.entities().asCollection() as DeclaracionJuradaCollection<DeclaracionJurada, DeclaracionJuradaModel<DeclaracionJurada>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public estadoCivil(entity: EntityKey<DeclaracionJurada>): ODataNavigationPropertyResource<EstadoCivil> {
    return this.entity(entity).navigationProperty<EstadoCivil>('estadoCivil');
  }
  public oficina(entity: EntityKey<DeclaracionJurada>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  //#endregion
}
