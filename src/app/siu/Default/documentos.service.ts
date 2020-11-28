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
import { Categoria } from '../SIU/Metadatos/categoria.entity';
import { RecursoUsuario } from '../SIU/Recursos/recursousuario.entity';
import { RecursoOficina } from '../SIU/Recursos/recursooficina.entity';
import { IdentificacionDocumento } from '../SIU/Documentos/identificaciondocumento.entity';
import { Documento } from '../SIU/Documentos/documento.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { CategoriaModel } from '../SIU/Metadatos/categoria.model';
import { RecursoUsuarioModel } from '../SIU/Recursos/recursousuario.model';
import { RecursoOficinaModel } from '../SIU/Recursos/recursooficina.model';
import { IdentificacionDocumentoModel } from '../SIU/Documentos/identificaciondocumento.model';
import { DocumentoModel } from '../SIU/Documentos/documento.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { CategoriaCollection } from '../SIU/Metadatos/categoria.collection';
import { RecursoUsuarioCollection } from '../SIU/Recursos/recursousuario.collection';
import { RecursoOficinaCollection } from '../SIU/Recursos/recursooficina.collection';
import { IdentificacionDocumentoCollection } from '../SIU/Documentos/identificaciondocumento.collection';
import { DocumentoCollection } from '../SIU/Documentos/documento.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
//#endregion

@Injectable()
export class DocumentosService extends ODataEntityService<Documento> {
  constructor(protected client: ODataClient) {
    super(client, 'documentos', 'SIU.Documentos.Documento');
  }

  //#region ODataApi Model
  documentoModel(): DocumentoModel<Documento> {
    return this.entity().asModel() as DocumentoModel<Documento>;
  }
  //#endregion
  //#region ODataApi Collection
  documentoCollection(): DocumentoCollection<Documento, DocumentoModel<Documento>> {
    return this.entities().asCollection() as DocumentoCollection<Documento, DocumentoModel<Documento>>;
  }
  //#endregion
  //#region ODataApi Actions
  public finalizar(entity: EntityKey<Documento>): ODataActionResource<{observacion: string}, Documento> {
    const resource = this.entity(entity).action<{observacion: string}, Documento>('SIU.Finalizar');
    return resource;
  }
  public firmar(entity: EntityKey<Documento>): ODataActionResource<{firmanteId: number, firmante: string, observacion: string}, Documento> {
    const resource = this.entity(entity).action<{firmanteId: number, firmante: string, observacion: string}, Documento>('SIU.Firmar');
    return resource;
  }
  public presentar(entity: EntityKey<Documento>): ODataActionResource<{fecha: Date, destinatarioId: number, destinatario: string, seguimiento: string, observacion: string}, Documento> {
    const resource = this.entity(entity).action<{fecha: Date, destinatarioId: number, destinatario: string, seguimiento: string, observacion: string}, Documento>('SIU.Presentar');
    return resource;
  }
  public retirar(entity: EntityKey<Documento>): ODataActionResource<{fecha: Date, identificador: string, observacion: string}, Documento> {
    const resource = this.entity(entity).action<{fecha: Date, identificador: string, observacion: string}, Documento>('SIU.Retirar');
    return resource;
  }
  public corregir(entity: EntityKey<Documento>): ODataActionResource<{observacion: string}, Documento> {
    const resource = this.entity(entity).action<{observacion: string}, Documento>('SIU.Corregir');
    return resource;
  }
  public diligenciar(entity: EntityKey<Documento>): ODataActionResource<{fecha: Date, observacion: string}, Documento> {
    const resource = this.entity(entity).action<{fecha: Date, observacion: string}, Documento>('SIU.Diligenciar');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public crearIdentificacion(): ODataFunctionResource<{tipoId: number, anio?: number}, IdentificacionDocumento> {
    const resource = this.entities().function<{tipoId: number, anio?: number}, IdentificacionDocumento>('SIU.CrearIdentificacion');
    return resource;
  }
  public existeIdentificacion(): ODataFunctionResource<{tipoId: number, numero: number, anio: number}, boolean> {
    const resource = this.entities().function<{tipoId: number, numero: number, anio: number}, boolean>('SIU.ExisteIdentificacion');
    return resource;
  }
  public visiblesPorUsuario(): ODataFunctionResource<null, Documento> {
    const resource = this.entities().function<null, Documento>('SIU.VisiblesPorUsuario');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public escritos(entity: EntityKey<Documento>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public intervenciones(entity: EntityKey<Documento>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public oficina(entity: EntityKey<Documento>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public oficinas(entity: EntityKey<Documento>): ODataNavigationPropertyResource<RecursoOficina> {
    return this.entity(entity).navigationProperty<RecursoOficina>('oficinas');
  }
  public tipo(entity: EntityKey<Documento>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('tipo');
  }
  public usuarios(entity: EntityKey<Documento>): ODataNavigationPropertyResource<RecursoUsuario> {
    return this.entity(entity).navigationProperty<RecursoUsuario>('usuarios');
  }
  //#endregion
}
