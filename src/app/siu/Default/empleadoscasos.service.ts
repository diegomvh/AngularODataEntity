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
import { Caso } from '../SIU/Tramites/caso.entity';
import { EmpleadoCaso } from '../SIU/Tramites/empleadocaso.entity';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { EmpleadoCasoModel } from '../SIU/Tramites/empleadocaso.model';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { EmpleadoCasoCollection } from '../SIU/Tramites/empleadocaso.collection';
//#endregion

@Injectable()
export class EmpleadosCasosService extends ODataEntityService<EmpleadoCaso> {
  constructor(protected client: ODataClient) {
    super(client, 'empleadosCasos', 'SIU.Tramites.EmpleadoCaso');
  }

  //#region ODataApi Model
  empleadoCasoModel(): EmpleadoCasoModel<EmpleadoCaso> {
    return this.entity().asModel() as EmpleadoCasoModel<EmpleadoCaso>;
  }
  //#endregion
  //#region ODataApi Collection
  empleadoCasoCollection(): EmpleadoCasoCollection<EmpleadoCaso, EmpleadoCasoModel<EmpleadoCaso>> {
    return this.entities().asCollection() as EmpleadoCasoCollection<EmpleadoCaso, EmpleadoCasoModel<EmpleadoCaso>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public caso(entity: EntityKey<EmpleadoCaso>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  //#endregion
}
