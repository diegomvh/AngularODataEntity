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
import { Recurso } from '../SIU/Recursos/recurso.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
//#endregion

@Injectable()
export class EscritosService extends ODataEntityService<Escrito> {
  constructor(protected client: ODataClient) {
    super(client, 'escritos', 'SIU.Tramites.Escrito');
  }

  //#region ODataApi Model
  escritoModel(): EscritoModel<Escrito> {
    return this.entity().asModel() as EscritoModel<Escrito>;
  }
  //#endregion
  //#region ODataApi Collection
  escritoCollection(): EscritoCollection<Escrito, EscritoModel<Escrito>> {
    return this.entities().asCollection() as EscritoCollection<Escrito, EscritoModel<Escrito>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expediente(entity: EntityKey<Escrito>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expediente');
  }
  public oficina(entity: EntityKey<Escrito>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public recursos(entity: EntityKey<Escrito>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recursos');
  }
  //#endregion
}
