// components/song-menu-area/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: "默认歌单"
        },
        songMenu: {
            type: Array,
            value: []
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
        handleMenuItemClick(event) {
            const item = event.currentTarget.dataset.item
            wx.navigateTo({
              url: `/pages/detail-songs/index?id=${item.id}&type=menu`,
            })
        }
    }
})