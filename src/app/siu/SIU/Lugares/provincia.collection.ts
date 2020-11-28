import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { Provincia } from './provincia.entity';
import { LocalidadModel } from './localidad.model';
import { ProvinciaModel } from './provincia.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export class ProvinciaCollection<E extends Provincia, M extends ProvinciaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}