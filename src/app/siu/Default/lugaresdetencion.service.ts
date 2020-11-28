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
import { LugarDetencion } from '../SIU/Lugares/lugardetencion.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { LugarDetencionModel } from '../SIU/Lugares/lugardetencion.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { LugarDetencionCollection } from '../SIU/Lugares/lugardetencion.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
//#endregion

@Injectable()
export class LugaresDetencionService extends ODataEntityService<LugarDetencion> {
  constructor(protected client: ODataClient) {
    super(client, 'lugaresDetencion', 'SIU.Lugares.LugarDetencion');
  }

  //#region ODataApi Model
  lugarDetencionModel(): LugarDetencionModel<LugarDetencion> {
    return this.entity().asModel() as LugarDetencionModel<LugarDetencion>;
  }
  //#endregion
  //#region ODataApi Collection
  lugarDetencionCollection(): LugarDetencionCollection<LugarDetencion, LugarDetencionModel<LugarDetencion>> {
    return this.entities().asCollection() as LugarDetencionCollection<LugarDetencion, LugarDetencionModel<LugarDetencion>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidad(entity: EntityKey<LugarDetencion>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  //#endregion
}
