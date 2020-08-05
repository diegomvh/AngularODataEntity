import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingIreland } from './mediacontentratingireland.entity';
//#endregion

export const MediaContentRatingIrelandConfig = {
  name: "mediaContentRatingIreland",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingIrelandMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingIrelandTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingIreland>;