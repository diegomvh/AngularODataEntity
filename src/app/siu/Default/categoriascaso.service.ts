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
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { CategoriaCaso } from '../SIU/Tramites/categoriacaso.entity';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { CategoriaCasoModel } from '../SIU/Tramites/categoriacaso.model';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { CategoriaCasoCollection } from '../SIU/Tramites/categoriacaso.collection';
//#endregion

@Injectable()
export class CategoriasCasoService extends ODataEntityService<CategoriaCaso> {
  constructor(protected client: ODataClient) {
    super(client, 'categoriasCaso', 'SIU.Tramites.CategoriaCaso');
  }

  //#region ODataApi Model
  categoriaCasoModel(): CategoriaCasoModel<CategoriaCaso> {
    return this.entity().asModel() as CategoriaCasoModel<CategoriaCaso>;
  }
  //#endregion
  //#region ODataApi Collection
  categoriaCasoCollection(): CategoriaCasoCollection<CategoriaCaso, CategoriaCasoModel<CategoriaCaso>> {
    return this.entities().asCollection() as CategoriaCasoCollection<CategoriaCaso, CategoriaCasoModel<CategoriaCaso>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public requirentesEnEspera(entity: EntityKey<CategoriaCaso>): ODataNavigationPropertyResource<RequirenteEnEspera> {
    return this.entity(entity).navigationProperty<RequirenteEnEspera>('requirentesEnEspera');
  }
  //#endregion
}
