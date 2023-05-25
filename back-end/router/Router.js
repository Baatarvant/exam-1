const express = require("express");
const router = express.Router();
const {
    main,
    test,
    getLists,
    createList,
    deleteLists,
    updateLists,
    checkLists,
    count

} = require("../controller/controller");

router
    .get("/", main)
    .get("/test", test)
    .get("/list", getLists)
    .post("/add", createList)
    .delete('/delete/:id', deleteLists)
    .patch('/update/:id', updateLists)
    .patch('/checked/:id', checkLists)
    .get('/count', count)
module.exports = router;