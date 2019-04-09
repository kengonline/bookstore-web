import * as API from 'src/apis/publisher.api'

export const fetchPublishers = criteria => API.getPublishers(criteria)