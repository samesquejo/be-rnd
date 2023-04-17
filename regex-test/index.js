
class RegexTest {

    constructor() {
        this.alphanumericRegex = /^[a-z0-9. ]+$/
        this.numericRegex = /^[0-9.]*$/
        this.emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    alphanumeric = (str, msg) => {
        if (!this.alphanumericRegex.test(str)) return Promise.reject(msg)
    }

    numeric = (str, msg) => {
        if (!this.numericRegex.test(str)) return Promise.reject(msg)
    }

    email = (str, msg) => {
        if (!this.emailRegex.test(str)) return Promise.reject(msg)     
    }

}

module.exports = RegexTest