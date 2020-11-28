import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Fiscalia } from './fiscalia.entity';
import { Localidad } from './localidad.entity';
import { FiscaliaModel } from './fiscalia.model';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class FiscaliaCollection<E extends Fiscalia, M extends FiscaliaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}