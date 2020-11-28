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
import { RecursoUsuario } from '../SIU/Recursos/recursousuario.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { ToDo } from '../SIU/Gestion/todo.entity';
import { Empleado } from '../SIU/Personas/empleado.entity';
import { DeclaracionJurada } from '../SIU/Personas/declaracionjurada.entity';
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { RequirenteOficina } from '../SIU/Personas/requirenteoficina.entity';
import { TipoIdentificacion } from '../SIU/Personas/tipoidentificacion.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { EmpleadoCaso } from '../SIU/Tramites/empleadocaso.entity';
import { RequirenteExpediente } from '../SIU/Tramites/requirenteexpediente.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { Avenimiento } from '../SIU/Tramites/avenimiento.entity';
import { NotaAvenimiento } from '../SIU/Tramites/notaavenimiento.entity';
import { Citacion } from '../SIU/Tramites/citacion.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { RecursoUsuarioModel } from '../SIU/Recursos/recursousuario.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { ToDoModel } from '../SIU/Gestion/todo.model';
import { EmpleadoModel } from '../SIU/Personas/empleado.model';
import { DeclaracionJuradaModel } from '../SIU/Personas/declaracionjurada.model';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { RequirenteOficinaModel } from '../SIU/Personas/requirenteoficina.model';
import { TipoIdentificacionModel } from '../SIU/Personas/tipoidentificacion.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { EmpleadoCasoModel } from '../SIU/Tramites/empleadocaso.model';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { AvenimientoModel } from '../SIU/Tramites/avenimiento.model';
import { NotaAvenimientoModel } from '../SIU/Tramites/notaavenimiento.model';
import { CitacionModel } from '../SIU/Tramites/citacion.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { RecursoUsuarioCollection } from '../SIU/Recursos/recursousuario.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { ToDoCollection } from '../SIU/Gestion/todo.collection';
import { EmpleadoCollection } from '../SIU/Personas/empleado.collection';
import { DeclaracionJuradaCollection } from '../SIU/Personas/declaracionjurada.collection';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { RequirenteOficinaCollection } from '../SIU/Personas/requirenteoficina.collection';
import { TipoIdentificacionCollection } from '../SIU/Personas/tipoidentificacion.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
import { EmpleadoCasoCollection } from '../SIU/Tramites/empleadocaso.collection';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { AvenimientoCollection } from '../SIU/Tramites/avenimiento.collection';
import { NotaAvenimientoCollection } from '../SIU/Tramites/notaavenimiento.collection';
import { CitacionCollection } from '../SIU/Tramites/citacion.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
//#endregion

@Injectable()
export class UsuariosService extends ODataEntityService<Empleado> {
  constructor(protected client: ODataClient) {
    super(client, 'usuarios', 'SIU.Personas.Empleado');
  }

  //#region ODataApi Model
  empleadoModel(): EmpleadoModel<Empleado> {
    return this.entity().asModel() as EmpleadoModel<Empleado>;
  }
  //#endregion
  //#region ODataApi Collection
  empleadoCollection(): EmpleadoCollection<Empleado, EmpleadoModel<Empleado>> {
    return this.entities().asCollection() as EmpleadoCollection<Empleado, EmpleadoModel<Empleado>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public audienciasAlta(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audienciasAlta');
  }
  public audienciasModificadas(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audienciasModificadas');
  }
  public avenimientos(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Avenimiento> {
    return this.entity(entity).navigationProperty<Avenimiento>('avenimientos');
  }
  public casosReferente(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('casosReferente');
  }
  public casosResponsable(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('casosResponsable');
  }
  public casosSubResponsable(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<EmpleadoCaso> {
    return this.entity(entity).navigationProperty<EmpleadoCaso>('casosSubResponsable');
  }
  public citaciones(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Citacion> {
    return this.entity(entity).navigationProperty<Citacion>('citaciones');
  }
  public citas(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public declaracionesJuradas(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<DeclaracionJurada> {
    return this.entity(entity).navigationProperty<DeclaracionJurada>('declaracionesJuradas');
  }
  public escritos(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public expedientes(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  public intervenciones(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public localidad(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  public notaAvenimientosAltas(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimientosAltas');
  }
  public notaAvenimientosReferentes(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimientosReferentes');
  }
  public notaAvenimientosSubResponsables(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimientosSubResponsables');
  }
  public notasDeAvenimiento(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notasDeAvenimiento');
  }
  public oficinas(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficinas');
  }
  public recursos(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RecursoUsuario> {
    return this.entity(entity).navigationProperty<RecursoUsuario>('recursos');
  }
  public registros(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('registros');
  }
  public requirenteOficinas(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteOficina> {
    return this.entity(entity).navigationProperty<RequirenteOficina>('requirenteOficinas');
  }
  public requirentesEnEsperaAtencion(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEsperaAtencion');
  }
  public requirentesEnEsperaAtendiendo(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEsperaAtendiendo');
  }
  public requirentesEnEsperaReferente(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEsperaReferente');
  }
  public requirentesEnEsperaResponsable(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEsperaResponsable');
  }
  public requirentesEnEsperaSubResponsable(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEsperaSubResponsable');
  }
  public rolRequirenteCasos(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('rolRequirenteCasos');
  }
  public rolRequirenteCasosAlternativos(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('rolRequirenteCasosAlternativos');
  }
  public rolRequirenteEmpleadoExpedientes(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('rolRequirenteEmpleadoExpedientes');
  }
  public rolRequirenteEmpleadoExpedientesReg(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('rolRequirenteEmpleadoExpedientesReg');
  }
  public tipoIdentificacion(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<TipoIdentificacion> {
    return this.entity(entity).navigationProperty<TipoIdentificacion>('tipoIdentificacion');
  }
  public toDos(entity: EntityKey<Empleado>): ODataNavigationPropertyResource<ToDo> {
    return this.entity(entity).navigationProperty<ToDo>('toDos');
  }
  //#endregion
}
