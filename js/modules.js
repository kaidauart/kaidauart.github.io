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
    el("div", "I'm currently a student of Digital Media Art in college, and I'm hoping to learn a variety of mediums so that I can use them to enhance my main medium of digital illustration. Having grown up in a world of cartoons, video games, I've always been told, either explicitly or implicitly, that these mediums are not and cannot be real art. That these mediums are meant for children's media and fun distractions, not for museums and exhibitions. However, where people see just entertainment and fun, I see potential. I believe that every single medium has potential for artistry, and all that it takes is a courageous artist to pick up the slack and create something revolutionary. My goal with art is to push those untapped mediums. Mediums like livestreaming, or Virtual Reality, or even use new knowledge to push more traditional mediums like illustration and writing. I feel as though I’m not bound by traditional ideas of art. Rather than stick to antiquity, I want to create art that only can be made in the present. One piece that influences my art a lot is the Japanese comic series known as Houseki no Kuni (also known in English as Land of the Lustrous) by writer and illustrator Haruko Ichikawa. Not only does Ichikawa have an excellent sense of composition, contrast, and other traditional art principals, but I believe Ichikawa's work truly pushes the bounds of things that can only be done in a comic medium. The way in which panels are arranged to break up a scene, the way in which she uses speech bubbles to fill in blank space and drastically change the mood of a scene, and the ways in which she incorporates things like page turns to accentuate impactful parts of her story are only possible within the medium she has chosen to make her work. Another thing that Ichikawa's work taught me, was the Japanese principal of Shibui (渋い). Shibui is the idea that there is beauty in simplicity. Where other pieces may be technically impressive from their detail and realism, Shibui is the idea that while some pieces may seem simple, they hold a hidden depth underneath the surface. To me, the ways in which artists manage simplicity and detail in their work, using both strategically to make the most of their art, is what transforms a piece from aesthetically pleasing to a breathtaking work of art. Some of my favorite pieces of art are simply a subject on a plain black background, but the depth of emotion and weight of the scene is what makes them beautiful to me. In my work, I want to replicate the same kind of beauty I see in these pieces. While I have been heavily influenced by the cartoons and anime I've grown up on, rather than simply be constrained to the medium, I wanna push the boundaries of it to make truly breathtaking pieces of art. To find beauty in the most simple of pieces. To create pieces of art that can only be made now"), //
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
