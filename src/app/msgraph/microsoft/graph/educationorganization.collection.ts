import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { EducationExternalSource } from './educationexternalsource.enum';
import { EducationOrganization } from './educationorganization.entity';
import { EducationOrganizationModel } from './educationorganization.model';
//#endregion

export class EducationOrganizationCollection<E extends EducationOrganization, M extends EducationOrganizationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}