import * as fs from 'fs-extra';

try {

    fs.ensureDir('test-result');
    fs.emptyDirSync('test-result');

} catch (err) {

    console.error("Folder not created" + err);
    
}
