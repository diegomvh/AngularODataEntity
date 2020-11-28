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
import { CasoPenal } from '../SIU/Tramites/casopenal.entity';
import { Detencion } from '../SIU/Tramites/detencion.entity';
import { LugarDetencionModel } from '../SIU/Lugares/lugardetencion.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { CasoPenalModel } from '../SIU/Tramites/casopenal.model';
import { DetencionModel } from '../SIU/Tramites/detencion.model';
import { LugarDetencionCollection } from '../SIU/Lugares/lugardetencion.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { CasoPenalCollection } from '../SIU/Tramites/casopenal.collection';
import { DetencionCollection } from '../SIU/Tramites/detencion.collection';
//#endregion

@Injectable()
export class DetencionesService extends ODataEntityService<Detencion> {
  constructor(protected client: ODataClient) {
    super(client, 'detenciones', 'SIU.Tramites.Detencion');
  }

  //#region ODataApi Model
  detencionModel(): DetencionModel<Detencion> {
    return this.entity().asModel() as DetencionModel<Detencion>;
  }
  //#endregion
  //#region ODataApi Collection
  detencionCollection(): DetencionCollection<Detencion, DetencionModel<Detencion>> {
    return this.entities().asCollection() as DetencionCollection<Detencion, DetencionModel<Detencion>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public casoPenal(entity: EntityKey<Detencion>): ODataNavigationPropertyResource<CasoPenal> {
    return this.entity(entity).navigationProperty<CasoPenal>('casoPenal');
  }
  public localidad(entity: EntityKey<Detencion>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  public lugarDetencion(entity: EntityKey<Detencion>): ODataNavigationPropertyResource<LugarDetencion> {
    return this.entity(entity).navigationProperty<LugarDetencion>('lugarDetencion');
  }
  //#endregion
}
