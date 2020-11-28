import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoModel } from '../Recursos/recurso.model';
import { Categoria } from '../Metadatos/categoria.entity';
import { RecursoUsuario } from '../Recursos/recursousuario.entity';
import { RecursoOficina } from '../Recursos/recursooficina.entity';
import { IdentificacionDocumento } from './identificaciondocumento.entity';
import { Documento } from './documento.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { CategoriaModel } from '../Metadatos/categoria.model';
import { RecursoUsuarioModel } from '../Recursos/recursousuario.model';
import { RecursoOficinaModel } from '../Recursos/recursooficina.model';
import { IdentificacionDocumentoModel } from './identificaciondocumento.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { CategoriaCollection } from '../Metadatos/categoria.collection';
import { RecursoUsuarioCollection } from '../Recursos/recursousuario.collection';
import { RecursoOficinaCollection } from '../Recursos/recursooficina.collection';
import { IdentificacionDocumentoCollection } from './identificaciondocumento.collection';
import { DocumentoCollection } from './documento.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
//#endregion

export class DocumentoModel<E extends Documento> extends RecursoModel<E> {
  //#region ODataApi Properties
  numero: number;
  anio: number;
  tipoId: number;
  autorId: number;
  oficinaId?: number;
  tipo?: CategoriaModel<Categoria>;
  autor?: EmpleadoModel<Empleado>;
  oficina?: OficinaModel<Oficina>;
  //#endregion
  //#region ODataApi Actions
  public finalizar(observacion: string, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{observacion: string}, Documento>('SIU.Finalizar');
    res.segment.entitySet('documentos');
    return res.call({observacion}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  public firmar(firmanteId: number, firmante: string, observacion: string, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{firmanteId: number, firmante: string, observacion: string}, Documento>('SIU.Firmar');
    res.segment.entitySet('documentos');
    return res.call({firmanteId, firmante, observacion}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  public presentar(fecha: Date, destinatarioId: number, destinatario: string, seguimiento: string, observacion: string, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{fecha: Date, destinatarioId: number, destinatario: string, seguimiento: string, observacion: string}, Documento>('SIU.Presentar');
    res.segment.entitySet('documentos');
    return res.call({fecha, destinatarioId, destinatario, seguimiento, observacion}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  public retirar(fecha: Date, identificador: string, observacion: string, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{fecha: Date, identificador: string, observacion: string}, Documento>('SIU.Retirar');
    res.segment.entitySet('documentos');
    return res.call({fecha, identificador, observacion}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  public corregir(observacion: string, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{observacion: string}, Documento>('SIU.Corregir');
    res.segment.entitySet('documentos');
    return res.call({observacion}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  public diligenciar(fecha: Date, observacion: string, options?: HttpOptions): Observable<DocumentoModel<Documento>> {
    var res = this._action<{fecha: Date, observacion: string}, Documento>('SIU.Diligenciar');
    res.segment.entitySet('documentos');
    return res.call({fecha, observacion}, 'model', options) as Observable<DocumentoModel<Documento>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}