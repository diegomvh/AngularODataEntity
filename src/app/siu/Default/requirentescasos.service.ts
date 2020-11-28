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
import { Caso } from '../SIU/Tramites/caso.entity';
import { RequirenteCaso } from '../SIU/Tramites/requirentecaso.entity';
import { Intervencion } from '../SIU/Tramites/intervencion.entity';
import { MovimientoCaso } from '../SIU/Tramites/movimientocaso.entity';
import { Detencion } from '../SIU/Tramites/detencion.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { CalidadRequirenteModel } from '../SIU/Personas/calidadrequirente.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteCasoModel } from '../SIU/Tramites/requirentecaso.model';
import { IntervencionModel } from '../SIU/Tramites/intervencion.model';
import { MovimientoCasoModel } from '../SIU/Tramites/movimientocaso.model';
import { DetencionModel } from '../SIU/Tramites/detencion.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { CalidadRequirenteCollection } from '../SIU/Personas/calidadrequirente.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteCasoCollection } from '../SIU/Tramites/requirentecaso.collection';
import { IntervencionCollection } from '../SIU/Tramites/intervencion.collection';
import { MovimientoCasoCollection } from '../SIU/Tramites/movimientocaso.collection';
import { DetencionCollection } from '../SIU/Tramites/detencion.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
//#endregion

@Injectable()
export class RequirentesCasosService extends ODataEntityService<RequirenteCaso> {
  constructor(protected client: ODataClient) {
    super(client, 'requirentesCasos', 'SIU.Tramites.RequirenteCaso');
  }

  //#region ODataApi Model
  requirenteCasoModel(): RequirenteCasoModel<RequirenteCaso> {
    return this.entity().asModel() as RequirenteCasoModel<RequirenteCaso>;
  }
  //#endregion
  //#region ODataApi Collection
  requirenteCasoCollection(): RequirenteCasoCollection<RequirenteCaso, RequirenteCasoModel<RequirenteCaso>> {
    return this.entities().asCollection() as RequirenteCasoCollection<RequirenteCaso, RequirenteCasoModel<RequirenteCaso>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public calidadRequirente(entity: EntityKey<RequirenteCaso>): ODataNavigationPropertyResource<CalidadRequirente> {
    return this.entity(entity).navigationProperty<CalidadRequirente>('calidadRequirente');
  }
  public caso(entity: EntityKey<RequirenteCaso>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public delito(entity: EntityKey<RequirenteCaso>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('delito');
  }
  public detenciones(entity: EntityKey<RequirenteCaso>): ODataNavigationPropertyResource<Detencion> {
    return this.entity(entity).navigationProperty<Detencion>('detenciones');
  }
  public intervenciones(entity: EntityKey<RequirenteCaso>): ODataNavigationPropertyResource<Intervencion> {
    return this.entity(entity).navigationProperty<Intervencion>('intervenciones');
  }
  public movimientosCaso(entity: EntityKey<RequirenteCaso>): ODataNavigationPropertyResource<MovimientoCaso> {
    return this.entity(entity).navigationProperty<MovimientoCaso>('movimientosCaso');
  }
  //#endregion
}
