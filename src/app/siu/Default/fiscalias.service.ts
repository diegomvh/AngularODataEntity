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
import { Fiscalia } from '../SIU/Lugares/fiscalia.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { FiscaliaModel } from '../SIU/Lugares/fiscalia.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { FiscaliaCollection } from '../SIU/Lugares/fiscalia.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
//#endregion

@Injectable()
export class FiscaliasService extends ODataEntityService<Fiscalia> {
  constructor(protected client: ODataClient) {
    super(client, 'fiscalias', 'SIU.Lugares.Fiscalia');
  }

  //#region ODataApi Model
  fiscaliaModel(): FiscaliaModel<Fiscalia> {
    return this.entity().asModel() as FiscaliaModel<Fiscalia>;
  }
  //#endregion
  //#region ODataApi Collection
  fiscaliaCollection(): FiscaliaCollection<Fiscalia, FiscaliaModel<Fiscalia>> {
    return this.entities().asCollection() as FiscaliaCollection<Fiscalia, FiscaliaModel<Fiscalia>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidad(entity: EntityKey<Fiscalia>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  //#endregion
}
