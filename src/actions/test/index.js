
export default class TestActions {
    constructor(services) {}

    getTest = (path, action) => {
        return (
            this.services.getTest(path, action)
        )
    }

};