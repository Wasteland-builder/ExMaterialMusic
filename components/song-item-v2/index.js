// components/song-item-v2/index.js
import { playerStore } from '../../store/index'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      value: 0
    },
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSongItemClick: function() {
      const id = this.properties.item.id
      // 1.页面跳转
      wx.navigateTo({
        url: '/packagePlayer/pages/music-player/index?id=' + id,
      })

      // 2.播放歌曲
      playerStore.dispatch("playMusicWithSongIdAction", { id })
    }
  }
})
