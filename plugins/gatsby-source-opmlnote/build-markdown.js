const dayjs = require('dayjs'),
    Html5Entities = require('html-entities').Html5Entities,
    yaml = require('yaml');

dayjs.extend(require('dayjs/plugin/utc'));
dayjs.extend(require('dayjs/plugin/timezone'));

module.exports = buildMarkdown;

function buildMarkdown(oPost, timezone) {
    const created = dayjs.utc(oPost.created, "ddd, D MMM YYYY HH:mm:ss [GMT]", true),
        type = oPost.type || 'outline';

    let frontmatter = {};
    frontmatter.plugin = "OPML";

    if (oPost.outline) {
      frontmatter.title = oPost.text;
      frontmatter.layout = 'post';
    } else {
        frontmatter.title = '';
        oPost.outline = [{ text: oPost.text }];
    }

    if (created.isValid()) {
      frontmatter.created = created.tz(timezone).format('YYYY-MM-DD HH:mm:ssZZ');
      frontmatter.date = frontmatter.created;
    }

    if (oPost.slug) {
        frontmatter.slug = oPost.slug;
    }

    let body = "---\n";
    body += yaml.stringify(frontmatter);
    body += "---\n\n";

    for (const oOutline of oPost.outline) {
        if (oOutline.outline) {
            body += buildSection(oOutline, 2, type);
        } else {
            body += oOutline.text + "\n\n";
        }
    }

    return body.trim() + "\n";
}

function buildSection(oOutline, level, type) {
    let body = '',
        prefix = '',
        ulinc = 1;

    type = oOutline.type || type;

    switch (type) {
        case 'ul':
            if (oOutline.inList) {
                prefix = ' '.repeat(oOutline.text.length - oOutline.text.trimLeft().length);
            } else {
                prefix = '';
            }
            body = oOutline.text + (oOutline.inList ? "\n" : "\n\n");
            for (const oChild of oOutline.outline) {
                oChild.text = prefix + (oOutline.inList ? '    ' : '') + '* ' + oChild.text.trim().replace(/^[* ]+/, '');
                oChild.inList = true;
                if (oChild.outline) {
                    body += buildSection(oChild, level + 1, type);
                } else {
                    body += oChild.text + "\n";
                }
            }
            body += (oOutline.inList ? '' : "\n");
            break;

        case 'ol':
            if (oOutline.inList) {
                prefix = ' '.repeat(oOutline.text.length - oOutline.text.trimLeft().length);
            } else {
                prefix = '';
            }
            body = oOutline.text + (oOutline.inList ? "\n" : "\n\n");
            for (const oChild of oOutline.outline) {
                oChild.text = prefix + (oOutline.inList ? '    ' : '') + (ulinc++) + '. ' + oChild.text.trim().replace(/^[\d]+\. +/, '');
                oChild.inList = true;
                if (oChild.outline) {
                    body += buildSection(oChild, level + 1, type);
                } else {
                    body += oChild.text + "\n";
                }
            }
            body += (oOutline.inList ? '' : "\n");
            break;

        case 'quote':
            body = '';
            for (const oChild of oOutline.outline) {
                if (oChild.outline) {
                    body += buildSection(oChild, level + 1, type);
                } else {
                    body += "> " + oChild.text.replace(/^[\d]+\. +/, '') + "\n";
                }
            }
            body += ">\n> <cite>" + oOutline.text + "</cite>\n\n";
            break;

        default:
            body = "#".repeat(level) + ' ' + oOutline.text + "\n\n";
            for (const oChild of oOutline.outline) {
                if (oChild.outline) {
                    body += buildSection(oChild, level + 1, type);
                } else {
                    body += oChild.text + "\n\n";
                }
            }
    }

    return body;
}
