// pages/home-music/index.js
import {
    rankingStore, rankingMap
} from '../../store/index'

import {
    getBanners,
    getSongMenu
} from '../../service/api_music';
import queryRect from '../../utils/query-rect';
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect)

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperHeight: 0,
        banners: [],
        hotSongMenu: [],
        recommendSongMenu: [],
        recommendSongs: [],
        rankings: {
            0: {},
            1: {},
            3: {}
        }
    },

    onLoad(options) {
        // 获取页面数据
        this.getPageData()

        rankingStore.dispatch('getRankingDataAction')

        rankingStore.onState('hotRanking', (res => {
            if (!res.tracks) return
            const recommendSongs = res.tracks.slice(0, 6)
            this.setData({
                recommendSongs
            })
        }))
        rankingStore.onState("newRanking", this.getRankingHandler(0))
        rankingStore.onState("hotRanking", this.getRankingHandler(1))
        rankingStore.onState("upRanking", this.getRankingHandler(3))
    },

    handleSwipperImageLoaded: function () {
        // 获取图片的宽高（如何获取组件的宽高）
        throttleQueryRect(".swiper-image").then(res => {
            const rect = res[0]
            this.setData({
                swiperHeight: rect.height
            })
        })
    },

    navigateToDetailSongsPage: function (rankingName) {
        wx.navigateTo({
            url: `/pages/detail-songs/index?ranking=${rankingName}&type=rank`,
        })
    },

    handleMoreClick: function () {
        this.navigateToDetailSongsPage("hotRanking")
    },

    handleRankingItemClick: function (event) {
        const idx = event.currentTarget.dataset.idx
        const rankingName = rankingMap[idx]
        this.navigateToDetailSongsPage(rankingName)
    },

    // 网络请求
    getPageData: function () {
        getBanners().then(res => {
            this.setData({
                banners: res.banners
            })
        })

        getSongMenu().then(res => {
            this.setData({
                hotSongMenu: res.playlists
            })
        })

        getSongMenu("华语").then(res => {
            this.setData({
                recommendSongMenu: res.playlists
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

    getRankingHandler: function (idx) {
        return (res) => {
            if (Object.keys(res).length === 0) return
            const name = res.name
            const coverImgUrl = res.coverImgUrl
            const playCount = res.playCount
            const songList = res.tracks.slice(0, 3)
            const rankingObj = {
                name,
                coverImgUrl,
                playCount,
                songList
            }
            const newRankings = {
                ...this.data.rankings,
                [idx]: rankingObj
            }
            this.setData({
                rankings: newRankings
            })
        }
    },
})