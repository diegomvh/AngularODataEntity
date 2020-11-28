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
import { AuditEntryState } from '../SIU/Plus/auditentrystate.enum';
import { AuditEntry } from '../SIU/Plus/auditentry.entity';
import { AuditEntryProperty } from '../SIU/Plus/auditentryproperty.entity';
import { AuditEntryModel } from '../SIU/Plus/auditentry.model';
import { AuditEntryPropertyModel } from '../SIU/Plus/auditentryproperty.model';
import { AuditEntryCollection } from '../SIU/Plus/auditentry.collection';
import { AuditEntryPropertyCollection } from '../SIU/Plus/auditentryproperty.collection';
//#endregion

@Injectable()
export class AuditentriesService extends ODataEntityService<AuditEntry> {
  constructor(protected client: ODataClient) {
    super(client, 'auditentries', 'SIU.Plus.AuditEntry');
  }

  //#region ODataApi Model
  auditEntryModel(): AuditEntryModel<AuditEntry> {
    return this.entity().asModel() as AuditEntryModel<AuditEntry>;
  }
  //#endregion
  //#region ODataApi Collection
  auditEntryCollection(): AuditEntryCollection<AuditEntry, AuditEntryModel<AuditEntry>> {
    return this.entities().asCollection() as AuditEntryCollection<AuditEntry, AuditEntryModel<AuditEntry>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public properties(entity: EntityKey<AuditEntry>): ODataNavigationPropertyResource<AuditEntryProperty> {
    return this.entity(entity).navigationProperty<AuditEntryProperty>('properties');
  }
  //#endregion
}
