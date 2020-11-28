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
import { RecursoOficina } from '../SIU/Recursos/recursooficina.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { DeclaracionJurada } from '../SIU/Personas/declaracionjurada.entity';
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { RequirenteOficina } from '../SIU/Personas/requirenteoficina.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { RequirenteExpediente } from '../SIU/Tramites/requirenteexpediente.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { Avenimiento } from '../SIU/Tramites/avenimiento.entity';
import { Materia } from '../SIU/Tramites/materia.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { TemaCita } from '../SIU/Agenda/temacita.entity';
import { RecursoOficinaModel } from '../SIU/Recursos/recursooficina.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { DeclaracionJuradaModel } from '../SIU/Personas/declaracionjurada.model';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { RequirenteOficinaModel } from '../SIU/Personas/requirenteoficina.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { AvenimientoModel } from '../SIU/Tramites/avenimiento.model';
import { MateriaModel } from '../SIU/Tramites/materia.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { TemaCitaModel } from '../SIU/Agenda/temacita.model';
import { RecursoOficinaCollection } from '../SIU/Recursos/recursooficina.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { DeclaracionJuradaCollection } from '../SIU/Personas/declaracionjurada.collection';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { RequirenteOficinaCollection } from '../SIU/Personas/requirenteoficina.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
import { AvenimientoCollection } from '../SIU/Tramites/avenimiento.collection';
import { MateriaCollection } from '../SIU/Tramites/materia.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
import { TemaCitaCollection } from '../SIU/Agenda/temacita.collection';
//#endregion

@Injectable()
export class OficinasService extends ODataEntityService<Oficina> {
  constructor(protected client: ODataClient) {
    super(client, 'oficinas', 'SIU.Lugares.Oficina');
  }

  //#region ODataApi Model
  oficinaModel(): OficinaModel<Oficina> {
    return this.entity().asModel() as OficinaModel<Oficina>;
  }
  //#endregion
  //#region ODataApi Collection
  oficinaCollection(): OficinaCollection<Oficina, OficinaModel<Oficina>> {
    return this.entities().asCollection() as OficinaCollection<Oficina, OficinaModel<Oficina>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public autorizadas(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('autorizadas');
  }
  public autorizantes(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('autorizantes');
  }
  public avenimientos(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Avenimiento> {
    return this.entity(entity).navigationProperty<Avenimiento>('avenimientos');
  }
  public casos(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('casos');
  }
  public citas(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public declaracionesJuradas(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<DeclaracionJurada> {
    return this.entity(entity).navigationProperty<DeclaracionJurada>('declaracionesJuradas');
  }
  public escritos(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public expedientes(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  public intervenciones(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public localidad(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  public materias(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<Materia> {
    return this.entity(entity).navigationProperty<Materia>('materias');
  }
  public recursos(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<RecursoOficina> {
    return this.entity(entity).navigationProperty<RecursoOficina>('recursos');
  }
  public requirenteEsperas(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirenteEsperas');
  }
  public requirenteExpedientes(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('requirenteExpedientes');
  }
  public requirenteOficinas(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<RequirenteOficina> {
    return this.entity(entity).navigationProperty<RequirenteOficina>('requirenteOficinas');
  }
  public temasCita(entity: EntityKey<Oficina>): ODataNavigationPropertyResource<TemaCita> {
    return this.entity(entity).navigationProperty<TemaCita>('temasCita');
  }
  //#endregion
}
