import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.entity';
//#endregion

export const MediaContentRatingAustraliaConfig = {
  name: "MediaContentRatingAustralia",
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingAustraliaMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingAustraliaTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingAustralia>;