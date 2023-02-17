var m = require("mithril")
var Heartcore = require("../modules/heartcore")

module.exports = {
    oninit: async () => {
        await Heartcore.loadGalleries();
        m.redraw();
    },
    view: function () {
        console.log(Heartcore.galleries);
        return m("ul.galleries", Heartcore.galleries.map(function (gallery) {
            return m("li", gallery.name)
        }))
    }
}