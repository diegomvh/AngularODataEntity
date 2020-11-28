import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoCollection } from '../Recursos/recurso.collection';
import { Categoria } from '../Metadatos/categoria.entity';
import { IdentificacionDocumento } from './identificaciondocumento.entity';
import { Documento } from './documento.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { CategoriaModel } from '../Metadatos/categoria.model';
import { IdentificacionDocumentoModel } from './identificaciondocumento.model';
import { DocumentoModel } from './documento.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CategoriaCollection } from '../Metadatos/categoria.collection';
import { IdentificacionDocumentoCollection } from './identificaciondocumento.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export class DocumentoCollection<E extends Documento, M extends DocumentoModel<E>> extends RecursoCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public crearIdentificacion(tipoId: number, anio?: number, options?: HttpOptions): Observable<IdentificacionDocumentoModel<IdentificacionDocumento>> {
    var res = this._function<{tipoId: number, anio?: number}, IdentificacionDocumento>('SIU.CrearIdentificacion');
    res.segment.entitySet('documentos');
    return res.call({tipoId, anio}, 'model', options) as Observable<IdentificacionDocumentoModel<IdentificacionDocumento>>;
  }
  public existeIdentificacion(tipoId: number, numero: number, anio: number, options?: HttpOptions): Observable<boolean> {
    var res = this._function<{tipoId: number, numero: number, anio: number}, boolean>('SIU.ExisteIdentificacion');
    res.segment.entitySet('documentos');
    return res.call({tipoId, numero, anio}, 'property', options) as Observable<boolean>;
  }
  public visiblesPorUsuario(options?: HttpOptions): Observable<DocumentoCollection<Documento, DocumentoModel<Documento>>> {
    var res = this._function<null, Documento>('SIU.VisiblesPorUsuario');
    res.segment.entitySet('documentos');
    return res.call(null, 'collection', options) as Observable<DocumentoCollection<Documento, DocumentoModel<Documento>>>;
  }
  //#endregion
}