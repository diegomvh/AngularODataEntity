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
import { CalidadRequirente } from '../SIU/Personas/calidadrequirente.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { CalidadRequirenteModel } from '../SIU/Personas/calidadrequirente.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { CalidadRequirenteCollection } from '../SIU/Personas/calidadrequirente.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
//#endregion

@Injectable()
export class CalidadesRequirenteService extends ODataEntityService<CalidadRequirente> {
  constructor(protected client: ODataClient) {
    super(client, 'calidadesRequirente', 'SIU.Personas.CalidadRequirente');
  }

  //#region ODataApi Model
  calidadRequirenteModel(): CalidadRequirenteModel<CalidadRequirente> {
    return this.entity().asModel() as CalidadRequirenteModel<CalidadRequirente>;
  }
  //#endregion
  //#region ODataApi Collection
  calidadRequirenteCollection(): CalidadRequirenteCollection<CalidadRequirente, CalidadRequirenteModel<CalidadRequirente>> {
    return this.entities().asCollection() as CalidadRequirenteCollection<CalidadRequirente, CalidadRequirenteModel<CalidadRequirente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public rolRequirenteCasos(entity: EntityKey<CalidadRequirente>): ODataNavigationPropertyResource<RequirenteCaso> {
    return this.entity(entity).navigationProperty<RequirenteCaso>('rolRequirenteCasos');
  }
  //#endregion
}
