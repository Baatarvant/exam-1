const Lists = require("../models/Lists")

exports.main = async (request, response) => {
    try {
        response.send("todo list backend")
    } catch (error) {
        response.status().send({ message: error.message });
    }
};
exports.test = async (request, response) => {
    try {
        response.send("this is test endpoint")
    } catch (error) {
        response.status().send({ message: error.message });
    }
};

exports.getLists = async (request, response) => {
    try {
        const lists = await Lists.find();
        response.send(lists);
    } catch (error) {
        response.status().send({ message: error.message });
    }
};
exports.createList = async (request, response) => {
    const lists = request.body;
    try {
        const ListData = await Lists.create(lists);
        response.send(ListData);
    } catch (error) {
        response.status(500).send({ message: "Failed to create" + error.message });
    }
};
exports.deleteLists = async (request, response) => {
    const _id = request.params.id;
    const lists = request.body;
    try {
        const deletedListData = await Lists.findByIdAndDelete({ _id }, lists);
        response.send("deleted " + _id);
    } catch (error) {
        response
            .status(400)
            .send({ message: "Failed to delete" + "" + error.message });
    }
};

exports.updateLists = async (request, response) => {
    const lists = request.body;
    const _id = request.params.id;
    try {
        const ListData = await Lists.findByIdAndUpdate({ _id }, lists);
        response.send(ListData);
    } catch (error) {
        response.status(400).send({ message: "Failed to update" + error.message });
    }
};
exports.checkLists = async (request, response) => {
    const lists = request.body;
    const _id = request.params.id;
    try {
        const ListData = await Lists.findByIdAndUpdate({ _id }, lists);
        response.send(ListData);
    } catch (error) {
        response.status(400).send({ message: "Failed to update" + error.message });
    }
};

exports.count = async (request, response) => {
    try {
        const count = await Lists.count({ isDone: true });
        response.send({count});
    } catch (error) {
        response.status(400).send({ message: "Failed to update" + error.message });
    }
};