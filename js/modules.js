import { mount, el } from "./redom.js"

import art from "./art.js"

export function setup() {
    const doc = document.querySelector("#centerContent")
    let page = document.querySelector("#page")
    page = mount(doc, HomePage, page, true)

    document.querySelector("#homeButton").addEventListener("click", () => {
        mount(doc, HomePage, page, true)
        page = HomePage
    })

    document.querySelector("#contactButton").addEventListener("click", () => {
        mount(doc, ContactPage, page, true)
        page = ContactPage
    })

    document.querySelector("#portfolioButton").addEventListener("click", () => {
        mount(doc, PortfolioPage, page, true)
        page = PortfolioPage
    })
}

const HomePage = el("div#page.center", [
    el("div", "Artist Statement:"), test//
])

const PortfolioPage = new Portfolio()

const ContactPage = el("div#page.center", [
    el("div", "Phone: 408-341-5320"), //
    el("div", "Email: kaida.uart@gmail.com"),
])

function Portfolio() {
    this.el = el("div#page.center", [
        (this.selector = el("ul.selector")), //
        (this.content = el("div")),
    ])

    let artAcc = mount(this.content, art[0])

    this.selector.addEventListener("click", (event) => {
        /* Check if the li was found */
        const li = event.target ? event.target.closest("li") : null
        if (!li) return

        /* Mount new chart and set it as reference for next replacement */
        artAcc = mount(this.content, art[li.dataset.index], artAcc, true)
    })

    for (let i = 0; i < art.length; i++) {
        const element = el("li", el("button.button button3", (i + 1).toString()))
        element.dataset.index = i
        mount(this.selector, element)
    }
}
