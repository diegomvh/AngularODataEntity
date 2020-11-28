import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AdministrativeUnit } from './administrativeunit.entity';
import { AdministrativeUnitModel } from './administrativeunit.model';
//#endregion

export class AdministrativeUnitCollection<E extends AdministrativeUnit, M extends AdministrativeUnitModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<AdministrativeUnitCollection<AdministrativeUnit, AdministrativeUnitModel<AdministrativeUnit>>> {
    var res = this._function<null, AdministrativeUnit>('microsoft.graph.delta');
    res.segment.entitySet('');
    return res.call(null, 'collection', options) as Observable<AdministrativeUnitCollection<AdministrativeUnit, AdministrativeUnitModel<AdministrativeUnit>>>;
  }
  //#endregion
}