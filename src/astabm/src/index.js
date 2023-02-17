var m = require("mithril")
//var Heartcore = require("./modules/heartcore")
// Heartcore.init()


var Layout = require("./views/Layout")
var Frontpage = require("./views/Frontpage")
var Galleries = require("./views/Galeries")

m.route(document.body, "/home", {
    "/home": {
        render: function() {
            return m(Layout, m(Frontpage))
        }
    },
    "/galleries": {
        render: function() {
            return m(Layout, m(Galleries))
        }
    },
})