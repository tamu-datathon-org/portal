var yaml = require('js-yaml');
var fs = require('graceful-fs');
var path = require('path');

export default function handler(req, res) {
    fs.readdir('db/pages/', (err, files) => {
        var arr = [];
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                if (path.extname(file).toLowerCase() === '.yaml') {
                    arr.push(yaml.safeLoad(fs.readFileSync('db/pages/' + file, 'utf8')));
                }
            });
        }
        res.status(200).json(arr);
    });
}
