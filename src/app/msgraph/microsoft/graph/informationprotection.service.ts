import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
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
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { InformationProtection } from './informationprotection.entity';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { InformationProtectionModel } from './informationprotection.model';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { InformationProtectionCollection } from './informationprotection.collection';
//#endregion

@Injectable()
export class InformationProtectionService extends ODataSingletonService<InformationProtection> {
  constructor(protected client: ODataClient) {
    super(client, 'informationProtection', 'microsoft.graph.informationProtection');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}