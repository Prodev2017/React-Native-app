import ServicesAPI from '../utils';


export default class TestServices extends ServicesAPI {
        getTest = () => {
            return (
                this.get(path, action)
            )
        }
}