import parseXML from 'react-native-xml2js';
import RNFS from 'react-native-fs'; // react-native link react-native-fs

class RSSReader {

    static existsFile(fileName) {
        var path = RNFS.DocumentDirectoryPath + '/' + fileName;
        return RNFS.exists(path);
    }

    static writeFile(fileName, strArgs) {
        return new Promise((resolve, reject) => {
            try {
                var path = RNFS.DocumentDirectoryPath + '/' + fileName;
                RNFS.writeFile (path, strArgs, 'utf8')
                    .then((success) => {
                        resolve(path);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } catch (ex) {
                reject(ex.message);
            }
       });
    }

    static readFile(fileName) {
        return new Promise((resolve, reject) => {
            try {
                var path = 'E:/ReactNative/ToDoList/' + fileName;
                var path = RNFS.DocumentDirectoryPath + '/' + fileName;
                RNFS.readFile(path)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } catch(ex) {
                reject(ex.message);
            }
        });
    }

    static readRSS(path) {
        return new Promise((resolve, reject) => {
            try {
                fetch(path)
                    .then((response) => response.text())
                    .then((responseXML) => {
                        resolve(responseXML);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            } catch (ex) {
                reject(ex.message);
            }
        });
    }

    static parseTo(xmlText) {
        return new Promise((resolve, reject) => {
            parseXML.parseString(xmlText, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
export default RSSReader;