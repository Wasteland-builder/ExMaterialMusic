import emRequest from './index'

export function getBanners() {
    return emRequest.get('/banner', {
        type: 2
    })
}

