//first-level routing
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

//second-level routing
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//third-level routing
import PhoneNumber from './components/about/contact/PhoneNumber'
import Name from './components/about/contact/Name'

export const routes = [
    { path: '/', name: 'homeLink', components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    } },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin },
    { path: '/about', name: 'aboutLink', component: About, redirect: '/contact',
        children: [
            { path: '/contact', name: 'contactLink',component: Contact, redirect: '/personname',
                children: [
                    { path: '/phone', name: 'phoneNumber', component: PhoneNumber },
                    { path: '/personname', name: 'personName', component: Name }
                ]
            },
            { path: '/history', name: 'historyLink', component: History },
            { path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide },
            { path: '/delivery', name: 'deliveryLink', component: Delivery }
        ]
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: '*', redirect: '/' }
]