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
import { AuditEntry } from '../SIU/Plus/auditentry.entity';
import { AuditEntryProperty } from '../SIU/Plus/auditentryproperty.entity';
import { AuditEntryModel } from '../SIU/Plus/auditentry.model';
import { AuditEntryPropertyModel } from '../SIU/Plus/auditentryproperty.model';
import { AuditEntryCollection } from '../SIU/Plus/auditentry.collection';
import { AuditEntryPropertyCollection } from '../SIU/Plus/auditentryproperty.collection';
//#endregion

@Injectable()
export class AuditpropertiesService extends ODataEntityService<AuditEntryProperty> {
  constructor(protected client: ODataClient) {
    super(client, 'auditproperties', 'SIU.Plus.AuditEntryProperty');
  }

  //#region ODataApi Model
  auditEntryPropertyModel(): AuditEntryPropertyModel<AuditEntryProperty> {
    return this.entity().asModel() as AuditEntryPropertyModel<AuditEntryProperty>;
  }
  //#endregion
  //#region ODataApi Collection
  auditEntryPropertyCollection(): AuditEntryPropertyCollection<AuditEntryProperty, AuditEntryPropertyModel<AuditEntryProperty>> {
    return this.entities().asCollection() as AuditEntryPropertyCollection<AuditEntryProperty, AuditEntryPropertyModel<AuditEntryProperty>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public parent(entity: EntityKey<AuditEntryProperty>): ODataNavigationPropertyResource<AuditEntry> {
    return this.entity(entity).navigationProperty<AuditEntry>('parent');
  }
  //#endregion
}
