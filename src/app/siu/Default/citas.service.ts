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
import { Caso } from '../SIU/Tramites/caso.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { MovimientoCaso } from '../SIU/Tramites/movimientocaso.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { CitaNotificacion } from '../SIU/Agenda/citanotificacion.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { TemaCita } from '../SIU/Agenda/temacita.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { MovimientoCasoModel } from '../SIU/Tramites/movimientocaso.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { CitaNotificacionModel } from '../SIU/Agenda/citanotificacion.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { TemaCitaModel } from '../SIU/Agenda/temacita.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { MovimientoCasoCollection } from '../SIU/Tramites/movimientocaso.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { CitaNotificacionCollection } from '../SIU/Agenda/citanotificacion.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
import { TemaCitaCollection } from '../SIU/Agenda/temacita.collection';
//#endregion

@Injectable()
export class CitasService extends ODataEntityService<Cita> {
  constructor(protected client: ODataClient) {
    super(client, 'citas', 'SIU.Agenda.Cita');
  }

  //#region ODataApi Model
  citaModel(): CitaModel<Cita> {
    return this.entity().asModel() as CitaModel<Cita>;
  }
  //#endregion
  //#region ODataApi Collection
  citaCollection(): CitaCollection<Cita, CitaModel<Cita>> {
    return this.entities().asCollection() as CitaCollection<Cita, CitaModel<Cita>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getProximas(): ODataFunctionResource<null, CitaNotificacion> {
    const resource = this.entities().function<null, CitaNotificacion>('SIU.GetProximas');
    return resource;
  }
  public citasDelRequirente(): ODataFunctionResource<{requirenteId: number, desde?: Date, hasta?: Date}, Cita> {
    const resource = this.entities().function<{requirenteId: number, desde?: Date, hasta?: Date}, Cita>('SIU.CitasDelRequirente');
    return resource;
  }
  public citasDelCaso(): ODataFunctionResource<{casoId: number, desde: Date}, Cita> {
    const resource = this.entities().function<{casoId: number, desde: Date}, Cita>('SIU.CitasDelCaso');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public audiencia(entity: EntityKey<Cita>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencia');
  }
  public caso(entity: EntityKey<Cita>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public expediente(entity: EntityKey<Cita>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expediente');
  }
  public movimiento(entity: EntityKey<Cita>): ODataNavigationPropertyResource<MovimientoCaso> {
    return this.entity(entity).navigationProperty<MovimientoCaso>('movimiento');
  }
  public oficina(entity: EntityKey<Cita>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public temaCita(entity: EntityKey<Cita>): ODataNavigationPropertyResource<TemaCita> {
    return this.entity(entity).navigationProperty<TemaCita>('temaCita');
  }
  //#endregion
}
