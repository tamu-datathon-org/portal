var matter = require('gray-matter');
var fs = require('graceful-fs');

export default function handler({ query: { activityId } }, res) {
    var file = 'db/activities/' + activityId + '.md';
    var str;
    if (!fs.existsSync(file)) {
        str = "{}";
    } else {
        str = matter(fs.readFileSync(file, 'utf8'));
    }
    res.status(200).json(str);
}
