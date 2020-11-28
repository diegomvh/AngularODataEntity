import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DirectoryRoleTemplate } from './directoryroletemplate.entity';
import { DirectoryRoleTemplateModel } from './directoryroletemplate.model';
//#endregion

export class DirectoryRoleTemplateCollection<E extends DirectoryRoleTemplate, M extends DirectoryRoleTemplateModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}