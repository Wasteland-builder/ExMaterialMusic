import emRequest from './index'

export function getTopMV(offset, limit = 10) {
  return emRequest.get("/top/mv", {
    offset,
    limit
  })
}
