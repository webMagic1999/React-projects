function Modal({ dispatch, newToDo, toDos }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button
          className="close-modal"
          onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="modal-content">
          <h2>Add Your To-Do</h2>
          {/* Task Input */}
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Write your title..."
              value={newToDo.title}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "title",
                  value: e.target.value
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                })
              }
            />
          </div>

          {/* Priority Dropdown */}
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            {/* Priority Dropdown */}
            <select
              id="priority"
              name="priority"
              value={newToDo.priority}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "priority",
                  value:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1),
                })
              }
            >
              <option value="Top">Top</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Status (Percentage Progress) */}
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={newToDo.status}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "status",
                  value:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1),
                })
              }
            >
              <option value="Just Added">Just Added</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Date Added & Due Date */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="datetime-local"
                id="dueDate"
                name="dueDate"
                value={newToDo.dueDate}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "dueDate",
                    value: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            {/* Category Dropdown */}
            <select
              id="category"
              name="category"
              value={newToDo.category}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "category",
                  value:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1),
                })
              }
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Health">Health</option>
              <option value="Learning">Learning</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Additional Note */}
          <div className="form-group">
            <label htmlFor="notes">Additional Note</label>
            <textarea
              id="notes"
              name="notes"
              cols="30"
              rows="4"
              placeholder="Write any additional details..."
              value={newToDo.notes}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "notes",
                  value:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1),
                })
              }
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "ADD_TODO" });
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
