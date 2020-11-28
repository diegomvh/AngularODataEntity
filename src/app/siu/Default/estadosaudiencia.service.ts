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
import { Audiencia } from '../SIU/Tramites/audiencia.entity';
import { EstadoAudiencia } from '../SIU/Tramites/estadoaudiencia.entity';
import { AudienciaModel } from '../SIU/Tramites/audiencia.model';
import { EstadoAudienciaModel } from '../SIU/Tramites/estadoaudiencia.model';
import { AudienciaCollection } from '../SIU/Tramites/audiencia.collection';
import { EstadoAudienciaCollection } from '../SIU/Tramites/estadoaudiencia.collection';
//#endregion

@Injectable()
export class EstadosAudienciaService extends ODataEntityService<EstadoAudiencia> {
  constructor(protected client: ODataClient) {
    super(client, 'estadosAudiencia', 'SIU.Tramites.EstadoAudiencia');
  }

  //#region ODataApi Model
  estadoAudienciaModel(): EstadoAudienciaModel<EstadoAudiencia> {
    return this.entity().asModel() as EstadoAudienciaModel<EstadoAudiencia>;
  }
  //#endregion
  //#region ODataApi Collection
  estadoAudienciaCollection(): EstadoAudienciaCollection<EstadoAudiencia, EstadoAudienciaModel<EstadoAudiencia>> {
    return this.entities().asCollection() as EstadoAudienciaCollection<EstadoAudiencia, EstadoAudienciaModel<EstadoAudiencia>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public audiencias(entity: EntityKey<EstadoAudiencia>): ODataNavigationPropertyResource<Audiencia> {
    return this.entity(entity).navigationProperty<Audiencia>('audiencias');
  }
  //#endregion
}
