import { HYEventStore } from 'hy-event-store'
import { getRankings } from '../service/api_music'

const rankingStore = new HYEventStore({
    state: {
        hotRanking: {}
    },
    actions: {
        getRankingDataAction(ctx) {
            getRankings(1).then(res => {
                ctx.hotRanking = res.playlist
            })
        }
    }
})

export {
    rankingStore
}