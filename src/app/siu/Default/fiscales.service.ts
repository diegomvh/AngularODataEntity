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
import { Fiscal } from '../SIU/Personas/fiscal.entity';
import { Expediente } from '../SIU/Tramites/expediente.entity';
import { FiscalModel } from '../SIU/Personas/fiscal.model';
import { ExpedienteModel } from '../SIU/Tramites/expediente.model';
import { FiscalCollection } from '../SIU/Personas/fiscal.collection';
import { ExpedienteCollection } from '../SIU/Tramites/expediente.collection';
//#endregion

@Injectable()
export class FiscalesService extends ODataEntityService<Fiscal> {
  constructor(protected client: ODataClient) {
    super(client, 'fiscales', 'SIU.Personas.Fiscal');
  }

  //#region ODataApi Model
  fiscalModel(): FiscalModel<Fiscal> {
    return this.entity().asModel() as FiscalModel<Fiscal>;
  }
  //#endregion
  //#region ODataApi Collection
  fiscalCollection(): FiscalCollection<Fiscal, FiscalModel<Fiscal>> {
    return this.entities().asCollection() as FiscalCollection<Fiscal, FiscalModel<Fiscal>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public expedientes(entity: EntityKey<Fiscal>): ODataNavigationPropertyResource<Expediente> {
    return this.entity(entity).navigationProperty<Expediente>('expedientes');
  }
  //#endregion
}
