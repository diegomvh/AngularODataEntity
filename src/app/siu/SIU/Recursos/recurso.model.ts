import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
import { RecursoPermisos } from './recursopermisos.enum';
import { Categoria } from '../Metadatos/categoria.entity';
import { RecursoEntry } from './recursoentry.entity';
import { RecursoMetadata } from './recursometadata.entity';
import { Recurso } from './recurso.entity';
import { RecursoUsuario } from './recursousuario.entity';
import { RecursoOficina } from './recursooficina.entity';
import { RecursoEstado } from './recursoestado.entity';
import { Plantilla } from '../Documentos/plantilla.entity';
import { Documento } from '../Documentos/documento.entity';
import { Archivo } from '../Documentos/archivo.entity';
import { SourceUrls } from '../Api/Infrastructure/Storage/Backend/sourceurls.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { CategoriaModel } from '../Metadatos/categoria.model';
import { RecursoEntryModel } from './recursoentry.model';
import { RecursoMetadataModel } from './recursometadata.model';
import { RecursoUsuarioModel } from './recursousuario.model';
import { RecursoOficinaModel } from './recursooficina.model';
import { RecursoEstadoModel } from './recursoestado.model';
import { PlantillaModel } from '../Documentos/plantilla.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { SourceUrlsModel } from '../Api/Infrastructure/Storage/Backend/sourceurls.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { CategoriaCollection } from '../Metadatos/categoria.collection';
import { RecursoEntryCollection } from './recursoentry.collection';
import { RecursoMetadataCollection } from './recursometadata.collection';
import { RecursoCollection } from './recurso.collection';
import { RecursoUsuarioCollection } from './recursousuario.collection';
import { RecursoOficinaCollection } from './recursooficina.collection';
import { RecursoEstadoCollection } from './recursoestado.collection';
import { PlantillaCollection } from '../Documentos/plantilla.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
import { SourceUrlsCollection } from '../Api/Infrastructure/Storage/Backend/sourceurls.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
//#endregion

export class RecursoModel<E extends Recurso> extends ODataModel<E> {
  //#region ODataApi Properties
  guid?: string;
  fecha: Date;
  nombre: string;
  descripcion?: string;
  url: string;
  directory: string;
  size: number;
  contentType?: string;
  opciones: RecursoOpciones;
  metadata?: RecursoMetadataModel<RecursoMetadata>;
  pKey?: string;
  gKey?: string;
  publico: boolean;
  entry?: RecursoEntryModel<RecursoEntry>;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  escritos?: EscritoCollection<Escrito, EscritoModel<Escrito>>;
  intervenciones?: IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  requirentes?: RequirenteCollection<Requirente, RequirenteModel<Requirente>>;
  usuarios?: RecursoUsuarioCollection<RecursoUsuario, RecursoUsuarioModel<RecursoUsuario>>;
  oficinas?: RecursoOficinaCollection<RecursoOficina, RecursoOficinaModel<RecursoOficina>>;
  estados?: RecursoEstadoCollection<RecursoEstado, RecursoEstadoModel<RecursoEstado>>;
  //#endregion
  //#region ODataApi Actions
  public publicar(options?: HttpOptions): Observable<RecursoModel<Recurso>> {
    var res = this._action<null, Recurso>('SIU.Publicar');
    res.segment.entitySet('recursos');
    return res.call(null, 'model', options) as Observable<RecursoModel<Recurso>>;
  }
  public despublicar(options?: HttpOptions): Observable<RecursoModel<Recurso>> {
    var res = this._action<null, Recurso>('SIU.Despublicar');
    res.segment.entitySet('recursos');
    return res.call(null, 'model', options) as Observable<RecursoModel<Recurso>>;
  }
  public toPlantilla(nombre: string, tipo: number, opciones: number, options?: HttpOptions): Observable<PlantillaModel<Plantilla>> {
    var res = this._action<{nombre: string, tipo: number, opciones: number}, Plantilla>('SIU.ToPlantilla');
    res.segment.entitySet('recursos');
    return res.call({nombre, tipo, opciones}, 'model', options) as Observable<PlantillaModel<Plantilla>>;
  }
  public toDocumento(tipo: number, numero: number, anio: number, opciones: number, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{tipo: number, numero: number, anio: number, opciones: number}, Documento>('SIU.ToDocumento');
    res.segment.entitySet('recursos');
    return res.call({tipo, numero, anio, opciones}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  public toArchivo(tipo: number, opciones: number, options?: HttpOptions): Observable<ArchivoModel<Archivo>> {
    var res = this._action<{tipo: number, opciones: number}, Archivo>('SIU.ToArchivo');
    res.segment.entitySet('recursos');
    return res.call({tipo, opciones}, 'model', options) as Observable<ArchivoModel<Archivo>>;
  }
  //#endregion
  //#region ODataApi Functions
  public resolveUrls(options?: HttpOptions): Observable<SourceUrlsModel<SourceUrls>> {
    var res = this._function<null, SourceUrls>('SIU.ResolveUrls');
    res.segment.entitySet('recursos');
    return res.call(null, 'model', options) as Observable<SourceUrlsModel<SourceUrls>>;
  }
  public sharedLink(perms: RecursoPermisos, hours: number, options?: HttpOptions): Observable<string> {
    var res = this._function<{perms: RecursoPermisos, hours: number}, string>('SIU.SharedLink');
    res.segment.entitySet('recursos');
    return res.call({perms, hours}, 'property', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApi Navigations
  public asArchivo(): ArchivoModel<Archivo> {
    return this._cast<any>('SIU.Documentos.Archivo').asModel(this.toEntity()) as ArchivoModel<Archivo>;
  }
  public asDocumento(): DocumentoModel<Documento> {
    return this._cast<any>('SIU.Documentos.Documento').asModel(this.toEntity()) as DocumentoModel<Documento>;
  }
  public asPlantilla(): PlantillaModel<Plantilla> {
    return this._cast<any>('SIU.Documentos.Plantilla').asModel(this.toEntity()) as PlantillaModel<Plantilla>;
  }
  //#endregion
}