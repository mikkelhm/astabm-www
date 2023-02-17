var m = require("mithril")

module.exports = {
    view: function (vnode) {
       return m("main.layout", [
            m("nav.menu", [
                m(m.route.Link, { href: "/home"}, "Forside"),
                m(m.route.Link, { href: "/galleries" }, "Gallerier")
            ]),
            m("section", vnode.children)
        ])
    }
}