const OpmlParser = require('opmlparser'),
    fetch = require('node-fetch'),
    buildMarkdown = require('./build-markdown');

if (process.env.GATSBY_EXPERIMENTAL_PLUGIN_OPTION_VALIDATION) {
  exports.pluginOptionsSchema = ({ Joi }) =>
    Joi.object({
      name: Joi.string(),
      url: Joi.string()
    })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, pluginOptions, callback) => {
    const opmlparser = new OpmlParser({ opmlurl: pluginOptions.url }),
        sourceInstanceName = pluginOptions.name || `__PROGRAMMATIC__`,
        timezone = pluginOptions.timezone || `UTC`;

    fetch(pluginOptions.url).then(res => res.body.pipe(opmlparser));

    opmlparser.on('error', function(error) {
        console.error(error);
    });

    let nodes = {};

    opmlparser.on('readable', function() {
        const stream = this;
        let outline;

        while (outline = stream.read()) {
            const id = outline['#id'],
                parentid = outline['#parentid'];

            delete outline['#id'];
            delete outline['#parentid'];

            if (nodes[id]) {
                outline.outline = nodes[id];
                delete nodes[id];
            }

            if ('outline' === outline.type) {
                opmlNote = buildMarkdown(outline, timezone);

                actions.createNode({
                    id: createNodeId(`opmlnote-${sourceInstanceName}-${id}`),
                    children: [],
                    parent: null,
                    internal: {
                        type: `OpmlNote`,
                        mediaType: 'text/markdown',
                        content: opmlNote,
                        contentDigest: createContentDigest(opmlNote)
                    },
                    sourceInstanceName
                });
            } else {
                if (!nodes[parentid]) {
                    nodes[parentid] = [];
                }
                nodes[parentid].push(outline);
            }
        }
    });

    opmlparser.on('end', function() {
        const meta = this.meta;

        actions.createNode({
            ...meta,
            id: createNodeId(pluginOptions.url),
            children: [],
            parent: null,
            internal: {
                type: `OpmlMeta`,
                content: JSON.stringify(meta),
                contentDigest: createContentDigest(meta)
            },
            sourceInstanceName
        });

        callback(null);
    });
}
