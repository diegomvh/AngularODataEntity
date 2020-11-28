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
import { Nacionalidad } from '../SIU/Personas/nacionalidad.entity';
import { NacionalidadModel } from '../SIU/Personas/nacionalidad.model';
import { NacionalidadCollection } from '../SIU/Personas/nacionalidad.collection';
//#endregion

@Injectable()
export class NacionalidadesService extends ODataEntityService<Nacionalidad> {
  constructor(protected client: ODataClient) {
    super(client, 'nacionalidades', 'SIU.Personas.Nacionalidad');
  }

  //#region ODataApi Model
  nacionalidadModel(): NacionalidadModel<Nacionalidad> {
    return this.entity().asModel() as NacionalidadModel<Nacionalidad>;
  }
  //#endregion
  //#region ODataApi Collection
  nacionalidadCollection(): NacionalidadCollection<Nacionalidad, NacionalidadModel<Nacionalidad>> {
    return this.entities().asCollection() as NacionalidadCollection<Nacionalidad, NacionalidadModel<Nacionalidad>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
