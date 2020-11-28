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
import { PadronLocalidad } from '../SIU/Padron/padronlocalidad.entity';
import { PadronDepartamento } from '../SIU/Padron/padrondepartamento.entity';
import { PadronLocalidadModel } from '../SIU/Padron/padronlocalidad.model';
import { PadronDepartamentoModel } from '../SIU/Padron/padrondepartamento.model';
import { PadronLocalidadCollection } from '../SIU/Padron/padronlocalidad.collection';
import { PadronDepartamentoCollection } from '../SIU/Padron/padrondepartamento.collection';
//#endregion

@Injectable()
export class PadronDepartamentosService extends ODataEntityService<PadronDepartamento> {
  constructor(protected client: ODataClient) {
    super(client, 'padronDepartamentos', 'SIU.Padron.PadronDepartamento');
  }

  //#region ODataApi Model
  padronDepartamentoModel(): PadronDepartamentoModel<PadronDepartamento> {
    return this.entity().asModel() as PadronDepartamentoModel<PadronDepartamento>;
  }
  //#endregion
  //#region ODataApi Collection
  padronDepartamentoCollection(): PadronDepartamentoCollection<PadronDepartamento, PadronDepartamentoModel<PadronDepartamento>> {
    return this.entities().asCollection() as PadronDepartamentoCollection<PadronDepartamento, PadronDepartamentoModel<PadronDepartamento>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public localidades(entity: EntityKey<PadronDepartamento>): ODataNavigationPropertyResource<PadronLocalidad> {
    return this.entity(entity).navigationProperty<PadronLocalidad>('localidades');
  }
  //#endregion
}
