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
import { Institucion } from '../SIU/Lugares/institucion.entity';
import { Localidad } from '../SIU/Lugares/localidad.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { InstitucionModel } from '../SIU/Lugares/institucion.model';
import { LocalidadModel } from '../SIU/Lugares/localidad.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { InstitucionCollection } from '../SIU/Lugares/institucion.collection';
import { LocalidadCollection } from '../SIU/Lugares/localidad.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
//#endregion

@Injectable()
export class InstitucionesService extends ODataEntityService<Institucion> {
  constructor(protected client: ODataClient) {
    super(client, 'instituciones', 'SIU.Lugares.Institucion');
  }

  //#region ODataApi Model
  institucionModel(): InstitucionModel<Institucion> {
    return this.entity().asModel() as InstitucionModel<Institucion>;
  }
  //#endregion
  //#region ODataApi Collection
  institucionCollection(): InstitucionCollection<Institucion, InstitucionModel<Institucion>> {
    return this.entities().asCollection() as InstitucionCollection<Institucion, InstitucionModel<Institucion>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public intervenciones(entity: EntityKey<Institucion>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public localidad(entity: EntityKey<Institucion>): ODataNavigationPropertyResource<Localidad> {
    return this.entity(entity).navigationProperty<Localidad>('localidad');
  }
  //#endregion
}
