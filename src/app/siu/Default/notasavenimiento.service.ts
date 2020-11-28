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
import { RequirenteNotaAvenimiento } from '../SIU/Tramites/requirentenotaavenimiento.entity';
import { NotaAvenimiento } from '../SIU/Tramites/notaavenimiento.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { RequirenteNotaAvenimientoModel } from '../SIU/Tramites/requirentenotaavenimiento.model';
import { NotaAvenimientoModel } from '../SIU/Tramites/notaavenimiento.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { RequirenteNotaAvenimientoCollection } from '../SIU/Tramites/requirentenotaavenimiento.collection';
import { NotaAvenimientoCollection } from '../SIU/Tramites/notaavenimiento.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
//#endregion

@Injectable()
export class NotasAvenimientoService extends ODataEntityService<NotaAvenimiento> {
  constructor(protected client: ODataClient) {
    super(client, 'notasAvenimiento', 'SIU.Tramites.NotaAvenimiento');
  }

  //#region ODataApi Model
  notaAvenimientoModel(): NotaAvenimientoModel<NotaAvenimiento> {
    return this.entity().asModel() as NotaAvenimientoModel<NotaAvenimiento>;
  }
  //#endregion
  //#region ODataApi Collection
  notaAvenimientoCollection(): NotaAvenimientoCollection<NotaAvenimiento, NotaAvenimientoModel<NotaAvenimiento>> {
    return this.entities().asCollection() as NotaAvenimientoCollection<NotaAvenimiento, NotaAvenimientoModel<NotaAvenimiento>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public caso(entity: EntityKey<NotaAvenimiento>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public requirentes(entity: EntityKey<NotaAvenimiento>): ODataNavigationPropertyResource<RequirenteNotaAvenimiento> {
    return this.entity(entity).navigationProperty<RequirenteNotaAvenimiento>('requirentes');
  }
  public subMateria(entity: EntityKey<NotaAvenimiento>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('subMateria');
  }
  //#endregion
}
