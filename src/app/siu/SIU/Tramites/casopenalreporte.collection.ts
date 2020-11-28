import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CasoPenalReporte } from './casopenalreporte.entity';
import { CasoPenalReporteModel } from './casopenalreporte.model';
//#endregion

export class CasoPenalReporteCollection<E extends CasoPenalReporte, M extends CasoPenalReporteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}