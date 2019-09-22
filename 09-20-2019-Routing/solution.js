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

    switch (req.method) {
        case "POST":
            switch (path.pathname) {
                case "/student":
                    const student = {
                        name: path.query.name,
                        id: path.query.id,
                        major: path.query.major
                    };
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.write(JSON.stringify(student));
                    break;
                default:
                    const result = {
                        message: `Path ${url.pathname} is not yet supported!`,
                        code: 404
                    };

                    res.statusCode = 404;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify(result));
                    break;
            }
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");

            const result = {
                message: `Method ${req.method} is not yet supported!`,
                code: 404
            };

            res.end(JSON.stringify(result));
            break;
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
