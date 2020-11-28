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
import { AudienciaConAgendado } from '../SIU/Tramites/audienciaconagendado.entity';
import { CitaDestinatarios } from '../SIU/Tramites/citadestinatarios.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { EstadoAudiencia } from '../SIU/Tramites/estadoaudiencia.entity';
import { Avenimiento } from '../SIU/Tramites/avenimiento.entity';
import { Citacion } from '../SIU/Tramites/citacion.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { TemaCita } from '../SIU/Agenda/temacita.entity';
import { AudienciaConAgendadoModel } from '../SIU/Tramites/audienciaconagendado.model';
import { CitaDestinatariosModel } from '../SIU/Tramites/citadestinatarios.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { EstadoAudienciaModel } from '../SIU/Tramites/estadoaudiencia.model';
import { AvenimientoModel } from '../SIU/Tramites/avenimiento.model';
import { CitacionModel } from '../SIU/Tramites/citacion.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { TemaCitaModel } from '../SIU/Agenda/temacita.model';
import { AudienciaConAgendadoCollection } from '../SIU/Tramites/audienciaconagendado.collection';
import { CitaDestinatariosCollection } from '../SIU/Tramites/citadestinatarios.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { EstadoAudienciaCollection } from '../SIU/Tramites/estadoaudiencia.collection';
import { AvenimientoCollection } from '../SIU/Tramites/avenimiento.collection';
import { CitacionCollection } from '../SIU/Tramites/citacion.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
import { TemaCitaCollection } from '../SIU/Agenda/temacita.collection';
//#endregion

@Injectable()
export class AudienciasService extends ODataEntityService<Audiencia> {
  constructor(protected client: ODataClient) {
    super(client, 'audiencias', 'SIU.Tramites.Audiencia');
  }

  //#region ODataApi Model
  audienciaModel(): AudienciaModel<Audiencia> {
    return this.entity().asModel() as AudienciaModel<Audiencia>;
  }
  //#endregion
  //#region ODataApi Collection
  audienciaCollection(): AudienciaCollection<Audiencia, AudienciaModel<Audiencia>> {
    return this.entities().asCollection() as AudienciaCollection<Audiencia, AudienciaModel<Audiencia>>;
  }
  //#endregion
  //#region ODataApi Actions
  public insertar(): ODataActionResource<{audiencia: Audiencia, citaDestinatarios: CitaDestinatarios}, Audiencia> {
    const resource = this.entities().action<{audiencia: Audiencia, citaDestinatarios: CitaDestinatarios}, Audiencia>('SIU.Insertar');
    return resource;
  }
  public actualizar(entity: EntityKey<Audiencia>): ODataActionResource<{audiencia: Audiencia, citaDestinatarios: CitaDestinatarios}, Audiencia> {
    const resource = this.entity(entity).action<{audiencia: Audiencia, citaDestinatarios: CitaDestinatarios}, Audiencia>('SIU.Actualizar');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getAudienciasCaso(): ODataFunctionResource<{casoId: number}, AudienciaConAgendado> {
    const resource = this.entities().function<{casoId: number}, AudienciaConAgendado>('SIU.GetAudienciasCaso');
    return resource;
  }
  public getAudienciasAvenimiento(): ODataFunctionResource<{avenimientoId: number}, AudienciaConAgendado> {
    const resource = this.entities().function<{avenimientoId: number}, AudienciaConAgendado>('SIU.GetAudienciasAvenimiento');
    return resource;
  }
  public audienciasDelRequirentePorEmpleado(): ODataFunctionResource<{requirenteId: number, desde: Date, hasta: Date}, Audiencia> {
    const resource = this.entities().function<{requirenteId: number, desde: Date, hasta: Date}, Audiencia>('SIU.AudienciasDelRequirentePorEmpleado');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public avenimiento(entity: EntityKey<Audiencia>): ODataNavigationPropertyResource<Avenimiento> {
    return this.entity(entity).navigationProperty<Avenimiento>('avenimiento');
  }
  public caso(entity: EntityKey<Audiencia>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public citaciones(entity: EntityKey<Audiencia>): ODataNavigationPropertyResource<Citacion> {
    return this.entity(entity).navigationProperty<Citacion>('citaciones');
  }
  public citas(entity: EntityKey<Audiencia>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public estado(entity: EntityKey<Audiencia>): ODataNavigationPropertyResource<EstadoAudiencia> {
    return this.entity(entity).navigationProperty<EstadoAudiencia>('estado');
  }
  public temaCita(entity: EntityKey<Audiencia>): ODataNavigationPropertyResource<TemaCita> {
    return this.entity(entity).navigationProperty<TemaCita>('temaCita');
  }
  //#endregion
}
