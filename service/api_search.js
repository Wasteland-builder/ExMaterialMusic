import emRequest from './index'

export function getSearchHot() {
    return emRequest.get('/search/hot')
}

export function getSearchSuggest(keywords) {
    return emRequest.get("/search/suggest", {
        keywords,
        type: "mobile"
    })
}

export function getSearchResult(keywords) {
    return emRequest.get("/search", {
        keywords
    })
}