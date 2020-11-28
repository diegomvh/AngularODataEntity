import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { Nacionalidad } from './nacionalidad.entity';
import { RequirenteModel } from './requirente.model';
import { NacionalidadModel } from './nacionalidad.model';
import { RequirenteCollection } from './requirente.collection';
//#endregion

export class NacionalidadCollection<E extends Nacionalidad, M extends NacionalidadModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}