import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Etiqueta } from '../Metadatos/etiqueta.entity';
import { Recurso } from '../Recursos/recurso.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
import { Fiscalia } from '../Lugares/fiscalia.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { EmpleadoCaso } from './empleadocaso.entity';
import { AcumulacionCarpeta } from './acumulacioncarpeta.entity';
import { Intervencion } from './intervencion.entity';
import { CasoPenal } from './casopenal.entity';
import { CasoJudiciable } from './casojudiciable.entity';
import { CategoriaCaso } from './categoriacaso.entity';
import { MovimientoCaso } from './movimientocaso.entity';
import { Audiencia } from './audiencia.entity';
import { Detencion } from './detencion.entity';
import { Avenimiento } from './avenimiento.entity';
import { NotaAvenimiento } from './notaavenimiento.entity';
import { SubMateria } from './submateria.entity';
import { HistoricoSubmateria } from './historicosubmateria.entity';
import { CategoriaCasoCaso } from './categoriacasocaso.entity';
import { HistoricoResponsable } from './historicoresponsable.entity';
import { Cita } from '../Agenda/cita.entity';
import { EtiquetaModel } from '../Metadatos/etiqueta.model';
import { RecursoModel } from '../Recursos/recurso.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { FiscaliaModel } from '../Lugares/fiscalia.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { AcumulacionCarpetaModel } from './acumulacioncarpeta.model';
import { IntervencionModel } from './intervencion.model';
import { CasoPenalModel } from './casopenal.model';
import { CasoJudiciableModel } from './casojudiciable.model';
import { CategoriaCasoModel } from './categoriacaso.model';
import { MovimientoCasoModel } from './movimientocaso.model';
import { AudienciaModel } from './audiencia.model';
import { DetencionModel } from './detencion.model';
import { AvenimientoModel } from './avenimiento.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { SubMateriaModel } from './submateria.model';
import { HistoricoSubmateriaModel } from './historicosubmateria.model';
import { CategoriaCasoCasoModel } from './categoriacasocaso.model';
import { HistoricoResponsableModel } from './historicoresponsable.model';
import { CitaModel } from '../Agenda/cita.model';
import { EtiquetaCollection } from '../Metadatos/etiqueta.collection';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
import { FiscaliaCollection } from '../Lugares/fiscalia.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
import { AcumulacionCarpetaCollection } from './acumulacioncarpeta.collection';
import { IntervencionCollection } from './intervencion.collection';
import { CasoPenalCollection } from './casopenal.collection';
import { CasoJudiciableCollection } from './casojudiciable.collection';
import { CategoriaCasoCollection } from './categoriacaso.collection';
import { MovimientoCasoCollection } from './movimientocaso.collection';
import { AudienciaCollection } from './audiencia.collection';
import { DetencionCollection } from './detencion.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class CasoModel<E extends Caso> extends ODataModel<E> {
  //#region ODataApi Properties
  subMateriaId?: number;
  oficinaId?: number;
  desde: Date;
  modificacion?: Date;
  hasta?: Date;
  observaciones?: string;
  responsableId?: number;
  fechaResponsable?: Date;
  referenteId?: number;
  estado?: number;
  etapaAvenimiento: boolean;
  archivado: boolean;
  reclamoAdministrativo?: boolean;
  enEspera: boolean;
  enAtencion: boolean;
  esNuevo: boolean;
  esEliminable: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  oficina?: OficinaModel<Oficina>;
  subMateria?: SubMateriaModel<SubMateria>;
  historicoSubmaterias?: HistoricoSubmateriaCollection<HistoricoSubmateria, HistoricoSubmateriaModel<HistoricoSubmateria>>;
  etiquetas?: EtiquetaCollection<Etiqueta, EtiquetaModel<Etiqueta>>;
  intervenciones?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  audiencias?: AudienciaCollection<Audiencia, AudienciaModel<Audiencia>>;
  avenimientos?: AvenimientoCollection<Avenimiento, AvenimientoModel<Avenimiento>>;
  notaAvenimientos?: NotaAvenimientoCollection<NotaAvenimiento, NotaAvenimientoModel<NotaAvenimiento>>;
  categorias?: CategoriaCasoCasoCollection<CategoriaCasoCaso, CategoriaCasoCasoModel<CategoriaCasoCaso>>;
  citas?: CitaCollection<Cita, CitaModel<Cita>>;
  originantes?: CasoCollection<Caso, CasoModel<Caso>>;
  originados?: CasoCollection<Caso, CasoModel<Caso>>;
  expedientes?: CasoJudiciableCollection<CasoJudiciable, CasoJudiciableModel<CasoJudiciable>>;
  requirentes?: RequirenteCasoCollection<RequirenteCaso, RequirenteCasoModel<RequirenteCaso>>;
  requirentesEnEspera?: RequirenteEnEsperaCollection<RequirenteEnEspera, RequirenteEnEsperaModel<RequirenteEnEspera>>;
  referente?: EmpleadoModel<Empleado>;
  responsable?: EmpleadoModel<Empleado>;
  subResponsables?: EmpleadoCasoCollection<EmpleadoCaso, EmpleadoCasoModel<EmpleadoCaso>>;
  historicoResponsables?: HistoricoResponsableCollection<HistoricoResponsable, HistoricoResponsableModel<HistoricoResponsable>>;
  categoria?: CategoriaCasoModel<CategoriaCaso>;
  esperasSinAtender?: RequirenteEnEsperaCollection<RequirenteEnEspera, RequirenteEnEsperaModel<RequirenteEnEspera>>;
  recursos?: RecursoCollection<Recurso, RecursoModel<Recurso>>;
  documentos?: DocumentoCollection<Documento, DocumentoModel<Documento>>;
  archivo?: ArchivoCollection<Archivo, ArchivoModel<Archivo>>;
  //#endregion
  //#region ODataApi Actions
  public crearIntervencionConRecursos(info: string, recursoIds: number[], requirenteId: number, expedienteId: number, options?: HttpOptions): Observable<IntervencionModel<Intervencion>> {
    var res = this._action<{info: string, recursoIds: number[], requirenteId: number, expedienteId: number}, Intervencion>('SIU.CrearIntervencionConRecursos');
    res.segment.entitySet('casos');
    return res.call({info, recursoIds, requirenteId, expedienteId}, 'model', options) as Observable<IntervencionModel<Intervencion>>;
  }
  public identificarRequirentes(requirentesIds: number[], options?: HttpOptions): Observable<boolean> {
    var res = this._action<{requirentesIds: number[]}, boolean>('SIU.IdentificarRequirentes');
    res.segment.entitySet('casos');
    return res.call({requirentesIds}, 'property', options) as Observable<boolean>;
  }
  public crearCasoRelacionado(categoriaCasoId: number, subMateriaId: number, observaciones: string, empleadosIds: number[], etiquetasIds: number[], options?: HttpOptions): Observable<CasoModel<Caso>> {
    var res = this._action<{categoriaCasoId: number, subMateriaId: number, observaciones: string, empleadosIds: number[], etiquetasIds: number[]}, Caso>('SIU.CrearCasoRelacionado');
    res.segment.entitySet('casos');
    return res.call({categoriaCasoId, subMateriaId, observaciones, empleadosIds, etiquetasIds}, 'model', options) as Observable<CasoModel<Caso>>;
  }
  public cancelarAtencion(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('SIU.CancelarAtencion');
    res.segment.entitySet('casos');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public finalizarAtencion(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('SIU.FinalizarAtencion');
    res.segment.entitySet('casos');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public modificarCategoria(categoriaCasoId: number, options?: HttpOptions): Observable<any> {
    var res = this._action<{categoriaCasoId: number}, any>('SIU.ModificarCategoria');
    res.segment.entitySet('casos');
    return res.call({categoriaCasoId}, 'property', options) as Observable<any>;
  }
  public modificarEmpleados(referenteId: number, responsableId: number, subResponsableId: number, options?: HttpOptions): Observable<any> {
    var res = this._action<{referenteId: number, responsableId: number, subResponsableId: number}, any>('SIU.ModificarEmpleados');
    res.segment.entitySet('casos');
    return res.call({referenteId, responsableId, subResponsableId}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public asCasoPenal(): CasoPenalModel<CasoPenal> {
    return this._cast<any>('SIU.Tramites.CasoPenal').asModel(this.toEntity()) as CasoPenalModel<CasoPenal>;
  }
  //#endregion
}