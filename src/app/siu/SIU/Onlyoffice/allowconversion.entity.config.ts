import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllowConversion } from './allowconversion.entity';
import { AllowConversionModel } from './allowconversion.model';
import { AllowConversionCollection } from './allowconversion.collection';
//#endregion

export const AllowConversionConfig = {
  name: "AllowConversion",
  model: AllowConversionModel,
  collection: AllowConversionCollection,
  annotations: [],
  fields: {
    bmp: {type: 'Edm.Boolean', nullable: false},
    gif: {type: 'Edm.Boolean', nullable: false},
    jpg: {type: 'Edm.Boolean', nullable: false},
    png: {type: 'Edm.Boolean', nullable: false},
    odt: {type: 'Edm.Boolean', nullable: false},
    odp: {type: 'Edm.Boolean', nullable: false},
    ods: {type: 'Edm.Boolean', nullable: false},
    pdf: {type: 'Edm.Boolean', nullable: false},
    rtf: {type: 'Edm.Boolean', nullable: false},
    txt: {type: 'Edm.Boolean', nullable: false},
    docx: {type: 'Edm.Boolean', nullable: false},
    xlsx: {type: 'Edm.Boolean', nullable: false},
    pptx: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<AllowConversion>;