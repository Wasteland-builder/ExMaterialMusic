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

export function getSongMenu(cat="全部", limit=6, offset=0) {
    return emRequest.get("/top/playlist", {
        cat,
        limit,
        offset
    })
}

export function getSongMenuDetail(id) {
    return emRequest.get("/playlist/detail/dynamic", {
        id
    })
}