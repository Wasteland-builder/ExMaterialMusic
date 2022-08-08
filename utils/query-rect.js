export default function queryRect(selector) {
    return new Promise((resolve) => {
        const query = wx.createSelectorQuery()
        query.select(selector).boundingClientRect()
        // query.exec(resolve)
        query.exec((res) => {
            resolve(res)
        })
    })
}