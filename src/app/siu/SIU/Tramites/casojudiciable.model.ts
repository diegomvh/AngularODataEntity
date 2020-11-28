import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { Expediente } from './expediente.entity';
import { CasoJudiciable } from './casojudiciable.entity';
import { CasoModel } from './caso.model';
import { ExpedienteModel } from './expediente.model';
import { CasoCollection } from './caso.collection';
import { ExpedienteCollection } from './expediente.collection';
import { CasoJudiciableCollection } from './casojudiciable.collection';
//#endregion

export class CasoJudiciableModel<E extends CasoJudiciable> extends ODataModel<E> {
  //#region ODataApi Properties
  casoId?: number;
  expedienteId?: number;
  key?: string;
  envio: Date;
  recepcion?: Date;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  caso?: CasoModel<Caso>;
  expediente?: ExpedienteModel<Expediente>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}