import Search from './components/Search/Search.vue'
import About from './components/About/About.vue'
import TrackDetail from './components/Track/TrackDetail.vue'

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/about', component: About, name: 'about' },
    { path: '/track/:id', component: TrackDetail, name: 'track' },
]

export default routes