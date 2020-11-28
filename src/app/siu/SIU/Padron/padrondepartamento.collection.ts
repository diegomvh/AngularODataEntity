import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronDepartamento } from './padrondepartamento.entity';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronDepartamentoModel } from './padrondepartamento.model';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
//#endregion

export class PadronDepartamentoCollection<E extends PadronDepartamento, M extends PadronDepartamentoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}