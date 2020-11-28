import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CasoModel } from './caso.model';
import { Etiqueta } from '../Metadatos/etiqueta.entity';
import { Recurso } from '../Recursos/recurso.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
import { Fiscalia } from '../Lugares/fiscalia.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { CasoPenalReporte } from './casopenalreporte.entity';
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
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { Cita } from '../Agenda/cita.entity';
import { EtiquetaModel } from '../Metadatos/etiqueta.model';
import { RecursoModel } from '../Recursos/recurso.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { FiscaliaModel } from '../Lugares/fiscalia.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CasoPenalReporteModel } from './casopenalreporte.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { AcumulacionCarpetaModel } from './acumulacioncarpeta.model';
import { IntervencionModel } from './intervencion.model';
import { CasoJudiciableModel } from './casojudiciable.model';
import { CategoriaCasoModel } from './categoriacaso.model';
import { MovimientoCasoModel } from './movimientocaso.model';
import { AudienciaModel } from './audiencia.model';
import { DetencionModel } from './detencion.model';
import { AvenimientoModel } from './avenimiento.model';
import { NotaAvenimientoModel } from './notaavenimiento.model';
import { SubMateriaModel } from './submateria.model';
import { HistoricoAbogadoPersonaModel } from './historicoabogadopersona.model';
import { CitaModel } from '../Agenda/cita.model';
import { EtiquetaCollection } from '../Metadatos/etiqueta.collection';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
import { FiscaliaCollection } from '../Lugares/fiscalia.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { CasoPenalReporteCollection } from './casopenalreporte.collection';
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
import { HistoricoAbogadoPersonaCollection } from './historicoabogadopersona.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class CasoPenalModel<E extends CasoPenal> extends CasoModel<E> {
  //#region ODataApi Properties
  nuf?: string;
  nic?: string;
  localidadHechoId: number;
  hecho?: Date;
  caratula?: string;
  nej?: string;
  fiscaliaId?: number;
  localidadHecho?: LocalidadModel<Localidad>;
  fiscalia?: FiscaliaModel<Fiscalia>;
  detenciones?: DetencionCollection<Detencion, DetencionModel<Detencion>>;
  movimientos?: MovimientoCasoCollection<MovimientoCaso, MovimientoCasoModel<MovimientoCaso>>;
  historicoAbogadoPersonas?: HistoricoAbogadoPersonaCollection<HistoricoAbogadoPersona, HistoricoAbogadoPersonaModel<HistoricoAbogadoPersona>>;
  acumulados?: AcumulacionCarpetaCollection<AcumulacionCarpeta, AcumulacionCarpetaModel<AcumulacionCarpeta>>;
  acumulantes?: AcumulacionCarpetaCollection<AcumulacionCarpeta, AcumulacionCarpetaModel<AcumulacionCarpeta>>;
  intervencionesDelCaso?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  intervencionesDeRequirentes?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  acumuladosVigentes?: AcumulacionCarpetaCollection<AcumulacionCarpeta, AcumulacionCarpetaModel<AcumulacionCarpeta>>;
  acumulantesVigentes?: AcumulacionCarpetaCollection<AcumulacionCarpeta, AcumulacionCarpetaModel<AcumulacionCarpeta>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}