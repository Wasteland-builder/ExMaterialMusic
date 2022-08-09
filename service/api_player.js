import hyRequest from './index'

export function getSongDetail(ids) {
  return hyRequest.get("/song/detail", {
    ids
  })
}

