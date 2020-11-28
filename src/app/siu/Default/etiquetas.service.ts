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
import { EtiquetaOpciones } from '../SIU/Metadatos/etiquetaopciones.enum';
import { Categoria } from '../SIU/Metadatos/categoria.entity';
import { Etiqueta } from '../SIU/Metadatos/etiqueta.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { CategoriaModel } from '../SIU/Metadatos/categoria.model';
import { EtiquetaModel } from '../SIU/Metadatos/etiqueta.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { CategoriaCollection } from '../SIU/Metadatos/categoria.collection';
import { EtiquetaCollection } from '../SIU/Metadatos/etiqueta.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
//#endregion

@Injectable()
export class EtiquetasService extends ODataEntityService<Etiqueta> {
  constructor(protected client: ODataClient) {
    super(client, 'etiquetas', 'SIU.Metadatos.Etiqueta');
  }

  //#region ODataApi Model
  etiquetaModel(): EtiquetaModel<Etiqueta> {
    return this.entity().asModel() as EtiquetaModel<Etiqueta>;
  }
  //#endregion
  //#region ODataApi Collection
  etiquetaCollection(): EtiquetaCollection<Etiqueta, EtiquetaModel<Etiqueta>> {
    return this.entities().asCollection() as EtiquetaCollection<Etiqueta, EtiquetaModel<Etiqueta>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public casos(entity: EntityKey<Etiqueta>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('casos');
  }
  public categorias(entity: EntityKey<Etiqueta>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('categorias');
  }
  public intervenciones(entity: EntityKey<Etiqueta>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  //#endregion
}
