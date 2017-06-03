// Actions
export const RESET_STATE = 'SessionState/RESET';
export const INITIALIZE_STATE = 'SessionState/INITIALIZE';


export default class SessionActions {
    constructor(services) {}

    resetSessionStateFromSnapshot = (state) => {
        return {
            type: RESET_STATE,
            payload: state
        };
    };

    initializeSessionState = () => {
        return {
            type: INITIALIZE_STATE
        };
    };

};
