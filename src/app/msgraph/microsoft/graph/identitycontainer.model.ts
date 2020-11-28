import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentityContainer } from './identitycontainer.entity';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { ConditionalAccessRootModel } from './conditionalaccessroot.model';
import { IdentityContainerCollection } from './identitycontainer.collection';
import { ConditionalAccessRootCollection } from './conditionalaccessroot.collection';
//#endregion

export class IdentityContainerModel<E extends IdentityContainer> extends EntityModel<E> {
  //#region ODataApi Properties
  conditionalAccess?: ConditionalAccessRootModel<ConditionalAccessRoot>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}