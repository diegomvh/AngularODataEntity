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
import { AcumulacionCarpeta } from '../SIU/Tramites/acumulacioncarpeta.entity';
import { CasoPenal } from '../SIU/Tramites/casopenal.entity';
import { AcumulacionCarpetaModel } from '../SIU/Tramites/acumulacioncarpeta.model';
import { CasoPenalModel } from '../SIU/Tramites/casopenal.model';
import { AcumulacionCarpetaCollection } from '../SIU/Tramites/acumulacioncarpeta.collection';
import { CasoPenalCollection } from '../SIU/Tramites/casopenal.collection';
//#endregion

@Injectable()
export class AcumulacionesCarpetaService extends ODataEntityService<AcumulacionCarpeta> {
  constructor(protected client: ODataClient) {
    super(client, 'acumulacionesCarpeta', 'SIU.Tramites.AcumulacionCarpeta');
  }

  //#region ODataApi Model
  acumulacionCarpetaModel(): AcumulacionCarpetaModel<AcumulacionCarpeta> {
    return this.entity().asModel() as AcumulacionCarpetaModel<AcumulacionCarpeta>;
  }
  //#endregion
  //#region ODataApi Collection
  acumulacionCarpetaCollection(): AcumulacionCarpetaCollection<AcumulacionCarpeta, AcumulacionCarpetaModel<AcumulacionCarpeta>> {
    return this.entities().asCollection() as AcumulacionCarpetaCollection<AcumulacionCarpeta, AcumulacionCarpetaModel<AcumulacionCarpeta>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public casoHijo(entity: EntityKey<AcumulacionCarpeta>): ODataNavigationPropertyResource<CasoPenal> {
    return this.entity(entity).navigationProperty<CasoPenal>('casoHijo');
  }
  public casoPadre(entity: EntityKey<AcumulacionCarpeta>): ODataNavigationPropertyResource<CasoPenal> {
    return this.entity(entity).navigationProperty<CasoPenal>('casoPadre');
  }
  //#endregion
}
