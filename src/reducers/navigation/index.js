import {NavigationExperimental} from 'react-native';
import {
    PUSH_ROUTE,
    POP_ROUTE,
    SWITCH_TAB
} from '../../actions/navigation';

const {StateUtils: NavigationStateUtils} = NavigationExperimental;


// reducers for tabs and scenes are separate
const initialState = {
    tabs: {
        index: 0,
        routes: [
            {key: 'HomeTab', title: 'HOME'},
            {key: 'SignUp', title: 'SIGNUP'},
        ]
    },

    HomeTab: {
        index: 0,
        routes: [{key: 'Color', title: 'Color Screen'}]
    },

    SignUp: {
        index: 0,
        routes: [{key: 'SignUp', title: 'Sign Up'}]
    }
};

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case PUSH_ROUTE: {
            // Push a route into the scenes stack.
            const tabs = state.tabs;
            const tabKey = tabs.find(route => route.title === action.payload).key;
            const scenes = state.tabKey;
            let nextScenes;
            // the try/catch block prevents throwing an error when the route's key pushed
            // was already present. This happens when the same route is pushed more than once.
            try {
                nextScenes = NavigationStateUtils.push(scenes, route);
            } catch (e) {
                nextScenes = scenes;
            }
            if (scenes !== nextScenes) {
                return Object.assign({}, state, {tabKey: nextScenes})
            }
            return state;
        }

        case POP_ROUTE: {
            // Pops a route from the scenes stack.
            const tabs = state.tabs;
            const tabKey = tabs.find(route => route.title === action.payload).key;
            const scenes = state.tabKey;
            const nextScenes = NavigationStateUtils.pop(scenes);
            if (scenes !== nextScenes) {
                return Object.assign({}, state, {tabKey: nextScenes})
            }
            return state;
        }

        case SWITCH_TAB: {
            // Switches the tab.
            const tabs = state.tabs;
            const nextTabs = NavigationStateUtils.jumpToIndex(tabs, action.payload);
            if (tabs !== nextTabs) {
                return Object.assign({}, state, {tabKey: nextTabs})
            }
            return state;
        }

        default:
            return state;
    }
}
