import emRequest from './index'

export function getBanners() {
    return emRequest.get('/banner', {
        type: 2
    })
}

export function getRankings(idx) {
    return emRequest.get('/top/list', {
        idx
    })
}