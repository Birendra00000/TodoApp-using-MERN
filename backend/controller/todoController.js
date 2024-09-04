const todoItems = require("../model/todoModel");
const User = require("../model/userModel");
const fs = require("fs"); // Import fs with promises support

exports.createTodo = async (req, res) => {
  try {
    const file = req.file;
    console.log(file);
    let filePath;

    if (!file) {
      filePath = "";
    } else {
      filePath = req.file.filename;
    }

    const { title, description, date, priority } = req.body;
    console.log(req.body);
    if (!title || !description || !date || !priority) {
      return res.status(400).json({
        message: "Pleased fill out the form",
      });
    }

    // const emailChecked = await User.findOne({ userEmail: email });

    // if (!emailChecked) {
    //   return res.status(404).json({
    //     message: "User not found",
    //   });
    // }

    const todoCreate = await todoItems.create({
      todoTitle: title,
      todoDescription: description,
      todoDate: date,
      todoPriority: priority,
      todoImage: process.env.URL + filePath,
      // user: emailChecked._id,
    });

    res.status(200).json({
      message: "Todo created succefully",
      data: todoCreate,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//Update Todo

exports.updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title, description, date, priority } = req.body;
    console.log(req.body.title);
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.date);
    console.log(req.body.priority);

    //  Validate required fields
    // if (!title || !description || !date || !priority) {
    //   return res.status(400).json({
    //     message: "Please fill out the form completely",
    //   });
    // }

    const todoExist = await todoItems.findById(todoId);

    if (!todoExist) {
      return res.status(400).json({
        message: "Pleased provide valid Todo",
      });
    }

    const oldTodoImage = todoExist.todoImage;
    const lengthCut = process.env.URL;
    const finalImagePathAfterCut = oldTodoImage.slice(lengthCut); //icon.consloe.png
    console.log(finalImagePathAfterCut);

    if (req.file && req.file.filename) {
      // REMOVE FILE FROM UPLOADS FOLDER
      fs.unlink("./uploads/" + finalImagePathAfterCut, (err) => {
        if (err) {
          console.log("error deleting file", err);
        } else {
          console.log("file deleted successfully");
        }
      });
    }

    const todoUpdate = await todoItems.findByIdAndUpdate(
      todoId, //for taking todo unique id

      {
        $set: {
          todoTitle: title,
          todoDescription: description,
          todoDate: date,
          todoPriority: priority,
          todoImage:
            req.file && req.file.filename
              ? process.env.URL + req.file.filename
              : oldTodoImage,
        },
      },
      { new: true } //The { new: true } option ensures that the updated document is returned.
    );

    res.status(200).json({
      message: "Todo updated succeffully",
      data: todoUpdate,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//Delete Todo

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!todoId) {
      return res.status.json({
        message: "Pleased provide Id",
      });
    }
    console.log(todoId);

    const todoExist = await todoItems.findById(todoId);

    if (!todoExist) {
      return res.status(400).json({
        message: "User not found with that Id",
      });
    }

    const oldTodoImage = todoExist.todoImage;

    const lengthCut = process.env.URL.length;

    const finalImagePathAfterCut = oldTodoImage.slice(lengthCut); //icon.consloe.png
    console.log(finalImagePathAfterCut);

    fs.unlink("./uploads/" + finalImagePathAfterCut, (error) => {
      if (error) {
        console.log("Error deleting file", error);
      } else {
        console.log("File deleted successfully");
      }
    });

    const todoCreate = await todoItems.findByIdAndDelete(
      todoId //for taking todo unique id
    );

    res.status(200).json({
      message: "Todo deleted succeffully",
      data: todoCreate,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//getAlltodo
exports.getTodo = async (req, res) => {
  const todoId = req.params.id;

  const todo = await todoItems.find();
  if (todo.length > 0) {
    res.status(200).json({
      message: "Successfully fetched todo data",
      data: todo,
    });
  } else {
    res.status(404).json({
      message: "Todo not found",
    });
  }
};

//getSingleTodo

exports.getSingleTodo = async (req, res) => {
  const todoId = req.params.id;

  const todo = await todoItems.findById(todoId);
  console.log("todo", todo);

  if (todo) {
    res.status(200).json({
      message: "Successfully fetched todo data",
      data: todo,
    });
  } else {
    res.status(404).json({
      message: "Todo not found",
    });
  }
};

//For searching todoItems using Title

exports.getSearchTodo = async (req, res) => {
  try {
    const { title } = req.query;

    // Build the search query based on provided parameters
    const searchQuery = {};

    if (title) {
      searchQuery.todoTitle = { $regex: new RegExp(title, "i") }; // Case-insensitive search
    }
    const todos = await todoItems.find(searchQuery);

    if (todos.length > 0) {
      res.status(200).json({
        message: "Successfully fetched search results",
        data: todos,
      });
    } else {
      res.status(404).json({
        message: "No todos found matching the search criteria",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "An error occurred while searching for todos",
    });
  }
};
