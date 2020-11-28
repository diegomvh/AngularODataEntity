import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Padron } from './padron.entity';
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronModel } from './padron.model';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
//#endregion

export class PadronCollection<E extends Padron, M extends PadronModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}