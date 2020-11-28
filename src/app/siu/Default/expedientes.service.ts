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
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Juzgado } from '../SIU/Lugares/juzgado.entity';
import { Secretaria } from '../SIU/Lugares/secretaria.entity';
import { Asesor } from '../SIU/Personas/asesor.entity';
import { Fiscal } from '../SIU/Personas/fiscal.entity';
import { RequirenteExpediente } from '../SIU/Tramites/requirenteexpediente.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { EstadoExpediente } from '../SIU/Tramites/estadoexpediente.entity';
import { CasoJudiciable } from '../SIU/Tramites/casojudiciable.entity';
import { CategoriaExpediente } from '../SIU/Tramites/categoriaexpediente.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { DocumentoModel } from '../SIU/Documentos/documento.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { JuzgadoModel } from '../SIU/Lugares/juzgado.model';
import { SecretariaModel } from '../SIU/Lugares/secretaria.model';
import { AsesorModel } from '../SIU/Personas/asesor.model';
import { FiscalModel } from '../SIU/Personas/fiscal.model';
import { RequirenteExpedienteModel } from '../SIU/Tramites/requirenteexpediente.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { EstadoExpedienteModel } from '../SIU/Tramites/estadoexpediente.model';
import { CasoJudiciableModel } from '../SIU/Tramites/casojudiciable.model';
import { CategoriaExpedienteModel } from '../SIU/Tramites/categoriaexpediente.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { DocumentoCollection } from '../SIU/Documentos/documento.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { JuzgadoCollection } from '../SIU/Lugares/juzgado.collection';
import { SecretariaCollection } from '../SIU/Lugares/secretaria.collection';
import { AsesorCollection } from '../SIU/Personas/asesor.collection';
import { FiscalCollection } from '../SIU/Personas/fiscal.collection';
import { RequirenteExpedienteCollection } from '../SIU/Tramites/requirenteexpediente.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
import { EstadoExpedienteCollection } from '../SIU/Tramites/estadoexpediente.collection';
import { CasoJudiciableCollection } from '../SIU/Tramites/casojudiciable.collection';
import { CategoriaExpedienteCollection } from '../SIU/Tramites/categoriaexpediente.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
//#endregion

@Injectable()
export class ExpedientesService extends ODataEntityService<Expediente> {
  constructor(protected client: ODataClient) {
    super(client, 'expedientes', 'SIU.Tramites.Expediente');
  }

  //#region ODataApi Model
  expedienteModel(): ExpedienteModel<Expediente> {
    return this.entity().asModel() as ExpedienteModel<Expediente>;
  }
  //#endregion
  //#region ODataApi Collection
  expedienteCollection(): ExpedienteCollection<Expediente, ExpedienteModel<Expediente>> {
    return this.entities().asCollection() as ExpedienteCollection<Expediente, ExpedienteModel<Expediente>>;
  }
  //#endregion
  //#region ODataApi Actions
  public crearEscritoConDocumento(entity: EntityKey<Expediente>): ODataActionResource<{firmanteId: number, recursoId: number}, Escrito> {
    const resource = this.entity(entity).action<{firmanteId: number, recursoId: number}, Escrito>('SIU.CrearEscritoConDocumento');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public asesor(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Asesor> {
    return this.entity(entity).navigationProperty<Asesor>('asesor');
  }
  public casos(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<CasoJudiciable> {
    return this.entity(entity).navigationProperty<CasoJudiciable>('casos');
  }
  public categoria(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<CategoriaExpediente> {
    return this.entity(entity).navigationProperty<CategoriaExpediente>('categoria');
  }
  public citas(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public documentos(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Documento> {
    return this.entity(entity).navigationProperty<Documento>('documentos');
  }
  public escritos(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public estado(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<EstadoExpediente> {
    return this.entity(entity).navigationProperty<EstadoExpediente>('estado');
  }
  public fiscal(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Fiscal> {
    return this.entity(entity).navigationProperty<Fiscal>('fiscal');
  }
  public juzgado(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Juzgado> {
    return this.entity(entity).navigationProperty<Juzgado>('juzgado');
  }
  public oficina(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public recursos(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recursos');
  }
  public requirentes(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<RequirenteExpediente> {
    return this.entity(entity).navigationProperty<RequirenteExpediente>('requirentes');
  }
  public secretaria(entity: EntityKey<Expediente>): ODataNavigationPropertyResource<Secretaria> {
    return this.entity(entity).navigationProperty<Secretaria>('secretaria');
  }
  //#endregion
}
