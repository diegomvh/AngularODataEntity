import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmpleadoCaso } from './empleadocaso.entity';
import { MotivoCambioResponsable } from './motivocambioresponsable.entity';
import { HistoricoResponsable } from './historicoresponsable.entity';
import { EmpleadoCasoModel } from './empleadocaso.model';
import { HistoricoResponsableModel } from './historicoresponsable.model';
import { EmpleadoCasoCollection } from './empleadocaso.collection';
import { MotivoCambioResponsableCollection } from './motivocambioresponsable.collection';
import { HistoricoResponsableCollection } from './historicoresponsable.collection';
//#endregion

export class MotivoCambioResponsableModel<E extends MotivoCambioResponsable> extends ODataModel<E> {
  //#region ODataApi Properties
  motivo: string;
  descripcion?: string;
  oculto?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleadoCasos?: EmpleadoCasoCollection<EmpleadoCaso, EmpleadoCasoModel<EmpleadoCaso>>;
  historicoResponsables?: HistoricoResponsableCollection<HistoricoResponsable, HistoricoResponsableModel<HistoricoResponsable>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}