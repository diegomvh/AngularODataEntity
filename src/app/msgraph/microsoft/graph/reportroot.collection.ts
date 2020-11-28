import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Report } from './report.entity';
import { ReportRoot } from './reportroot.entity';
import { ReportModel } from './report.model';
import { ReportRootModel } from './reportroot.model';
import { ReportCollection } from './report.collection';
//#endregion

export class ReportRootCollection<E extends ReportRoot, M extends ReportRootModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}