var m = require("mithril")

module.exports = {
    view : function() {
        return m("main", 
            m("h1", {class: "title"}, "Velkommen til Astas side på internettet"),
            m("a", {
                href: "#!/galleries"
            }, "Se alle billede albums her")
        );
    }
}