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
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { Provincia } from '../SIU/Lugares/provincia.entity';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { ProvinciaModel } from '../SIU/Lugares/provincia.model';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { ProvinciaCollection } from '../SIU/Lugares/provincia.collection';
//#endregion

@Injectable()
export class ProvinciasService extends ODataEntityService<Provincia> {
  constructor(protected client: ODataClient) {
    super(client, 'provincias', 'SIU.Lugares.Provincia');
  }

  //#region ODataApi Model
  provinciaModel(): ProvinciaModel<Provincia> {
    return this.entity().asModel() as ProvinciaModel<Provincia>;
  }
  //#endregion
  //#region ODataApi Collection
  provinciaCollection(): ProvinciaCollection<Provincia, ProvinciaModel<Provincia>> {
    return this.entities().asCollection() as ProvinciaCollection<Provincia, ProvinciaModel<Provincia>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidades(entity: EntityKey<Provincia>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidades');
  }
  //#endregion
}
