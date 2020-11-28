import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SpecialFolder } from './specialfolder.entity';
import { SpecialFolderModel } from './specialfolder.model';
//#endregion

export class SpecialFolderCollection<E extends SpecialFolder, M extends SpecialFolderModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}