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
import { UData } from './udata.entity';
import { UDataModel } from './udata.model';
import { UDataCollection } from './udata.collection';
//#endregion

@Injectable()
export class UntypedDataSetService extends ODataEntityService<UData> {
  constructor(protected client: ODataClient) {
    super(client, 'UntypedDataSet', 'Cbs.OData.UData');
  }

  //#region ODataApi Model
  uDataModel(): UDataModel<UData> {
    return super.model() as UDataModel<UData>;
  }
  //#endregion
  //#region ODataApi Collection
  uDataCollection(): UDataCollection<UData, UDataModel<UData>> {
    return super.collection() as UDataCollection<UData, UDataModel<UData>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
