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
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { CasoJudiciable } from '../SIU/Tramites/casojudiciable.entity';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { CasoJudiciableModel } from '../SIU/Tramites/casojudiciable.model';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { CasoJudiciableCollection } from '../SIU/Tramites/casojudiciable.collection';
//#endregion

@Injectable()
export class CasosJudiciablesService extends ODataEntityService<CasoJudiciable> {
  constructor(protected client: ODataClient) {
    super(client, 'casosJudiciables', 'SIU.Tramites.CasoJudiciable');
  }

  //#region ODataApi Model
  casoJudiciableModel(): CasoJudiciableModel<CasoJudiciable> {
    return this.entity().asModel() as CasoJudiciableModel<CasoJudiciable>;
  }
  //#endregion
  //#region ODataApi Collection
  casoJudiciableCollection(): CasoJudiciableCollection<CasoJudiciable, CasoJudiciableModel<CasoJudiciable>> {
    return this.entities().asCollection() as CasoJudiciableCollection<CasoJudiciable, CasoJudiciableModel<CasoJudiciable>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public caso(entity: EntityKey<CasoJudiciable>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public expediente(entity: EntityKey<CasoJudiciable>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expediente');
  }
  //#endregion
}
