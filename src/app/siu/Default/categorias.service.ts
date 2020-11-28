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
import { CategoriaOpciones } from '../SIU/Metadatos/categoriaopciones.enum';
import { Categoria } from '../SIU/Metadatos/categoria.entity';
import { Etiqueta } from '../SIU/Metadatos/etiqueta.entity';
import { Plantilla } from '../SIU/Documentos/plantilla.entity';
import { Documento } from '../SIU/Documentos/documento.entity';
import { Archivo } from '../SIU/Documentos/archivo.entity';
import { CategoriaModel } from '../SIU/Metadatos/categoria.model';
import { EtiquetaModel } from '../SIU/Metadatos/etiqueta.model';
import { PlantillaModel } from '../SIU/Documentos/plantilla.model';
import { DocumentoModel } from '../SIU/Documentos/documento.model';
import { ArchivoModel } from '../SIU/Documentos/archivo.model';
import { CategoriaCollection } from '../SIU/Metadatos/categoria.collection';
import { EtiquetaCollection } from '../SIU/Metadatos/etiqueta.collection';
import { PlantillaCollection } from '../SIU/Documentos/plantilla.collection';
import { DocumentoCollection } from '../SIU/Documentos/documento.collection';
import { ArchivoCollection } from '../SIU/Documentos/archivo.collection';
//#endregion

@Injectable()
export class CategoriasService extends ODataEntityService<Categoria> {
  constructor(protected client: ODataClient) {
    super(client, 'categorias', 'SIU.Metadatos.Categoria');
  }

  //#region ODataApi Model
  categoriaModel(): CategoriaModel<Categoria> {
    return this.entity().asModel() as CategoriaModel<Categoria>;
  }
  //#endregion
  //#region ODataApi Collection
  categoriaCollection(): CategoriaCollection<Categoria, CategoriaModel<Categoria>> {
    return this.entities().asCollection() as CategoriaCollection<Categoria, CategoriaModel<Categoria>>;
  }
  //#endregion
  //#region ODataApi Actions
  public rebuild(): ODataActionResource<null, any> {
    const resource = this.entities().action<null, any>('SIU.Rebuild');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public navegar(entity: EntityKey<Categoria>): ODataFunctionResource<{chunks: string}, Categoria> {
    const resource = this.entity(entity).function<{chunks: string}, Categoria>('SIU.Navegar');
    return resource;
  }
  public navegarOficina(): ODataFunctionResource<{oficinaId: number, chunks: string}, Categoria> {
    const resource = this.entities().function<{oficinaId: number, chunks: string}, Categoria>('SIU.NavegarOficina');
    return resource;
  }
  public categoriaDeCircunscripcion(): ODataFunctionResource<{circunscripcionId: number}, Categoria> {
    const resource = this.entities().function<{circunscripcionId: number}, Categoria>('SIU.CategoriaDeCircunscripcion');
    return resource;
  }
  public categoriaDeOficina(): ODataFunctionResource<{oficinaId: number}, Categoria> {
    const resource = this.entities().function<{oficinaId: number}, Categoria>('SIU.CategoriaDeOficina');
    return resource;
  }
  public directory(entity: EntityKey<Categoria>): ODataFunctionResource<{stopId: number, withStop: boolean}, string> {
    const resource = this.entity(entity).function<{stopId: number, withStop: boolean}, string>('SIU.Directory');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public ancestros(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('ancestros');
  }
  public archivos(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Archivo> {
    return this.entity(entity).navigationProperty<Archivo>('archivos');
  }
  public children(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('children');
  }
  public descendientes(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('descendientes');
  }
  public documentos(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Documento> {
    return this.entity(entity).navigationProperty<Documento>('documentos');
  }
  public etiquetas(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Etiqueta> {
    return this.entity(entity).navigationProperty<Etiqueta>('etiquetas');
  }
  public familia(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('familia');
  }
  public parent(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('parent');
  }
  public plantillas(entity: EntityKey<Categoria>): ODataNavigationPropertyResource<Plantilla> {
    return this.entity(entity).navigationProperty<Plantilla>('plantillas');
  }
  //#endregion
}
