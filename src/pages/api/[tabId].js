var yaml = require('js-yaml');
var fs = require('graceful-fs');

export default function handler({ query: { tabId } }, res) {
    var file = 'db/pages/' + tabId + '.yaml';
    var str;
    if (!fs.existsSync(file)) {
        str = "[]";
    } else {
        str = yaml.safeLoad(fs.readFileSync(file, 'utf8')).sets;
    }
    res.status(200).json(str);
}
