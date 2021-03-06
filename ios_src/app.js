import React, {Component} from 'react'
import {Navigation} from 'react-native-navigation'
import SplashScreen from 'react-native-splash-screen'
import {registerScreens} from './screens'
import SyncUtiles from '../util/SyncUtils'
import CourseUtils from '../util/CourseUtils'
registerScreens()

class App extends Component {
    constructor(props) {
        super(props)
        SyncUtiles.syncConfig()
        SyncUtiles.syncUser().then(success => {
            SplashScreen.hide()
            this.startApp()
            if (success) {
                SyncUtiles.syncCourse(true)
            }
        })
    }


    startApp() {
        Navigation.startTabBasedApp({
            tabsStyle: {
                tabBarButtonColor: '#7e7e7e',
                tabBarSelectedButtonColor: '#000',
                tabBarTranslucent: true
            },
            tabs: [
                {
                    label: '广场',
                    screen: 'homeTabScreen',
                    icon: require('../res/images/main29.png'),
                    selectedIcon: require('../res/images/main_select29.png'),
                    title: '广场'
                },
                {
                    label: '查询',
                    screen: 'queryTabScreen',
                    icon: require('../res/images/query29.png'),
                    selectedIcon: require('../res/images/query_select29.png'),
                },
                {
                    label: '个人',
                    screen: 'userTabScreen',
                    icon: require('../res/images/user29.png'),
                    selectedIcon: require('../res/images/user_select29.png'),
                }
            ]
        })
    }
}
export default App