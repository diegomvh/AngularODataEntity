import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Etiqueta } from '../Metadatos/etiqueta.entity';
import { Recurso } from '../Recursos/recurso.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { RequirenteEnEspera } from '../Personas/requirenteenespera.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { EmpleadoCaso } from './empleadocaso.entity';
import { Intervencion } from './intervencion.entity';
import { CasoJudiciable } from './casojudiciable.entity';
import { CategoriaCaso } from './categoriacaso.entity';
import { Audiencia } from './audiencia.entity';
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
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { RequirenteEnEsperaModel } from '../Personas/requirenteenespera.model';
import { CasoModel } from './caso.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { IntervencionModel } from './intervencion.model';
import { CasoJudiciableModel } from './casojudiciable.model';
import { CategoriaCasoModel } from './categoriacaso.model';
import { AudienciaModel } from './audiencia.model';
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
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { RequirenteEnEsperaCollection } from '../Personas/requirenteenespera.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
import { IntervencionCollection } from './intervencion.collection';
import { CasoJudiciableCollection } from './casojudiciable.collection';
import { CategoriaCasoCollection } from './categoriacaso.collection';
import { AudienciaCollection } from './audiencia.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { NotaAvenimientoCollection } from './notaavenimiento.collection';
import { SubMateriaCollection } from './submateria.collection';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
import { CategoriaCasoCasoCollection } from './categoriacasocaso.collection';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class CasoCollection<E extends Caso, M extends CasoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public crearCaso(oficinaId: number, requirenteId: number, expedienteId: number, subMateriaId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[], options?: HttpOptions): Observable<CasoModel<Caso>> {
    var res = this._action<{oficinaId: number, requirenteId: number, expedienteId: number, subMateriaId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[]}, Caso>('SIU.CrearCaso');
    res.segment.entitySet('casos');
    return res.call({oficinaId, requirenteId, expedienteId, subMateriaId, infoPublica, infoOficina, fechaInicioForm, empleadosIds}, 'model', options) as Observable<CasoModel<Caso>>;
  }
  public crearCasoConEspera(oficinaId: number, requirenteId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[], options?: HttpOptions): Observable<CasoModel<Caso>> {
    var res = this._action<{oficinaId: number, requirenteId: number, infoPublica: string, infoOficina: string, fechaInicioForm: Date, empleadosIds: number[]}, Caso>('SIU.CrearCasoConEspera');
    res.segment.entitySet('casos');
    return res.call({oficinaId, requirenteId, infoPublica, infoOficina, fechaInicioForm, empleadosIds}, 'model', options) as Observable<CasoModel<Caso>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}