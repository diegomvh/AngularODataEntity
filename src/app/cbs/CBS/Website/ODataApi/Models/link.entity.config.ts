import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Link } from './link.entity';
//#endregion

export const LinkConfig = {
  name: "Link",
  annotations: [],
  fields: {
    Text: {type: 'Edm.String'},
    Url: {type: 'Edm.String'},
    Prefix: {type: 'Edm.String'},
    TargetId: {type: 'Edm.String'},
    Icon: {type: 'Edm.String'}
  }
} as EntityConfig<Link>;