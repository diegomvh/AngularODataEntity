import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { SectionLinks } from './sectionlinks.entity';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
import { SectionLinksCollection } from './sectionlinks.collection';
//#endregion

export class SectionLinksModel<E extends SectionLinks> extends ODataModel<E> {
  //#region ODataApi Properties
  oneNoteClientUrl?: ExternalLinkModel<ExternalLink>;
  oneNoteWebUrl?: ExternalLinkModel<ExternalLink>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}