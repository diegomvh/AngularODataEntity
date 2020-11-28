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
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { CategoriaExpediente } from '../SIU/Tramites/categoriaexpediente.entity';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { CategoriaExpedienteModel } from '../SIU/Tramites/categoriaexpediente.model';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
import { CategoriaExpedienteCollection } from '../SIU/Tramites/categoriaexpediente.collection';
//#endregion

@Injectable()
export class CategoriasExpedienteService extends ODataEntityService<CategoriaExpediente> {
  constructor(protected client: ODataClient) {
    super(client, 'categoriasExpediente', 'SIU.Tramites.CategoriaExpediente');
  }

  //#region ODataApi Model
  categoriaExpedienteModel(): CategoriaExpedienteModel<CategoriaExpediente> {
    return this.entity().asModel() as CategoriaExpedienteModel<CategoriaExpediente>;
  }
  //#endregion
  //#region ODataApi Collection
  categoriaExpedienteCollection(): CategoriaExpedienteCollection<CategoriaExpediente, CategoriaExpedienteModel<CategoriaExpediente>> {
    return this.entities().asCollection() as CategoriaExpedienteCollection<CategoriaExpediente, CategoriaExpedienteModel<CategoriaExpediente>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expedientes(entity: EntityKey<CategoriaExpediente>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  //#endregion
}
