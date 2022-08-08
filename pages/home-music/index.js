// pages/home-music/index.js
import { rankingStore } from '../../store/index'
 
import {getBanners} from '../../service/api_music';
import queryRect  from '../../utils/query-rect';
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect)

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperHeight: 0,
        banners: [],
        recommendSongs: []
    },

    onLoad(options) {
        // 获取页面数据
        this.getPageData()

        rankingStore.dispatch('getRankingDataAction')

        rankingStore.onState('hotRanking', (res => {
            if (!res.tracks) return
            const recommendSongs = res.tracks.slice(0, 6)
            this.setData({recommendSongs})
        }))
    },

    handleSwipperImageLoaded: function () {
        // 获取图片的宽高（如何获取组件的宽高）
        throttleQueryRect(".swiper-image").then(res => {
            const rect = res[0]
            this.setData({swiperHeight: rect.height})
        })
    },

    // 网络请求
    getPageData: function () {
        getBanners().then(res => {
            this.setData({
                banners: res.banners
            })
        })
    },

    handleSearchClick() {
        wx.navigateTo({
            url: '/pages/detail-search/index',
        })
    },

    onUnload() {

    },


})