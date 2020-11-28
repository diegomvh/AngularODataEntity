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
import { Archivo } from '../SIU/Documentos/archivo.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { CategoriaModel } from '../SIU/Metadatos/categoria.model';
import { RecursoUsuarioModel } from '../SIU/Recursos/recursousuario.model';
import { RecursoOficinaModel } from '../SIU/Recursos/recursooficina.model';
import { ArchivoModel } from '../SIU/Documentos/archivo.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { CategoriaCollection } from '../SIU/Metadatos/categoria.collection';
import { RecursoUsuarioCollection } from '../SIU/Recursos/recursousuario.collection';
import { RecursoOficinaCollection } from '../SIU/Recursos/recursooficina.collection';
import { ArchivoCollection } from '../SIU/Documentos/archivo.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
//#endregion

@Injectable()
export class ArchivosService extends ODataEntityService<Archivo> {
  constructor(protected client: ODataClient) {
    super(client, 'archivos', 'SIU.Documentos.Archivo');
  }

  //#region ODataApi Model
  archivoModel(): ArchivoModel<Archivo> {
    return this.entity().asModel() as ArchivoModel<Archivo>;
  }
  //#endregion
  //#region ODataApi Collection
  archivoCollection(): ArchivoCollection<Archivo, ArchivoModel<Archivo>> {
    return this.entities().asCollection() as ArchivoCollection<Archivo, ArchivoModel<Archivo>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public escritos(entity: EntityKey<Archivo>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public intervenciones(entity: EntityKey<Archivo>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public oficina(entity: EntityKey<Archivo>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public oficinas(entity: EntityKey<Archivo>): ODataNavigationPropertyResource<RecursoOficina> {
    return this.entity(entity).navigationProperty<RecursoOficina>('oficinas');
  }
  public tipo(entity: EntityKey<Archivo>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('tipo');
  }
  public usuarios(entity: EntityKey<Archivo>): ODataNavigationPropertyResource<RecursoUsuario> {
    return this.entity(entity).navigationProperty<RecursoUsuario>('usuarios');
  }
  //#endregion
}
