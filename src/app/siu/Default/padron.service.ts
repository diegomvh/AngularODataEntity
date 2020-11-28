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
import { Padron } from '../SIU/Padron/padron.entity';
import { PadronLocalidad } from '../SIU/Padron/padronlocalidad.entity';
import { PadronModel } from '../SIU/Padron/padron.model';
import { PadronLocalidadModel } from '../SIU/Padron/padronlocalidad.model';
import { PadronCollection } from '../SIU/Padron/padron.collection';
import { PadronLocalidadCollection } from '../SIU/Padron/padronlocalidad.collection';
//#endregion

@Injectable()
export class PadronService extends ODataEntityService<Padron> {
  constructor(protected client: ODataClient) {
    super(client, 'padron', 'SIU.Padron.Padron');
  }

  //#region ODataApi Model
  padronModel(): PadronModel<Padron> {
    return this.entity().asModel() as PadronModel<Padron>;
  }
  //#endregion
  //#region ODataApi Collection
  padronCollection(): PadronCollection<Padron, PadronModel<Padron>> {
    return this.entities().asCollection() as PadronCollection<Padron, PadronModel<Padron>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidad(entity: EntityKey<Padron>): ODataNavigationPropertyResource<PadronLocalidad> {
    return this.entity(entity).navigationProperty<PadronLocalidad>('localidad');
  }
  //#endregion
}
