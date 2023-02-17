const { Client } = require('@umbraco/headless-client')
const client = new Client({ projectAlias: 'mikkelhm-food', language: 'da-DK' })

var rootElementId = 'e19cad87-410f-480f-862d-7aaadbb55e57';

var Heartcore = {
    // init: function () {
    //     if (rootElement === undefined) {
    //         client.delivery.content.byUrl("/asta/")
    //             .then((response) => rootElement = response);
    //     }
    // },
    galleries: [],
    loadGalleries: async function () {
        var data = await client.delivery.content.children(rootElementId);
        Heartcore.galleries = data.items;
    }
}

module.exports = Heartcore