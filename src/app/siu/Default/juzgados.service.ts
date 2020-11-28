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
import { Juzgado } from '../SIU/Lugares/juzgado.entity';
import { Secretaria } from '../SIU/Lugares/secretaria.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { JuzgadoModel } from '../SIU/Lugares/juzgado.model';
import { SecretariaModel } from '../SIU/Lugares/secretaria.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { JuzgadoCollection } from '../SIU/Lugares/juzgado.collection';
import { SecretariaCollection } from '../SIU/Lugares/secretaria.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
//#endregion

@Injectable()
export class JuzgadosService extends ODataEntityService<Juzgado> {
  constructor(protected client: ODataClient) {
    super(client, 'juzgados', 'SIU.Lugares.Juzgado');
  }

  //#region ODataApi Model
  juzgadoModel(): JuzgadoModel<Juzgado> {
    return this.entity().asModel() as JuzgadoModel<Juzgado>;
  }
  //#endregion
  //#region ODataApi Collection
  juzgadoCollection(): JuzgadoCollection<Juzgado, JuzgadoModel<Juzgado>> {
    return this.entities().asCollection() as JuzgadoCollection<Juzgado, JuzgadoModel<Juzgado>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expedientes(entity: EntityKey<Juzgado>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  public secretarias(entity: EntityKey<Juzgado>): ODataNavigationPropertyResource<Secretaria> {
    return this.entity(entity).navigationProperty<Secretaria>('secretarias');
  }
  //#endregion
}
