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
import { RecursoPermisos } from '../SIU/Recursos/recursopermisos.enum';
import { Recurso } from '../SIU/Recursos/recurso.entity';
import { RecursoOficina } from '../SIU/Recursos/recursooficina.entity';
import { Oficina } from '../SIU/Lugares/oficina.entity';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { RecursoOficinaModel } from '../SIU/Recursos/recursooficina.model';
import { OficinaModel } from '../SIU/Lugares/oficina.model';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { RecursoOficinaCollection } from '../SIU/Recursos/recursooficina.collection';
import { OficinaCollection } from '../SIU/Lugares/oficina.collection';
//#endregion

@Injectable()
export class RecursosOficinasService extends ODataEntityService<RecursoOficina> {
  constructor(protected client: ODataClient) {
    super(client, 'recursosOficinas', 'SIU.Recursos.RecursoOficina');
  }

  //#region ODataApi Model
  recursoOficinaModel(): RecursoOficinaModel<RecursoOficina> {
    return this.entity().asModel() as RecursoOficinaModel<RecursoOficina>;
  }
  //#endregion
  //#region ODataApi Collection
  recursoOficinaCollection(): RecursoOficinaCollection<RecursoOficina, RecursoOficinaModel<RecursoOficina>> {
    return this.entities().asCollection() as RecursoOficinaCollection<RecursoOficina, RecursoOficinaModel<RecursoOficina>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public oficina(entity: EntityKey<RecursoOficina>): ODataNavigationPropertyResource<Oficina> {
    return this.entity(entity).navigationProperty<Oficina>('oficina');
  }
  public recurso(entity: EntityKey<RecursoOficina>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recurso');
  }
  //#endregion
}
