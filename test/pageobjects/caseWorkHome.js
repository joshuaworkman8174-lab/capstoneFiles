import { browser } from '@wdio/globals'

export default class HomeBase {

    goToCaseWork (path) {
        return browser.url(`https://app.thecasework.com/`)
    }
}


export const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'