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
import { Plantilla } from '../SIU/Documentos/plantilla.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { Escrito } from '../SIU/Tramites/escrito.entity';
import { CategoriaModel } from '../SIU/Metadatos/categoria.model';
import { RecursoUsuarioModel } from '../SIU/Recursos/recursousuario.model';
import { RecursoOficinaModel } from '../SIU/Recursos/recursooficina.model';
import { PlantillaModel } from '../SIU/Documentos/plantilla.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { EscritoModel } from '../SIU/Tramites/escrito.model';
import { CategoriaCollection } from '../SIU/Metadatos/categoria.collection';
import { RecursoUsuarioCollection } from '../SIU/Recursos/recursousuario.collection';
import { RecursoOficinaCollection } from '../SIU/Recursos/recursooficina.collection';
import { PlantillaCollection } from '../SIU/Documentos/plantilla.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { EscritoCollection } from '../SIU/Tramites/escrito.collection';
//#endregion

@Injectable()
export class PlantillasService extends ODataEntityService<Plantilla> {
  constructor(protected client: ODataClient) {
    super(client, 'plantillas', 'SIU.Documentos.Plantilla');
  }

  //#region ODataApi Model
  plantillaModel(): PlantillaModel<Plantilla> {
    return this.entity().asModel() as PlantillaModel<Plantilla>;
  }
  //#endregion
  //#region ODataApi Collection
  plantillaCollection(): PlantillaCollection<Plantilla, PlantillaModel<Plantilla>> {
    return this.entities().asCollection() as PlantillaCollection<Plantilla, PlantillaModel<Plantilla>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public escritos(entity: EntityKey<Plantilla>): ODataNavigationPropertyResource<Escrito> {
    return this.entity(entity).navigationProperty<Escrito>('escritos');
  }
  public intervenciones(entity: EntityKey<Plantilla>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public oficina(entity: EntityKey<Plantilla>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public oficinas(entity: EntityKey<Plantilla>): ODataNavigationPropertyResource<RecursoOficina> {
    return this.entity(entity).navigationProperty<RecursoOficina>('oficinas');
  }
  public tipo(entity: EntityKey<Plantilla>): ODataNavigationPropertyResource<Categoria> {
    return this.entity(entity).navigationProperty<Categoria>('tipo');
  }
  public usuarios(entity: EntityKey<Plantilla>): ODataNavigationPropertyResource<RecursoUsuario> {
    return this.entity(entity).navigationProperty<RecursoUsuario>('usuarios');
  }
  //#endregion
}
