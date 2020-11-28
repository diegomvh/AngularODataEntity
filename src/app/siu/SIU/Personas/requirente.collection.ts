import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Recurso } from '../Recursos/recurso.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
import { Requirente } from './requirente.entity';
import { DeclaracionJurada } from './declaracionjurada.entity';
import { RequirenteEnEspera } from './requirenteenespera.entity';
import { RequirenteOficina } from './requirenteoficina.entity';
import { EstadoCivil } from './estadocivil.entity';
import { TipoIdentificacion } from './tipoidentificacion.entity';
import { Nacionalidad } from './nacionalidad.entity';
import { Caso } from '../Tramites/caso.entity';
import { RequirenteCaso } from '../Tramites/requirentecaso.entity';
import { RequirenteNotaAvenimiento } from '../Tramites/requirentenotaavenimiento.entity';
import { RequirenteExpediente } from '../Tramites/requirenteexpediente.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Detencion } from '../Tramites/detencion.entity';
import { RequirenteAvenimiento } from '../Tramites/requirenteavenimiento.entity';
import { RequirenteCitacion } from '../Tramites/requirentecitacion.entity';
import { HistoricoSubmateria } from '../Tramites/historicosubmateria.entity';
import { HistoricoAbogadoPersona } from '../Tramites/historicoabogadopersona.entity';
import { Cita } from '../Agenda/cita.entity';
import { RecursoModel } from '../Recursos/recurso.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { RequirenteModel } from './requirente.model';
import { DeclaracionJuradaModel } from './declaracionjurada.model';
import { RequirenteEnEsperaModel } from './requirenteenespera.model';
import { RequirenteOficinaModel } from './requirenteoficina.model';
import { EstadoCivilModel } from './estadocivil.model';
import { TipoIdentificacionModel } from './tipoidentificacion.model';
import { NacionalidadModel } from './nacionalidad.model';
import { CasoModel } from '../Tramites/caso.model';
import { RequirenteCasoModel } from '../Tramites/requirentecaso.model';
import { RequirenteNotaAvenimientoModel } from '../Tramites/requirentenotaavenimiento.model';
import { RequirenteExpedienteModel } from '../Tramites/requirenteexpediente.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { DetencionModel } from '../Tramites/detencion.model';
import { RequirenteAvenimientoModel } from '../Tramites/requirenteavenimiento.model';
import { RequirenteCitacionModel } from '../Tramites/requirentecitacion.model';
import { HistoricoSubmateriaModel } from '../Tramites/historicosubmateria.model';
import { HistoricoAbogadoPersonaModel } from '../Tramites/historicoabogadopersona.model';
import { CitaModel } from '../Agenda/cita.model';
import { RecursoCollection } from '../Recursos/recurso.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
import { DeclaracionJuradaCollection } from './declaracionjurada.collection';
import { RequirenteEnEsperaCollection } from './requirenteenespera.collection';
import { RequirenteOficinaCollection } from './requirenteoficina.collection';
import { EstadoCivilCollection } from './estadocivil.collection';
import { TipoIdentificacionCollection } from './tipoidentificacion.collection';
import { NacionalidadCollection } from './nacionalidad.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { RequirenteCasoCollection } from '../Tramites/requirentecaso.collection';
import { RequirenteNotaAvenimientoCollection } from '../Tramites/requirentenotaavenimiento.collection';
import { RequirenteExpedienteCollection } from '../Tramites/requirenteexpediente.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { DetencionCollection } from '../Tramites/detencion.collection';
import { RequirenteAvenimientoCollection } from '../Tramites/requirenteavenimiento.collection';
import { RequirenteCitacionCollection } from '../Tramites/requirentecitacion.collection';
import { HistoricoSubmateriaCollection } from '../Tramites/historicosubmateria.collection';
import { HistoricoAbogadoPersonaCollection } from '../Tramites/historicoabogadopersona.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class RequirenteCollection<E extends Requirente, M extends RequirenteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public testString(options?: HttpOptions): Observable<string> {
    var res = this._function<null, string>('SIU.TestString');
    res.segment.entitySet('tests');
    return res.call(null, 'property', options) as Observable<string>;
  }
  //#endregion
}