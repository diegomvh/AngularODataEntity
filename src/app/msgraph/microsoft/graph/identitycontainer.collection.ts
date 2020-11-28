import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentityContainer } from './identitycontainer.entity';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { IdentityContainerModel } from './identitycontainer.model';
import { ConditionalAccessRootModel } from './conditionalaccessroot.model';
import { ConditionalAccessRootCollection } from './conditionalaccessroot.collection';
//#endregion

export class IdentityContainerCollection<E extends IdentityContainer, M extends IdentityContainerModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}