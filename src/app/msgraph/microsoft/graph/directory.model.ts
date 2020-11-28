import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DirectoryObject } from './directoryobject.entity';
import { AdministrativeUnit } from './administrativeunit.entity';
import { Directory } from './directory.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { AdministrativeUnitModel } from './administrativeunit.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AdministrativeUnitCollection } from './administrativeunit.collection';
import { DirectoryCollection } from './directory.collection';
//#endregion

export class DirectoryModel<E extends Directory> extends EntityModel<E> {
  //#region ODataApi Properties
  administrativeUnits?: AdministrativeUnitCollection<AdministrativeUnit, AdministrativeUnitModel<AdministrativeUnit>>;
  deletedItems?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}