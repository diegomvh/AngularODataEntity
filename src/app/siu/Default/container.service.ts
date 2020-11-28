import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
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
import { Requirente } from '../SIU/Personas/requirente.entity';
import { RequirenteModel } from '../SIU/Personas/requirente.model';
import { RequirenteCollection } from '../SIU/Personas/requirente.collection';
//#endregion

@Injectable()
export class ContainerService {
 
  constructor(protected client: ODataClient) { }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public testDate(): ODataFunctionResource<null, Date> {
    const resource = this.client.function<null, Date>('SIU.TestDate');
    return resource;
  }
  public testRequirente1(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente1');
    return resource;
  }
  public testRequirente2(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente2');
    return resource;
  }
  public testRequirente3(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente3');
    return resource;
  }
  public testRequirente4(): ODataFunctionResource<null, Requirente> {
    const resource = this.client.function<null, Requirente>('SIU.TestRequirente4');
    return resource;
  }
  //#endregion
}