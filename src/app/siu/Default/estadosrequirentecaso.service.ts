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
import { MovimientoCaso } from '../SIU/Tramites/movimientocaso.entity';
import { EstadoRequirenteCaso } from '../SIU/Tramites/estadorequirentecaso.entity';
import { MovimientoCasoModel } from '../SIU/Tramites/movimientocaso.model';
import { EstadoRequirenteCasoModel } from '../SIU/Tramites/estadorequirentecaso.model';
import { MovimientoCasoCollection } from '../SIU/Tramites/movimientocaso.collection';
import { EstadoRequirenteCasoCollection } from '../SIU/Tramites/estadorequirentecaso.collection';
//#endregion

@Injectable()
export class EstadosRequirenteCasoService extends ODataEntityService<EstadoRequirenteCaso> {
  constructor(protected client: ODataClient) {
    super(client, 'estadosRequirenteCaso', 'SIU.Tramites.EstadoRequirenteCaso');
  }

  //#region ODataApi Model
  estadoRequirenteCasoModel(): EstadoRequirenteCasoModel<EstadoRequirenteCaso> {
    return this.entity().asModel() as EstadoRequirenteCasoModel<EstadoRequirenteCaso>;
  }
  //#endregion
  //#region ODataApi Collection
  estadoRequirenteCasoCollection(): EstadoRequirenteCasoCollection<EstadoRequirenteCaso, EstadoRequirenteCasoModel<EstadoRequirenteCaso>> {
    return this.entities().asCollection() as EstadoRequirenteCasoCollection<EstadoRequirenteCaso, EstadoRequirenteCasoModel<EstadoRequirenteCaso>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public movimientoCasos(entity: EntityKey<EstadoRequirenteCaso>): ODataNavigationPropertyResource<MovimientoCaso> {
    return this.entity(entity).navigationProperty<MovimientoCaso>('movimientoCasos');
  }
  //#endregion
}
