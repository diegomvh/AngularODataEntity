import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Caso } from './caso.entity';
import { Expediente } from './expediente.entity';
import { CasoJudiciable } from './casojudiciable.entity';
import { CasoModel } from './caso.model';
import { ExpedienteModel } from './expediente.model';
import { CasoJudiciableModel } from './casojudiciable.model';
import { CasoCollection } from './caso.collection';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export class CasoJudiciableCollection<E extends CasoJudiciable, M extends CasoJudiciableModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}