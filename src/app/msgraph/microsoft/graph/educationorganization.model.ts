import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationOrganization } from './educationorganization.entity';
import { EducationOrganizationCollection } from './educationorganization.collection';
//#endregion

export class EducationOrganizationModel<E extends EducationOrganization> extends EntityModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName: string;
  externalSource?: EducationExternalSource;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}