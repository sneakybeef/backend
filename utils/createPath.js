const path = require("path");

const createPath = (htmlSite) => path.join(__dirname, "/../../frontend/", `${htmlSite}.html`);

module.exports = { createPath };
