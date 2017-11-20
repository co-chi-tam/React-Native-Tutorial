import RNFS from 'react-native-fs'; // react-native link react-native-fs

class FileManagerJob {

    writeToFile(jobItem, fileName, completed, error) {
        var path = RNFS.DocumentDirectoryPath + '/' + fileName;
        RNFS.writeFile(path, JSON.stringify(jobItem), 'utf8')
            .then((success) => {
                if (completed) {
                    completed();
                }
            })
            .catch((err) => {
                if (error) {
                    error(err.message);
                }
            })
    }

    readFile(completed, error) {
        RNFS.readDir(RNFS.DocumentDirectoryPath)
            .then((result) => {
                return Promise.all(RNFS.stat(result[0].path), result[0].path);
            })
            .then((statResult) => {
                if (statResult[0].isFile()) {
                    return RNFS.readFile(statResult[1], 'utf8');
                }
                return 'No file';
            })
            .then((contents) => {
                if (completed) {
                    completed(contents);
                }
            })
            .catch((err) => {
                if (error) {
                    error(err.message);
                }
            });
    }
}
export default FileManagerJob;