const fs = require("fs")
const path = require("path")

const copyFile = (srcPath, tarPath, cb) => {
    var rs = fs.createReadStream(srcPath)
    rs.on('error', function(err) {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })
    var ws = fs.createWriteStream(tarPath)
    ws.on('error', function(err) {
        if (err) {
            console.log('write error', tarPath)
        }
        cb && cb(err)
    })
    ws.on('close', function(ex) {
        cb && cb(ex)
    })
    rs.pipe(ws)
}
const copyFolder = (srcDir, tarDir, cb) => {
    fs.readdir(srcDir, function(err, files) {
        var count = 0
        var checkEnd = function() {
            ++count == files.length && cb && cb()
        }
        if (err) {
            checkEnd()
            return
        }
        files.forEach(function(file) {
                var srcPath = path.join(srcDir, file)
                var tarPath = path.join(tarDir, file)

                fs.stat(srcPath, function(err, stats) {
                    if (stats.isDirectory()) {
                        fs.mkdir(tarPath, function(err) {
                            if (err) {
                                console.log(err)
                                return
                            }
                            copyFolder(srcPath, tarPath, checkEnd)
                        })
                    } else {
                        copyFile(srcPath, tarPath, checkEnd)
                    }
                })
            })
            //为空时直接回调
        files.length === 0 && cb && cb()
    })
}
const traverse = (paths, dirnames, filenames) => {
    const files = fs.readdirSync(paths);
    files.forEach(function(item, index) {
        const fPath = path.join(paths, item);
        console.log(fPath);
        const stat = fs.statSync(fPath);
        if (stat.isDirectory() === true) {
            if (dirnames.some((e) => path.basename(fPath) === e)) {
                fs.rmdirSync(fPath, { recursive: true });
            } else {
                traverse(fPath, dirnames, filenames);
            }
        }
        if (stat.isFile() === true) {
            if (filenames.some((e) => fPath.endsWith(e))) {
                fs.unlinkSync(fPath);
            }
        }
    });
}
fs.exists(__dirname + '/build', function(e) {
    if (e == 1) {
        traverse(__dirname + '/build', ('common/components/src').split("/").filter(Boolean), ('.js/.svelte').split("/").filter(Boolean));
    }
});

['build', 'build\\common', 'build\\components', 'build\\src'].forEach(e => {
    fs.mkdirSync(__dirname + '\\' + e, () => {});
})

copyFolder(__dirname + '\\src\\common', __dirname + '\\build\\common', () => {})
copyFolder(__dirname + '\\src\\components', __dirname + '\\build\\components', () => {})
copyFile(__dirname + '\\src\\doc\\index.js', __dirname + '\\build\\src\\index.js', () => {})

console.log('目录下面build,重新打包需要手动删除build目录');