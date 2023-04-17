
class RegexTest {

    constructor() {
        this.alphanumericRegex = /^[a-z0-9. ]+$/
        this.numericRegex = /^[0-9.]*$/
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    alphanumeric = (str) => {
        return this.testRegex(!this.alphanumericRegex.test(str))
    }

    numeric = (str) => {
        return this.testRegex(!this.numericRegex.test(str))
    }

    email = (str) => {
        return this.testRegex(!this.emailRegex.test(str))
    }

    testRegex(testRes) {
        if (testRes) return false
        return true
    }

}

exports = RegexTest