import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // todos: [] as Todo[],
    // selectedItems: [] as string[],
    // isEdit: false,
    // todoToUpdate: undefined as Todo | undefined,
  },
  reducers: {
    // handleBulkDeletion(state) {
    //   const newTodos = state.todos.filter(
    //     (todo) => !state.selectedItems.includes(todo.id)
    //   );
    //   state.todos = newTodos;
    //   state.selectedItems = [];
    // },
    // handleCheckTodo(state, action) {
    //   const { id, checked } = action.payload;
    //   if (checked) {
    //     state.selectedItems = [...state.selectedItems, id];
    //   } else {
    //     state.selectedItems = state.selectedItems.filter((item) => item !== id);
    //   }
    // },
    // handleAddTodo(state, action) {
    //   const newTask: Todo = {
    //     text: action.payload,
    //     isCompleted: false,
    //     id: uuidv4(),
    //   };
    //   state.todos.push(newTask);
    // },
    // handleOnChange(state, action) {
    //   const newTodos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         isCompleted: !todo.isCompleted,
    //       };
    //     }
    //     return todo;
    //   });
    //   state.todos = newTodos;
    // },
    // handleDeleteTodo(state, action) {
    //   const index = state.todos.findIndex((todo) => todo.id === action.payload);
    //   if (index !== -1) {
    //     state.todos.splice(index, 1);
    //   }
    // },
    // handleEditText(state, action) {
    //   const { id, newText } = action.payload;
    //   state.todoToUpdate = state.todos.find((todo) => todo.id === id);
    //   if (state.todoToUpdate) {
    //     state.todoToUpdate.text = newText || state.todoToUpdate.text;
    //   }
    // },
    // handleEditTodo(state, action) {
    //   const editedTodo = action.payload;
    //   const index = state.todos.findIndex((todo) => todo.id === editedTodo.id);
    //   if (index !== -1) {
    //     state.todos[index] = editedTodo.text;
    //   }
    //   state.isEdit = !state.isEdit;
    // },
  },
});

export const {
  // handleBulkDeletion,
  // handleCheckTodo,
  // handleAddTodo,
  // handleOnChange,
  // handleDeleteTodo,
  // handleEditText,
  // handleEditTodo,
} = userSlice.actions;

export default userSlice.reducer;
