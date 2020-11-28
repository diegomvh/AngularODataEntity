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
import { IntervencionTipos } from '../SIU/Tramites/intervenciontipos.enum';
import { Etiqueta } from '../SIU/Metadatos/etiqueta.entity';
import { Recurso } from '../SIU/Recursos/recurso.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Institucion } from '../SIU/Lugares/institucion.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { EtiquetaModel } from '../SIU/Metadatos/etiqueta.model';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { InstitucionModel } from '../SIU/Lugares/institucion.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { EtiquetaCollection } from '../SIU/Metadatos/etiqueta.collection';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { InstitucionCollection } from '../SIU/Lugares/institucion.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
//#endregion

@Injectable()
export class IntervencionesService extends ODataEntityService<Intervencion> {
  constructor(protected client: ODataClient) {
    super(client, 'intervenciones', 'SIU.Tramites.Intervencion');
  }

  //#region ODataApi Model
  intervencionModel(): IntervencionModel<Intervencion> {
    return this.entity().asModel() as IntervencionModel<Intervencion>;
  }
  //#endregion
  //#region ODataApi Collection
  intervencionCollection(): IntervencionCollection<Intervencion, IntervencionModel<Intervencion>> {
    return this.entities().asCollection() as IntervencionCollection<Intervencion, IntervencionModel<Intervencion>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public caso(entity: EntityKey<Intervencion>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public etiquetas(entity: EntityKey<Intervencion>): ODataNavigationPropertyResource<Etiqueta> {
    return this.entity(entity).navigationProperty<Etiqueta>('etiquetas');
  }
  public institucion(entity: EntityKey<Intervencion>): ODataNavigationPropertyResource<Institucion> {
    return this.entity(entity).navigationProperty<Institucion>('institucion');
  }
  public oficina(entity: EntityKey<Intervencion>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public recursos(entity: EntityKey<Intervencion>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recursos');
  }
  //#endregion
}
