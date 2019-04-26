const addPage = require("./addpage");
const editPage = require("./editpage");
const error = require("./error");
const main = require("./main");
const userList = require("./userlist");
const userPages = require("./userpages");
const wikiPage = require("./wikipage");
const notFound = require("./notFound");
const serverError = require("./serverError");

module.exports = {
  addPage,
  editPage,
  error,
  main,
  userList,
  userPages,
  wikiPage,
  notFound,
  serverError
};
