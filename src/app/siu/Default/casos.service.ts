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
export class CasosService extends ODataEntityService<Caso> {
  constructor(protected client: ODataClient) {
    super(client, 'casos', 'SIU.Tramites.Caso');
  }

  //#region ODataApi Model
  casoModel(): CasoModel<Caso> {
    return this.entity().asModel() as CasoModel<Caso>;
  }
  //#endregion
  //#region ODataApi Collection
  casoCollection(): CasoCollection<Caso, CasoModel<Caso>> {
    return this.entities().asCollection() as CasoCollection<Caso, CasoModel<Caso>>;
  }
  //#endregion
  //#region ODataApi Actions
  public crearIntervencionConRecursos(entity: EntityKey<Caso>): ODataActionResource<{info: string, recursoIds: number[], requirenteId: number, expedienteId: number}, Intervencion> {
    const resource = this.entity(entity).action<{info: string, recursoIds: number[], requirenteId: number, expedienteId: number}, Intervencion>('SIU.CrearIntervencionConRecursos');
    return resource;
  }
  public identificarRequirentes(entity: EntityKey<Caso>): ODataActionResource<{requirentesIds: number[]}, boolean> {
    const resource = this.entity(entity).action<{requirentesIds: number[]}, boolean>('SIU.IdentificarRequirentes');
    return resource;
  }
  public crearCaso(): ODataActionResource<{oficinaId: number, requirenteId: number, expedienteId: number, subMateriaId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[]}, Caso> {
    const resource = this.entities().action<{oficinaId: number, requirenteId: number, expedienteId: number, subMateriaId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[]}, Caso>('SIU.CrearCaso');
    return resource;
  }
  public crearCasoConEspera(): ODataActionResource<{oficinaId: number, requirenteId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[]}, Caso> {
    const resource = this.entities().action<{oficinaId: number, requirenteId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[]}, Caso>('SIU.CrearCasoConEspera');
    return resource;
  }
  public crearCasoRelacionado(entity: EntityKey<Caso>): ODataActionResource<{categoriaCasoId: number, subMateriaId: number, observaciones: string, empleadosIds: number[], etiquetasIds: number[]}, Caso> {
    const resource = this.entity(entity).action<{categoriaCasoId: number, subMateriaId: number, observaciones: string, empleadosIds: number[], etiquetasIds: number[]}, Caso>('SIU.CrearCasoRelacionado');
    return resource;
  }
  public cancelarAtencion(entity: EntityKey<Caso>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('SIU.CancelarAtencion');
    return resource;
  }
  public finalizarAtencion(entity: EntityKey<Caso>): ODataActionResource<null, any> {
    const resource = this.entity(entity).action<null, any>('SIU.FinalizarAtencion');
    return resource;
  }
  public modificarCategoria(entity: EntityKey<Caso>): ODataActionResource<{categoriaCasoId: number}, any> {
    const resource = this.entity(entity).action<{categoriaCasoId: number}, any>('SIU.ModificarCategoria');
    return resource;
  }
  public modificarEmpleados(entity: EntityKey<Caso>): ODataActionResource<{referenteId: number, responsableId: number, subResponsableId: number}, any> {
    const resource = this.entity(entity).action<{referenteId: number, responsableId: number, subResponsableId: number}, any>('SIU.ModificarEmpleados');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public archivo(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Archivo> {
    return this.entity(entity).navigationProperty<Archivo>('archivo');
  }
  public audiencias(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencias');
  }
  public avenimientos(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Avenimiento> {
    return this.entity(entity).navigationProperty<Avenimiento>('avenimientos');
  }
  public categoria(entity: EntityKey<Caso>): ODataNavigationPropertyResource<CategoriaCaso> {
    return this.entity(entity).navigationProperty<CategoriaCaso>('categoria');
  }
  public citas(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Cita> {
    return this.entity(entity).navigationProperty<Cita>('citas');
  }
  public documentos(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Documento> {
    return this.entity(entity).navigationProperty<Documento>('documentos');
  }
  public esperasSinAtender(entity: EntityKey<Caso>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('esperasSinAtender');
  }
  public etiquetas(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Etiqueta> {
    return this.entity(entity).navigationProperty<Etiqueta>('etiquetas');
  }
  public expedientes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<CasoJudiciable> {
    return this.entity(entity).navigationProperty<CasoJudiciable>('expedientes');
  }
  public intervenciones(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public notaAvenimientos(entity: EntityKey<Caso>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimientos');
  }
  public oficina(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public originados(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('originados');
  }
  public originantes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('originantes');
  }
  public recursos(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recursos');
  }
  public requirentes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('requirentes');
  }
  public requirentesEnEspera(entity: EntityKey<Caso>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEspera');
  }
  public asCasoPenal(): ODataEntitySetResource<CasoPenal> {
    return this.entities().cast<CasoPenal>('SIU.Tramites.CasoPenal');
  }
  public asCasoPenalAcumulados(entity: EntityKey<Caso>): ODataNavigationPropertyResource<CasoPenal> {
    return this.asCasoPenal().entity(entity).navigationProperty<CasoPenal>('acumulados');
  }
  public asCasoPenalAcumuladosVigentes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.asCasoPenal().entity(entity).navigationProperty<AcumulacionCarpeta>('acumuladosVigentes');
  }
  public asCasoPenalAcumulantes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.asCasoPenal().entity(entity).navigationProperty<AcumulacionCarpeta>('acumulantes');
  }
  public asCasoPenalAcumulantesVigentes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<AcumulacionCarpeta> {
    return this.asCasoPenal().entity(entity).navigationProperty<AcumulacionCarpeta>('acumulantesVigentes');
  }
  public asCasoPenalDetenciones(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Detencion> {
    return this.asCasoPenal().entity(entity).navigationProperty<Detencion>('detenciones');
  }
  public asCasoPenalFiscalia(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Fiscalia> {
    return this.asCasoPenal().entity(entity).navigationProperty<Fiscalia>('fiscalia');
  }
  public asCasoPenalIntervencionesDelCaso(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Intervencion> {
    return this.asCasoPenal().entity(entity).navigationProperty<Intervencion>('intervencionesDelCaso');
  }
  public asCasoPenalIntervencionesDeRequirentes(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Intervencion> {
    return this.asCasoPenal().entity(entity).navigationProperty<Intervencion>('intervencionesDeRequirentes');
  }
  public asCasoPenalLocalidadHecho(entity: EntityKey<Caso>): ODataNavigationPropertyResource<Localidad> {
    return this.asCasoPenal().entity(entity).navigationProperty<Localidad>('localidadHecho');
  }
  public asCasoPenalMovimientos(entity: EntityKey<Caso>): ODataNavigationPropertyResource<MovimientoCaso> {
    return this.asCasoPenal().entity(entity).navigationProperty<MovimientoCaso>('movimientos');
  }
  public subMateria(entity: EntityKey<Caso>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('subMateria');
  }
  public subResponsables(entity: EntityKey<Caso>): ODataNavigationPropertyResource<EmpleadoCaso> {
    return this.entity(entity).navigationProperty<EmpleadoCaso>('subResponsables');
  }
  //#endregion
}
