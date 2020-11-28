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
import { TipoIdentificacion } from '../SIU/Personas/tipoidentificacion.entity';
import { TipoIdentificacionModel } from '../SIU/Personas/tipoidentificacion.model';
import { TipoIdentificacionCollection } from '../SIU/Personas/tipoidentificacion.collection';
//#endregion

@Injectable()
export class TiposIdentificacionService extends ODataEntityService<TipoIdentificacion> {
  constructor(protected client: ODataClient) {
    super(client, 'tiposIdentificacion', 'SIU.Personas.TipoIdentificacion');
  }

  //#region ODataApi Model
  tipoIdentificacionModel(): TipoIdentificacionModel<TipoIdentificacion> {
    return this.entity().asModel() as TipoIdentificacionModel<TipoIdentificacion>;
  }
  //#endregion
  //#region ODataApi Collection
  tipoIdentificacionCollection(): TipoIdentificacionCollection<TipoIdentificacion, TipoIdentificacionModel<TipoIdentificacion>> {
    return this.entities().asCollection() as TipoIdentificacionCollection<TipoIdentificacion, TipoIdentificacionModel<TipoIdentificacion>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
