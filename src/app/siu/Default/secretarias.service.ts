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
export class SecretariasService extends ODataEntityService<Secretaria> {
  constructor(protected client: ODataClient) {
    super(client, 'secretarias', 'SIU.Lugares.Secretaria');
  }

  //#region ODataApi Model
  secretariaModel(): SecretariaModel<Secretaria> {
    return this.entity().asModel() as SecretariaModel<Secretaria>;
  }
  //#endregion
  //#region ODataApi Collection
  secretariaCollection(): SecretariaCollection<Secretaria, SecretariaModel<Secretaria>> {
    return this.entities().asCollection() as SecretariaCollection<Secretaria, SecretariaModel<Secretaria>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expedientes(entity: EntityKey<Secretaria>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  public juzgado(entity: EntityKey<Secretaria>): ODataNavigationPropertyResource<Juzgado> {
    return this.entity(entity).navigationProperty<Juzgado>('juzgado');
  }
  //#endregion
}
