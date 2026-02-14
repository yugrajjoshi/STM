import React from 'react'

function AddTaskSection({ inputValue, setInputValue, onAddTask, onKeyPress }) {
  return (
    <section className="add-task-section">
      <h2>Create New Task</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={onKeyPress}
          className="task-input"
        />
        <button onClick={onAddTask} className="add-btn">
          Add Task
        </button>
      </div>
    </section>
  )
}

export default AddTaskSection
