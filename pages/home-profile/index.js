// pages/home-profile/index.js
import { getUserInfo } from "../../service/api_login"

Page({

    data: {

    },

    onLoad(options) {

    },

    handleGetUser: async function() {
        const userInfo = await getUserInfo()
        console.log(userInfo)
    }
})