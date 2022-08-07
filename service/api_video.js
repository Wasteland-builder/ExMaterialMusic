import emRequest from './index'

export function getTopMV(offset, limit = 10) {
    return emRequest.get("/top/mv", {
        offset,
        limit
    })
}

export function getMVURL(id) {
    return emRequest.get("/mv/url", {
        id
    })
}

export function getMVDetail(mvid) {
    return emRequest.get("/mv/detail", {
        mvid
    })
}

export function getRelatedVideo(id) {
    return emRequest.get("/related/allvideo", {
        id
    })
}