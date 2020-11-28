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
import { Documento } from '../SIU/Documentos/documento.entity';
import { Archivo } from '../SIU/Documentos/archivo.entity';
import { Requirente } from '../SIU/Personas/requirente.entity';
import { DeclaracionJurada } from '../SIU/Personas/declaracionjurada.entity';
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { RequirenteOficina } from '../SIU/Personas/requirenteoficina.entity';
import { EstadoCivil } from '../SIU/Personas/estadocivil.entity';
import { TipoIdentificacion } from '../SIU/Personas/tipoidentificacion.entity';
import { Nacionalidad } from '../SIU/Personas/nacionalidad.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { RequirenteNotaAvenimiento } from '../SIU/Tramites/requirentenotaavenimiento.entity';
import { RequirenteExpediente } from '../SIU/Tramites/requirenteexpediente.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Detencion } from '../SIU/Tramites/detencion.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { DocumentoModel } from '../SIU/Documentos/documento.model';
import { ArchivoModel } from '../SIU/Documentos/archivo.model';
import { RequirenteModel } from '../SIU/Personas/requirente.model';
import { DeclaracionJuradaModel } from '../SIU/Personas/declaracionjurada.model';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { RequirenteOficinaModel } from '../SIU/Personas/requirenteoficina.model';
import { EstadoCivilModel } from '../SIU/Personas/estadocivil.model';
import { TipoIdentificacionModel } from '../SIU/Personas/tipoidentificacion.model';
import { NacionalidadModel } from '../SIU/Personas/nacionalidad.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { RequirenteNotaAvenimientoModel } from '../SIU/Tramites/requirentenotaavenimiento.model';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { DetencionModel } from '../SIU/Tramites/detencion.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { DocumentoCollection } from '../SIU/Documentos/documento.collection';
import { ArchivoCollection } from '../SIU/Documentos/archivo.collection';
import { RequirenteCollection } from '../SIU/Personas/requirente.collection';
import { DeclaracionJuradaCollection } from '../SIU/Personas/declaracionjurada.collection';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { RequirenteOficinaCollection } from '../SIU/Personas/requirenteoficina.collection';
import { EstadoCivilCollection } from '../SIU/Personas/estadocivil.collection';
import { TipoIdentificacionCollection } from '../SIU/Personas/tipoidentificacion.collection';
import { NacionalidadCollection } from '../SIU/Personas/nacionalidad.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
import { RequirenteNotaAvenimientoCollection } from '../SIU/Tramites/requirentenotaavenimiento.collection';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { DetencionCollection } from '../SIU/Tramites/detencion.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
//#endregion

@Injectable()
export class RequirentesService extends ODataEntityService<Requirente> {
  constructor(protected client: ODataClient) {
    super(client, 'requirentes', 'SIU.Personas.Requirente');
  }

  //#region ODataApi Model
  requirenteModel(): RequirenteModel<Requirente> {
    return this.entity().asModel() as RequirenteModel<Requirente>;
  }
  //#endregion
  //#region ODataApi Collection
  requirenteCollection(): RequirenteCollection<Requirente, RequirenteModel<Requirente>> {
    return this.entities().asCollection() as RequirenteCollection<Requirente, RequirenteModel<Requirente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public testRequirente1(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente1');
    return resource;
  }
  public testRequirente2(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente2');
    return resource;
  }
  public testRequirente3(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente3');
    return resource;
  }
  public testRequirente4(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente4');
    return resource;
  }
  public testString(): ODataFunctionResource<null, string> {
    const resource = this.entities().function<null, string>('SIU.TestString');
    return resource;
  }
  public casosComo(entity: EntityKey<Requirente>): ODataFunctionResource<{rol: number}, Caso> {
    const resource = this.entity(entity).function<{rol: number}, Caso>('SIU.CasosComo');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public archivos(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Archivo> {
    return this.entity(entity).navigationProperty<Archivo>('archivos');
  }
  public casos(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('casos');
  }
  public citas(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public declaracionesJuradas(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<DeclaracionJurada> {
    return this.entity(entity).navigationProperty<DeclaracionJurada>('declaracionesJuradas');
  }
  public detenciones(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Detencion> {
    return this.entity(entity).navigationProperty<Detencion>('detenciones');
  }
  public documentos(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Documento> {
    return this.entity(entity).navigationProperty<Documento>('documentos');
  }
  public esperas(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('esperas');
  }
  public estadoCivil(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<EstadoCivil> {
    return this.entity(entity).navigationProperty<EstadoCivil>('estadoCivil');
  }
  public expedientes(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('expedientes');
  }
  public intervenciones(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public nacionalidad(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Nacionalidad> {
    return this.entity(entity).navigationProperty<Nacionalidad>('nacionalidad');
  }
  public notasAvenimiento(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<RequirenteNotaAvenimiento> {
    return this.entity(entity).navigationProperty<RequirenteNotaAvenimiento>('notasAvenimiento');
  }
  public oficinas(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<RequirenteOficina> {
    return this.entity(entity).navigationProperty<RequirenteOficina>('oficinas');
  }
  public recursos(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recursos');
  }
  public tipoIdentificacion(entity: EntityKey<Requirente>): ODataNavigationPropertyResource<TipoIdentificacion> {
    return this.entity(entity).navigationProperty<TipoIdentificacion>('tipoIdentificacion');
  }
  //#endregion
}
