import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AcumulacionCarpeta } from './acumulacioncarpeta.entity';
import { CasoPenal } from './casopenal.entity';
import { AcumulacionCarpetaModel } from './acumulacioncarpeta.model';
import { CasoPenalModel } from './casopenal.model';
import { CasoPenalCollection } from './casopenal.collection';
//#endregion

export class AcumulacionCarpetaCollection<E extends AcumulacionCarpeta, M extends AcumulacionCarpetaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}