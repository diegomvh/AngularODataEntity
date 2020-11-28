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
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { RequirenteOficina } from '../SIU/Personas/requirenteoficina.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { RequirenteOficinaModel } from '../SIU/Personas/requirenteoficina.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { RequirenteOficinaCollection } from '../SIU/Personas/requirenteoficina.collection';
//#endregion

@Injectable()
export class RequirentesOficinasService extends ODataEntityService<RequirenteOficina> {
  constructor(protected client: ODataClient) {
    super(client, 'requirentesOficinas', 'SIU.Personas.RequirenteOficina');
  }

  //#region ODataApi Model
  requirenteOficinaModel(): RequirenteOficinaModel<RequirenteOficina> {
    return this.entity().asModel() as RequirenteOficinaModel<RequirenteOficina>;
  }
  //#endregion
  //#region ODataApi Collection
  requirenteOficinaCollection(): RequirenteOficinaCollection<RequirenteOficina, RequirenteOficinaModel<RequirenteOficina>> {
    return this.entities().asCollection() as RequirenteOficinaCollection<RequirenteOficina, RequirenteOficinaModel<RequirenteOficina>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidad(entity: EntityKey<RequirenteOficina>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  public oficina(entity: EntityKey<RequirenteOficina>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  //#endregion
}
