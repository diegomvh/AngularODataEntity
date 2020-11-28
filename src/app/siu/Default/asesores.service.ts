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
import { Asesor } from '../SIU/Personas/asesor.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { AsesorModel } from '../SIU/Personas/asesor.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { AsesorCollection } from '../SIU/Personas/asesor.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
//#endregion

@Injectable()
export class AsesoresService extends ODataEntityService<Asesor> {
  constructor(protected client: ODataClient) {
    super(client, 'asesores', 'SIU.Personas.Asesor');
  }

  //#region ODataApi Model
  asesorModel(): AsesorModel<Asesor> {
    return this.entity().asModel() as AsesorModel<Asesor>;
  }
  //#endregion
  //#region ODataApi Collection
  asesorCollection(): AsesorCollection<Asesor, AsesorModel<Asesor>> {
    return this.entities().asCollection() as AsesorCollection<Asesor, AsesorModel<Asesor>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expedientes(entity: EntityKey<Asesor>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  //#endregion
}
