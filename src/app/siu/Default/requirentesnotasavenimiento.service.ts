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
import { EstadoCivil } from '../SIU/Personas/estadocivil.entity';
import { RequirenteNotaAvenimiento } from '../SIU/Tramites/requirentenotaavenimiento.entity';
import { NotaAvenimiento } from '../SIU/Tramites/notaavenimiento.entity';
import { EstadoCivilModel } from '../SIU/Personas/estadocivil.model';
import { RequirenteNotaAvenimientoModel } from '../SIU/Tramites/requirentenotaavenimiento.model';
import { NotaAvenimientoModel } from '../SIU/Tramites/notaavenimiento.model';
import { EstadoCivilCollection } from '../SIU/Personas/estadocivil.collection';
import { RequirenteNotaAvenimientoCollection } from '../SIU/Tramites/requirentenotaavenimiento.collection';
import { NotaAvenimientoCollection } from '../SIU/Tramites/notaavenimiento.collection';
//#endregion

@Injectable()
export class RequirentesNotasAvenimientoService extends ODataEntityService<RequirenteNotaAvenimiento> {
  constructor(protected client: ODataClient) {
    super(client, 'requirentesNotasAvenimiento', 'SIU.Tramites.RequirenteNotaAvenimiento');
  }

  //#region ODataApi Model
  requirenteNotaAvenimientoModel(): RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento> {
    return this.entity().asModel() as RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento>;
  }
  //#endregion
  //#region ODataApi Collection
  requirenteNotaAvenimientoCollection(): RequirenteNotaAvenimientoCollection<RequirenteNotaAvenimiento, RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento>> {
    return this.entities().asCollection() as RequirenteNotaAvenimientoCollection<RequirenteNotaAvenimiento, RequirenteNotaAvenimientoModel<RequirenteNotaAvenimiento>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public estadoCivil(entity: EntityKey<RequirenteNotaAvenimiento>): ODataNavigationPropertyResource<EstadoCivil> {
    return this.entity(entity).navigationProperty<EstadoCivil>('estadoCivil');
  }
  public notaAvenimiento(entity: EntityKey<RequirenteNotaAvenimiento>): ODataNavigationPropertyResource<NotaAvenimiento> {
    return this.entity(entity).navigationProperty<NotaAvenimiento>('notaAvenimiento');
  }
  //#endregion
}
