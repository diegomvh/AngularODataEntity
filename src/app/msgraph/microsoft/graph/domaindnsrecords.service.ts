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
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

@Injectable()
export class DomainDnsRecordsService extends ODataEntityService<DomainDnsRecord> {
  constructor(protected client: ODataClient) {
    super(client, 'domainDnsRecords', 'microsoft.graph.domainDnsRecord');
  }

  //#region ODataApi Model
  domainDnsRecordModel(): DomainDnsRecordModel<DomainDnsRecord> {
    return this.entity().asModel() as DomainDnsRecordModel<DomainDnsRecord>;
  }
  //#endregion
  //#region ODataApi Collection
  domainDnsRecordCollection(): DomainDnsRecordCollection<DomainDnsRecord, DomainDnsRecordModel<DomainDnsRecord>> {
    return this.entities().asCollection() as DomainDnsRecordCollection<DomainDnsRecord, DomainDnsRecordModel<DomainDnsRecord>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
