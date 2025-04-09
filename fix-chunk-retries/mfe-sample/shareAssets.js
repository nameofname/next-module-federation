const path = require('path');
const express = require('express');


const port = 5555;
const _path = path.resolve(process.cwd(), 'build')
let timeToDie = true;


/**
 * This function will fail once for the specified file name, then succeed on subsequent requests.
 * The fail function is reset every 30 seconds...
 * This is meant to simulate real life situations where requetsts sometimes fail
 */
function testFailOnce(fileName) {
    return function __testInterceptor(req, res, next) {
        // put test code here...
        const fullUrl = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
        if (new URL(fullUrl).pathname.split('/').pop() === fileName) {
            if (timeToDie) {
                timeToDie = false;
                setTimeout(() => {
                    timeToDie = true
                    console.log('ready for another test.');
                }, 30000);
                res.header('Content-Type', 'application/xml');
                console.log('ronaldy breaking intentionally');
                return res.status(404).send('<Error><Code>NoSuchKey</Code><Message>Blerp.</Message><Key>123-123-123-123-123/beep/bop/boop.js</Key><RequestId>ABC123</RequestId><HostId>heyyyy</HostId></Error>');
            } else {
                return next();
            }
        }
        return next();
    }
}

function logger(req, res, next) {
    console.log(req.method, req.url, req.body);
    next();
}

function serve() {
    const app = express();
    console.log('serving MFE');
    app.use(
        logger,
        testFailOnce('__federation_expose_sample-52cf7491d481e58b.js'),
        express.static(_path)
    );
    app.listen(port, () => console.log(`Server listening on : http://localhost:${port}/`));
}

serve();