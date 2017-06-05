// import fetch from 'isomorphic-fetch';
import config from './config';
export const ACTION = 'ACTION';

const getHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
};

export default class serviceAPI {

    get = async(path, action, params) => {
        let isError = false;
        return dispatch => {
            dispatch({type: `${action}_PENDING`});
            fetch(`${config.baseUrl}/${path}`,
                { method: 'GET',
                    headers: getHeaders()
                })
                .then(response => {
                    if (response.status >= 400) {
                        isError = true;
                        dispatch({type: `${action}_REJECTED`});
                    }
                    return response.json();
                })
                .catch(error => {
                    dispatch({type: `${action}_REJECTED`});
                    // openNotification('error', json);
                })
                .then(json => {
                    if (!isError) {
                        dispatch({type: `${action}_FULFILLED`, payload: json});
                        if (callback) callback();
                    } else {
                        // openNotification('error', json);
                    }
                });
        };
    };
}
