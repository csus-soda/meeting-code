/**
 * Create a RESTful API that can:
 *
 * Retrieve
 * 1. An array of students enrolled (/students is fine)
 * 2. A student with a particular ID (use query parameters)
 *
 * Create
 * 1. A student (name, id, major) [Send back error if student already exists]
 */

const http = require("http");
const url = require("url");

const port = process.env.PORT | 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true);

    if (req.method === "POST") {
        const student = {
            name: path.query["name"],
            id: path.query.id,
            major: path.query["major"]
        };

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(student));
    } else {
        res.statusCode = 400;

        // send back JSON
        res.setHeader("Content-Type", "application/json");

        const response = {
            message: `HTTP Verb ${req.method} not supported yet`,
            code: 400
        };

        res.write(JSON.stringify(response));
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
