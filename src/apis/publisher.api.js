
import { serverInstance } from 'src/configs/axios.config'
import { getResponse } from 'src/services/common.service'

export const getPublishers = (params) => serverInstance.get('/api/publishers', { params })
    .then(response => getResponse(response, [])).catch(err => err);