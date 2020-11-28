import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Caso } from './caso.entity';
import { RequirenteCaso } from './requirentecaso.entity';
import { SubMateria } from './submateria.entity';
import { HistoricoSubmateria } from './historicosubmateria.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { CasoModel } from './caso.model';
import { RequirenteCasoModel } from './requirentecaso.model';
import { SubMateriaModel } from './submateria.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { CasoCollection } from './caso.collection';
import { RequirenteCasoCollection } from './requirentecaso.collection';
import { SubMateriaCollection } from './submateria.collection';
import { HistoricoSubmateriaCollection } from './historicosubmateria.collection';
//#endregion

export class HistoricoSubmateriaModel<E extends HistoricoSubmateria> extends ODataModel<E> {
  //#region ODataApi Properties
  casoId?: number;
  requirenteId?: number;
  subMateriaId?: number;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: CasoModel<Caso>;
  requirente?: RequirenteModel<Requirente>;
  requirenteCaso?: RequirenteCasoModel<RequirenteCaso>;
  subMateria?: SubMateriaModel<SubMateria>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}