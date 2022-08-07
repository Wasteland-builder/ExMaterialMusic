// pages/detail-video/index.js
import {
    getMVDetail,
    getMVURL,
    getRelatedVideo
} from '../../service/api_video'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvURLInfo: {},
        mvDetail: {},
        relatedVideos: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 1.获取传入的id
        const id = options.id

        // 2.获取页面的数据
        this.getPageData(id)
    },

    getPageData: function (id) {
        // 1.请求播放地址
        getMVURL(id).then(res => {
            this.setData({
                mvURLInfo: res.data
            })
        })

        // 2.请求视频信息
        getMVDetail(id).then(res => {
            this.setData({
                mvDetail: res.data
            })
        })

        // 3.请求相关视频
        getRelatedVideo(id).then(res => {
            this.setData({
                relatedVideos: res.data
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})