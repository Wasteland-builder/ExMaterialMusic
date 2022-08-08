// pages/detail-songs/index.js
import {
    rankingStore
} from '../../store/ranking-store';

import {
    getSongMenuDetail
} from "../../service/api_music";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        type: "",
        ranking: "",
        songInfo: {},
    },

    onLoad(options) {
        const type = options.type
        this.setData({type})
        if (type === "menu") {
            const id = options.id
            getSongMenuDetail(id).then(res => {
                this.setData({
                    songInfo: res.playlist
                })
            })
        } else if (type === "rank") {
            const ranking = options.ranking
            this.setData({
                ranking
            })

            rankingStore.onState(ranking, this.getRankingDataHandler)
        }
    },

    getRankingDataHandler: function (res) {
        this.setData({
            songInfo: res
        })
    },

    onUnload() {
        if (this.data.ranking) {
            rankingStore.offState(this.data.ranking)
        }
    },
})