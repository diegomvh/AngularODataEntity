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
import { RecursoOpciones } from '../SIU/Recursos/recursoopciones.enum';
import { RecursoPermisos } from '../SIU/Recursos/recursopermisos.enum';
import { Categoria } from '../SIU/Metadatos/categoria.entity';
import { RecursoEntry } from '../SIU/Recursos/recursoentry.entity';
import { RecursoMetadata } from '../SIU/Recursos/recursometadata.entity';
import { Recurso } from '../SIU/Recursos/recurso.entity';
import { RecursoUsuario } from '../SIU/Recursos/recursousuario.entity';
import { RecursoOficina } from '../SIU/Recursos/recursooficina.entity';
import { Plantilla } from '../SIU/Documentos/plantilla.entity';
import { Documento } from '../SIU/Documentos/documento.entity';
import { Archivo } from '../SIU/Documentos/archivo.entity';
import { SourceUrls } from '../SIU/Api/Infrastructure/Storage/Backend/sourceurls.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { CategoriaModel } from '../SIU/Metadatos/categoria.model';
import { RecursoEntryModel } from '../SIU/Recursos/recursoentry.model';
import { RecursoMetadataModel } from '../SIU/Recursos/recursometadata.model';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { RecursoUsuarioModel } from '../SIU/Recursos/recursousuario.model';
import { RecursoOficinaModel } from '../SIU/Recursos/recursooficina.model';
import { PlantillaModel } from '../SIU/Documentos/plantilla.model';
import { DocumentoModel } from '../SIU/Documentos/documento.model';
import { ArchivoModel } from '../SIU/Documentos/archivo.model';
import { SourceUrlsModel } from '../SIU/Api/Infrastructure/Storage/Backend/sourceurls.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { CategoriaCollection } from '../SIU/Metadatos/categoria.collection';
import { RecursoEntryCollection } from '../SIU/Recursos/recursoentry.collection';
import { RecursoMetadataCollection } from '../SIU/Recursos/recursometadata.collection';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { RecursoUsuarioCollection } from '../SIU/Recursos/recursousuario.collection';
import { RecursoOficinaCollection } from '../SIU/Recursos/recursooficina.collection';
import { PlantillaCollection } from '../SIU/Documentos/plantilla.collection';
import { DocumentoCollection } from '../SIU/Documentos/documento.collection';
import { ArchivoCollection } from '../SIU/Documentos/archivo.collection';
import { SourceUrlsCollection } from '../SIU/Api/Infrastructure/Storage/Backend/sourceurls.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
//#endregion

@Injectable()
export class RecursosService extends ODataEntityService<Recurso> {
  constructor(protected client: ODataClient) {
    super(client, 'recursos', 'SIU.Recursos.Recurso');
  }

  //#region ODataApi Model
  recursoModel(): RecursoModel<Recurso> {
    return this.entity().asModel() as RecursoModel<Recurso>;
  }
  //#endregion
  //#region ODataApi Collection
  recursoCollection(): RecursoCollection<Recurso, RecursoModel<Recurso>> {
    return this.entities().asCollection() as RecursoCollection<Recurso, RecursoModel<Recurso>>;
  }
  //#endregion
  //#region ODataApi Actions
  public httpLink(): ODataActionResource<{url: string, nombre: string, opciones: number, ubicacion: string}, Recurso> {
    const resource = this.entities().action<{url: string, nombre: string, opciones: number, ubicacion: string}, Recurso>('SIU.HttpLink');
    return resource;
  }
  public skuaLink(): ODataActionResource<{url: string, nombre: string, descripcion: string, fecha: Date, opciones: number, tipo: string, ubicacion: string}, Recurso> {
    const resource = this.entities().action<{url: string, nombre: string, descripcion: string, fecha: Date, opciones: number, tipo: string, ubicacion: string}, Recurso>('SIU.SkuaLink');
    return resource;
  }
  public serconexPenalLink(): ODataActionResource<{url: string, nombre: string, descripcion: string, fecha: number, opciones: number, ubicacion: string, contentType: string}, Recurso> {
    const resource = this.entities().action<{url: string, nombre: string, descripcion: string, fecha: number, opciones: number, ubicacion: string, contentType: string}, Recurso>('SIU.SerconexPenalLink');
    return resource;
  }
  public publicar(entity: EntityKey<Recurso>): ODataActionResource<null, Recurso> {
    const resource = this.entity(entity).action<null, Recurso>('SIU.Publicar');
    return resource;
  }
  public despublicar(entity: EntityKey<Recurso>): ODataActionResource<null, Recurso> {
    const resource = this.entity(entity).action<null, Recurso>('SIU.Despublicar');
    return resource;
  }
  public toPlantilla(entity: EntityKey<Recurso>): ODataActionResource<{nombre: string, tipo: number, opciones: number}, Plantilla> {
    const resource = this.entity(entity).action<{nombre: string, tipo: number, opciones: number}, Plantilla>('SIU.ToPlantilla');
    return resource;
  }
  public toDocumento(entity: EntityKey<Recurso>): ODataActionResource<{tipo: number, numero: number, anio: number, opciones: number}, Documento> {
    const resource = this.entity(entity).action<{tipo: number, numero: number, anio: number, opciones: number}, Documento>('SIU.ToDocumento');
    return resource;
  }
  public toArchivo(entity: EntityKey<Recurso>): ODataActionResource<{tipo: number, opciones: number}, Archivo> {
    const resource = this.entity(entity).action<{tipo: number, opciones: number}, Archivo>('SIU.ToArchivo');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getByKey(): ODataFunctionResource<{key: string}, Recurso> {
    const resource = this.entities().function<{key: string}, Recurso>('SIU.GetByKey');
    return resource;
  }
  public searchEntries(): ODataFunctionResource<{text: string, directory: string, opciones?: number}, RecursoEntry> {
    const resource = this.entities().function<{text: string, directory: string, opciones?: number}, RecursoEntry>('SIU.SearchEntries');
    return resource;
  }
  public listEntries(): ODataFunctionResource<{directory: string, onlyDir?: boolean, opciones?: number}, RecursoEntry> {
    const resource = this.entities().function<{directory: string, onlyDir?: boolean, opciones?: number}, RecursoEntry>('SIU.ListEntries');
    return resource;
  }
  public resolveUrls(entity: EntityKey<Recurso>): ODataFunctionResource<null, SourceUrls> {
    const resource = this.entity(entity).function<null, SourceUrls>('SIU.ResolveUrls');
    return resource;
  }
  public buildEntry(): ODataFunctionResource<{url: string}, RecursoEntry> {
    const resource = this.entities().function<{url: string}, RecursoEntry>('SIU.BuildEntry');
    return resource;
  }
  public sharedLink(entity: EntityKey<Recurso>): ODataFunctionResource<{perms: RecursoPermisos, hours: number}, string> {
    const resource = this.entity(entity).function<{perms: RecursoPermisos, hours: number}, string>('SIU.SharedLink');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public escritos(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public intervenciones(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public oficinas(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<RecursoOficina> {
    return this.entity(entity).navigationProperty<RecursoOficina>('oficinas');
  }
  public asArchivo(): ODataEntitySetResource<Archivo> {
    return this.entities().cast<Archivo>('SIU.Documentos.Archivo');
  }
  public asArchivoOficina(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Archivo> {
    return this.asArchivo().entity(entity).navigationProperty<Archivo>('oficina');
  }
  public asArchivoTipo(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Categoria> {
    return this.asArchivo().entity(entity).navigationProperty<Categoria>('tipo');
  }
  public asDocumento(): ODataEntitySetResource<Documento> {
    return this.entities().cast<Documento>('SIU.Documentos.Documento');
  }
  public asDocumentoOficina(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Documento> {
    return this.asDocumento().entity(entity).navigationProperty<Documento>('oficina');
  }
  public asDocumentoTipo(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Categoria> {
    return this.asDocumento().entity(entity).navigationProperty<Categoria>('tipo');
  }
  public asPlantilla(): ODataEntitySetResource<Plantilla> {
    return this.entities().cast<Plantilla>('SIU.Documentos.Plantilla');
  }
  public asPlantillaOficina(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Plantilla> {
    return this.asPlantilla().entity(entity).navigationProperty<Plantilla>('oficina');
  }
  public asPlantillaTipo(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<Categoria> {
    return this.asPlantilla().entity(entity).navigationProperty<Categoria>('tipo');
  }
  public usuarios(entity: EntityKey<Recurso>): ODataNavigationPropertyResource<RecursoUsuario> {
    return this.entity(entity).navigationProperty<RecursoUsuario>('usuarios');
  }
  //#endregion
}
