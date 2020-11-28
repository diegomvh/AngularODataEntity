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
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { RequirenteEnEspera } from '../SIU/Personas/requirenteenespera.entity';
import { Caso } from '../SIU/Tramites/caso.entity';
import { CategoriaCaso } from '../SIU/Tramites/categoriacaso.entity';
import { SubMateria } from '../SIU/Tramites/submateria.entity';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { RequirenteEnEsperaModel } from '../SIU/Personas/requirenteenespera.model';
import { CasoModel } from '../SIU/Tramites/caso.model';
import { CategoriaCasoModel } from '../SIU/Tramites/categoriacaso.model';
import { SubMateriaModel } from '../SIU/Tramites/submateria.model';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
import { RequirenteEnEsperaCollection } from '../SIU/Personas/requirenteenespera.collection';
import { CasoCollection } from '../SIU/Tramites/caso.collection';
import { CategoriaCasoCollection } from '../SIU/Tramites/categoriacaso.collection';
import { SubMateriaCollection } from '../SIU/Tramites/submateria.collection';
//#endregion

@Injectable()
export class RequirentesEnEsperaService extends ODataEntityService<RequirenteEnEspera> {
  constructor(protected client: ODataClient) {
    super(client, 'requirentesEnEspera', 'SIU.Personas.RequirenteEnEspera');
  }

  //#region ODataApi Model
  requirenteEnEsperaModel(): RequirenteEnEsperaModel<RequirenteEnEspera> {
    return this.entity().asModel() as RequirenteEnEsperaModel<RequirenteEnEspera>;
  }
  //#endregion
  //#region ODataApi Collection
  requirenteEnEsperaCollection(): RequirenteEnEsperaCollection<RequirenteEnEspera, RequirenteEnEsperaModel<RequirenteEnEspera>> {
    return this.entities().asCollection() as RequirenteEnEsperaCollection<RequirenteEnEspera, RequirenteEnEsperaModel<RequirenteEnEspera>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public caso(entity: EntityKey<RequirenteEnEspera>): ODataNavigationPropertyResource<Caso> {
    return this.entity(entity).navigationProperty<Caso>('caso');
  }
  public categoriaCaso(entity: EntityKey<RequirenteEnEspera>): ODataNavigationPropertyResource<CategoriaCaso> {
    return this.entity(entity).navigationProperty<CategoriaCaso>('categoriaCaso');
  }
  public oficina(entity: EntityKey<RequirenteEnEspera>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public subMateria(entity: EntityKey<RequirenteEnEspera>): ODataNavigationPropertyResource<SubMateria> {
    return this.entity(entity).navigationProperty<SubMateria>('subMateria');
  }
  //#endregion
}
