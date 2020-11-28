import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoOpciones } from './recursoopciones.enum';
import { RecursoPermisos } from './recursopermisos.enum';
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
import { Requirente } from '../Personas/requirente.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { RecursoEntryModel } from './recursoentry.model';
import { RecursoMetadataModel } from './recursometadata.model';
import { RecursoModel } from './recurso.model';
import { RecursoUsuarioModel } from './recursousuario.model';
import { RecursoOficinaModel } from './recursooficina.model';
import { RecursoEstadoModel } from './recursoestado.model';
import { PlantillaModel } from '../Documentos/plantilla.model';
import { DocumentoModel } from '../Documentos/documento.model';
import { ArchivoModel } from '../Documentos/archivo.model';
import { SourceUrlsModel } from '../Api/Infrastructure/Storage/Backend/sourceurls.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { RecursoEntryCollection } from './recursoentry.collection';
import { RecursoMetadataCollection } from './recursometadata.collection';
import { RecursoUsuarioCollection } from './recursousuario.collection';
import { RecursoOficinaCollection } from './recursooficina.collection';
import { RecursoEstadoCollection } from './recursoestado.collection';
import { PlantillaCollection } from '../Documentos/plantilla.collection';
import { DocumentoCollection } from '../Documentos/documento.collection';
import { ArchivoCollection } from '../Documentos/archivo.collection';
import { SourceUrlsCollection } from '../Api/Infrastructure/Storage/Backend/sourceurls.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
//#endregion

export class RecursoCollection<E extends Recurso, M extends RecursoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public httpLink(url: string, nombre: string, opciones: number, ubicacion: string, options?: HttpOptions): Observable<RecursoModel<Recurso>> {
    var res = this._action<{url: string, nombre: string, opciones: number, ubicacion: string}, Recurso>('SIU.HttpLink');
    res.segment.entitySet('recursos');
    return res.call({url, nombre, opciones, ubicacion}, 'model', options) as Observable<RecursoModel<Recurso>>;
  }
  public skuaLink(url: string, nombre: string, descripcion: string, fecha: Date, opciones: number, tipo: string, ubicacion: string, options?: HttpOptions): Observable<RecursoModel<Recurso>> {
    var res = this._action<{url: string, nombre: string, descripcion: string, fecha: Date, opciones: number, tipo: string, ubicacion: string}, Recurso>('SIU.SkuaLink');
    res.segment.entitySet('recursos');
    return res.call({url, nombre, descripcion, fecha, opciones, tipo, ubicacion}, 'model', options) as Observable<RecursoModel<Recurso>>;
  }
  public serconexPenalLink(url: string, nombre: string, descripcion: string, fecha: number, opciones: number, ubicacion: string, contentType: string, options?: HttpOptions): Observable<RecursoModel<Recurso>> {
    var res = this._action<{url: string, nombre: string, descripcion: string, fecha: number, opciones: number, ubicacion: string, contentType: string}, Recurso>('SIU.SerconexPenalLink');
    res.segment.entitySet('recursos');
    return res.call({url, nombre, descripcion, fecha, opciones, ubicacion, contentType}, 'model', options) as Observable<RecursoModel<Recurso>>;
  }
  //#endregion
  //#region ODataApi Functions
  public getByKey(key: string, options?: HttpOptions): Observable<RecursoModel<Recurso>> {
    var res = this._function<{key: string}, Recurso>('SIU.GetByKey');
    res.segment.entitySet('recursos');
    return res.call({key}, 'model', options) as Observable<RecursoModel<Recurso>>;
  }
  public searchEntries(text: string, directory: string, opciones?: number, options?: HttpOptions): Observable<RecursoEntryCollection<RecursoEntry, RecursoEntryModel<RecursoEntry>>> {
    var res = this._function<{text: string, directory: string, opciones?: number}, RecursoEntry>('SIU.SearchEntries');
    res.segment.entitySet('recursos');
    return res.call({text, directory, opciones}, 'collection', options) as Observable<RecursoEntryCollection<RecursoEntry, RecursoEntryModel<RecursoEntry>>>;
  }
  public listEntries(directory: string, onlyDir?: boolean, opciones?: number, options?: HttpOptions): Observable<RecursoEntryCollection<RecursoEntry, RecursoEntryModel<RecursoEntry>>> {
    var res = this._function<{directory: string, onlyDir?: boolean, opciones?: number}, RecursoEntry>('SIU.ListEntries');
    res.segment.entitySet('recursos');
    return res.call({directory, onlyDir, opciones}, 'collection', options) as Observable<RecursoEntryCollection<RecursoEntry, RecursoEntryModel<RecursoEntry>>>;
  }
  public buildEntry(url: string, options?: HttpOptions): Observable<RecursoEntryModel<RecursoEntry>> {
    var res = this._function<{url: string}, RecursoEntry>('SIU.BuildEntry');
    res.segment.entitySet('recursos');
    return res.call({url}, 'model', options) as Observable<RecursoEntryModel<RecursoEntry>>;
  }
  //#endregion
}