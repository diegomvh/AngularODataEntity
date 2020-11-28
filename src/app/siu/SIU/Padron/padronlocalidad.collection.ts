import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Padron } from './padron.entity';
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronDepartamento } from './padrondepartamento.entity';
import { PadronModel } from './padron.model';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronDepartamentoModel } from './padrondepartamento.model';
import { PadronCollection } from './padron.collection';
import { PadronDepartamentoCollection } from './padrondepartamento.collection';
//#endregion

export class PadronLocalidadCollection<E extends PadronLocalidad, M extends PadronLocalidadModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}