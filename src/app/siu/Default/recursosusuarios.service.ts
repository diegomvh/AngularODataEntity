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
import { RecursoUsuario } from '../SIU/Recursos/recursousuario.entity';
import { RecursoModel } from '../SIU/Recursos/recurso.model';
import { RecursoUsuarioModel } from '../SIU/Recursos/recursousuario.model';
import { RecursoCollection } from '../SIU/Recursos/recurso.collection';
import { RecursoUsuarioCollection } from '../SIU/Recursos/recursousuario.collection';
//#endregion

@Injectable()
export class RecursosUsuariosService extends ODataEntityService<RecursoUsuario> {
  constructor(protected client: ODataClient) {
    super(client, 'recursosUsuarios', 'SIU.Recursos.RecursoUsuario');
  }

  //#region ODataApi Model
  recursoUsuarioModel(): RecursoUsuarioModel<RecursoUsuario> {
    return this.entity().asModel() as RecursoUsuarioModel<RecursoUsuario>;
  }
  //#endregion
  //#region ODataApi Collection
  recursoUsuarioCollection(): RecursoUsuarioCollection<RecursoUsuario, RecursoUsuarioModel<RecursoUsuario>> {
    return this.entities().asCollection() as RecursoUsuarioCollection<RecursoUsuario, RecursoUsuarioModel<RecursoUsuario>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public recurso(entity: EntityKey<RecursoUsuario>): ODataNavigationPropertyResource<Recurso> {
    return this.entity(entity).navigationProperty<Recurso>('recurso');
  }
  //#endregion
}
