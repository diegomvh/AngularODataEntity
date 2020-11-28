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
import { Padron } from '../SIU/Padron/padron.entity';
import { PadronLocalidad } from '../SIU/Padron/padronlocalidad.entity';
import { PadronDepartamento } from '../SIU/Padron/padrondepartamento.entity';
import { PadronModel } from '../SIU/Padron/padron.model';
import { PadronLocalidadModel } from '../SIU/Padron/padronlocalidad.model';
import { PadronDepartamentoModel } from '../SIU/Padron/padrondepartamento.model';
import { PadronCollection } from '../SIU/Padron/padron.collection';
import { PadronLocalidadCollection } from '../SIU/Padron/padronlocalidad.collection';
import { PadronDepartamentoCollection } from '../SIU/Padron/padrondepartamento.collection';
//#endregion

@Injectable()
export class PadronLocalidadesService extends ODataEntityService<PadronLocalidad> {
  constructor(protected client: ODataClient) {
    super(client, 'padronLocalidades', 'SIU.Padron.PadronLocalidad');
  }

  //#region ODataApi Model
  padronLocalidadModel(): PadronLocalidadModel<PadronLocalidad> {
    return this.entity().asModel() as PadronLocalidadModel<PadronLocalidad>;
  }
  //#endregion
  //#region ODataApi Collection
  padronLocalidadCollection(): PadronLocalidadCollection<PadronLocalidad, PadronLocalidadModel<PadronLocalidad>> {
    return this.entities().asCollection() as PadronLocalidadCollection<PadronLocalidad, PadronLocalidadModel<PadronLocalidad>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public departamento(entity: EntityKey<PadronLocalidad>): ODataNavigationPropertyResource<PadronDepartamento> {
    return this.entity(entity).navigationProperty<PadronDepartamento>('departamento');
  }
  public padrones(entity: EntityKey<PadronLocalidad>): ODataNavigationPropertyResource<Padron> {
    return this.entity(entity).navigationProperty<Padron>('padrones');
  }
  //#endregion
}
