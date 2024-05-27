const todoItems = require("../model/todoModel");
const User = require("../model/userModel");

exports.createTodo = async (req, res) => {
  try {
    // const { title, description,email } = req.body;

    const { title, description } = req.body;
    console.log(req.body);

    if (!title || !description) {
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
    const { title, description } = req.body;
    console.log(req.body);

    if (!title || !description) {
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

    const todoCreate = await todoItems.findByIdAndUpdate(
      todoId, //for taking todo unique id
      {
        $set: {
          todoTitle: title,
          todoDescription: description,
        }, //For updating specific items
      },
      { new: true } //The { new: true } option ensures that the updated document is returned.
    );

    res.status(200).json({
      message: "Todo updated succeffully",
      data: todoCreate,
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
