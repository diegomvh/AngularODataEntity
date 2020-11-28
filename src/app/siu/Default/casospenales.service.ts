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
import { Etiqueta } from '../SIU/Metadatos/etiqueta.entity';
import { Recurso } from '../SIU/Recursos/recurso.entity';
import { Documento } from '../SIU/Documentos/documento.entity';
import { Archivo } from '../SIU/Documentos/archivo.entity';
import { Fiscalia } from '../SIU/Lugares/fiscalia.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { CasoPenalReporte } from '../SIU/Tramites/casopenalreporte.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { EmpleadoCaso } from '../SIU/Tramites/empleadocaso.entity';
import { AcumulacionCarpeta } from '../SIU/Tramites/acumulacioncarpeta.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { CasoPenal } from '../SIU/Tramites/casopenal.entity';
import { CasoJudiciable } from '../SIU/Tramites/casojudiciable.entity';
import { CategoriaCaso } from '../SIU/Tramites/categoriacaso.entity';
import { MovimientoCaso } from '../SIU/Tramites/movimientocaso.entity';
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { Detencion } from '../SIU/Tramites/detencion.entity';
import { Avenimiento } from '../SIU/Tramites/avenimiento.entity';
import { NotaAvenimiento } from '../SIU/Tramites/notaavenimiento.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { Cita } from '../SIU/Agenda/cita.entity';
import { EtiquetaModel } from '../SIU/Metadatos/etiqueta.model';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { DocumentoModel } from '../SIU/Documentos/documento.model';
import { ArchivoModel } from '../SIU/Documentos/archivo.model';
import { FiscaliaModel } from '../SIU/Lugares/fiscalia.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { CasoPenalReporteModel } from '../SIU/Tramites/casopenalreporte.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { EmpleadoCasoModel } from '../SIU/Tramites/empleadocaso.model';
import { AcumulacionCarpetaModel } from '../SIU/Tramites/acumulacioncarpeta.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { CasoPenalModel } from '../SIU/Tramites/casopenal.model';
import { CasoJudiciableModel } from '../SIU/Tramites/casojudiciable.model';
import { CategoriaCasoModel } from '../SIU/Tramites/categoriacaso.model';
import { MovimientoCasoModel } from '../SIU/Tramites/movimientocaso.model';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { DetencionModel } from '../SIU/Tramites/detencion.model';
import { AvenimientoModel } from '../SIU/Tramites/avenimiento.model';
import { NotaAvenimientoModel } from '../SIU/Tramites/notaavenimiento.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { CitaModel } from '../SIU/Agenda/cita.model';
import { EtiquetaCollection } from '../SIU/Metadatos/etiqueta.collection';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { DocumentoCollection } from '../SIU/Documentos/documento.collection';
import { ArchivoCollection } from '../SIU/Documentos/archivo.collection';
import { FiscaliaCollection } from '../SIU/Lugares/fiscalia.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { CasoPenalReporteCollection } from '../SIU/Tramites/casopenalreporte.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
import { EmpleadoCasoCollection } from '../SIU/Tramites/empleadocaso.collection';
import { AcumulacionCarpetaCollection } from '../SIU/Tramites/acumulacioncarpeta.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { CasoPenalCollection } from '../SIU/Tramites/casopenal.collection';
import { CasoJudiciableCollection } from '../SIU/Tramites/casojudiciable.collection';
import { CategoriaCasoCollection } from '../SIU/Tramites/categoriacaso.collection';
import { MovimientoCasoCollection } from '../SIU/Tramites/movimientocaso.collection';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { DetencionCollection } from '../SIU/Tramites/detencion.collection';
import { AvenimientoCollection } from '../SIU/Tramites/avenimiento.collection';
import { NotaAvenimientoCollection } from '../SIU/Tramites/notaavenimiento.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
import { CitaCollection } from '../SIU/Agenda/cita.collection';
//#endregion

@Injectable()
export class CasosPenalesService extends ODataEntityService<CasoPenal> {
  constructor(protected client: ODataClient) {
    super(client, 'casosPenales', 'SIU.Tramites.CasoPenal');
  }

  //#region ODataApi Model
  casoPenalModel(): CasoPenalModel<CasoPenal> {
    return this.entity().asModel() as CasoPenalModel<CasoPenal>;
  }
  //#endregion
  //#region ODataApi Collection
  casoPenalCollection(): CasoPenalCollection<CasoPenal, CasoPenalModel<CasoPenal>> {
    return this.entities().asCollection() as CasoPenalCollection<CasoPenal, CasoPenalModel<CasoPenal>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getCausas(): ODataFunctionResource<{principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[]}, CasoPenalReporte> {
    const resource = this.entities().function<{principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[]}, CasoPenalReporte>('SIU.GetCausas');
    return resource;
  }
  public printCausas(): ODataFunctionResource<{principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[]}, ArrayBuffer> {
    const resource = this.entities().function<{principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[]}, ArrayBuffer>('SIU.PrintCausas');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public acumulados(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.entity(entity).navigationProperty<AcumulacionCarpeta>('acumulados');
  }
  public acumuladosVigentes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.entity(entity).navigationProperty<AcumulacionCarpeta>('acumuladosVigentes');
  }
  public acumulantes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.entity(entity).navigationProperty<AcumulacionCarpeta>('acumulantes');
  }
  public acumulantesVigentes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.entity(entity).navigationProperty<AcumulacionCarpeta>('acumulantesVigentes');
  }
  public archivo(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Archivo> {
    return this.entity(entity).navigationProperty<Archivo>('archivo');
  }
  public audiencias(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencias');
  }
  public avenimientos(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Avenimiento> {
    return this.entity(entity).navigationProperty<Avenimiento>('avenimientos');
  }
  public categoria(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<CategoriaCaso> {
    return this.entity(entity).navigationProperty<CategoriaCaso>('categoria');
  }
  public citas(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public detenciones(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Detencion> {
    return this.entity(entity).navigationProperty<Detencion>('detenciones');
  }
  public documentos(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Documento> {
    return this.entity(entity).navigationProperty<Documento>('documentos');
  }
  public esperasSinAtender(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('esperasSinAtender');
  }
  public etiquetas(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Etiqueta> {
    return this.entity(entity).navigationProperty<Etiqueta>('etiquetas');
  }
  public expedientes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<CasoJudiciable> {
    return this.entity(entity).navigationProperty<CasoJudiciable>('expedientes');
  }
  public fiscalia(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Fiscalia> {
    return this.entity(entity).navigationProperty<Fiscalia>('fiscalia');
  }
  public intervenciones(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public intervencionesDelCaso(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervencionesDelCaso');
  }
  public intervencionesDeRequirentes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervencionesDeRequirentes');
  }
  public localidadHecho(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidadHecho');
  }
  public movimientos(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<MovimientoCaso> {
    return this.entity(entity).navigationProperty<MovimientoCaso>('movimientos');
  }
  public notaAvenimientos(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimientos');
  }
  public oficina(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public originados(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('originados');
  }
  public originantes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('originantes');
  }
  public recursos(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recursos');
  }
  public requirentes(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('requirentes');
  }
  public requirentesEnEspera(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEspera');
  }
  public subMateria(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('subMateria');
  }
  public subResponsables(entity: EntityKey<CasoPenal>): ODataNavigationPropertyResource<EmpleadoCaso> {
    return this.entity(entity).navigationProperty<EmpleadoCaso>('subResponsables');
  }
  //#endregion
}
