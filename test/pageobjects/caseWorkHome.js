import { browser } from '@wdio/globals'

export default class HomeBase {

    open (path) {
        return browser.url(`https://app.thecasework.com/`)
    }
}
