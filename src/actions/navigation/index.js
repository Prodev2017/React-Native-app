// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';


export default class NavigationActions {
    constructor(services) {}

    switchTab = (index) => {
        return {
            type: SWITCH_TAB,
            payload: index
        };
    };

    pushRoute = (route) => {
        return {
            type: SWITCH_TAB,
            payload: route
        };
    };

    onNavigateBack = () => {
        return {type: POP_ROUTE};
    };

    onNavigateCompleted = () => {
        return
    };

};
