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
import { Circunscripcion } from '../SIU/Lugares/circunscripcion.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { CircunscripcionModel } from '../SIU/Lugares/circunscripcion.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { CircunscripcionCollection } from '../SIU/Lugares/circunscripcion.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
//#endregion

@Injectable()
export class CircunscripcionesService extends ODataEntityService<Circunscripcion> {
  constructor(protected client: ODataClient) {
    super(client, 'circunscripciones', 'SIU.Lugares.Circunscripcion');
  }

  //#region ODataApi Model
  circunscripcionModel(): CircunscripcionModel<Circunscripcion> {
    return this.entity().asModel() as CircunscripcionModel<Circunscripcion>;
  }
  //#endregion
  //#region ODataApi Collection
  circunscripcionCollection(): CircunscripcionCollection<Circunscripcion, CircunscripcionModel<Circunscripcion>> {
    return this.entities().asCollection() as CircunscripcionCollection<Circunscripcion, CircunscripcionModel<Circunscripcion>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidades(entity: EntityKey<Circunscripcion>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidades');
  }
  //#endregion
}
