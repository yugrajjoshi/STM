import React, { useState } from 'react'
import SubtaskList from './SubtaskList'

function TaskDetails({ 
  selectedTask, 
  subtaskInput, 
  setSubtaskInput, 
  deadlineInput, 
  setDeadlineInput,
  onAddSubtask,
  onAddDeadline,
  onToggleSubtask,
  onDeleteSubtask,
  onRenameTask
}) {
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [editedTitle, setEditedTitle] = useState(selectedTask.title)

  const handleSaveTitle = () => {
    onRenameTask(editedTitle)
    setIsEditingTitle(false)
  }

  const handleCancelEdit = () => {
    setEditedTitle(selectedTask.title)
    setIsEditingTitle(false)
  }

  const handleSubtaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddSubtask()
    }
  }

  return (
    <section className="task-details">
      <h2>Task Details</h2>
      
      {/* Task Title with Edit Button */}
      <div className="details-section">
        {isEditingTitle ? (
          <div className="edit-title-group">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="edit-title-input"
              autoFocus
            />
            <button onClick={handleSaveTitle} className="save-title-btn">
              Save
            </button>
            <button onClick={handleCancelEdit} className="cancel-btn">
              Cancel
            </button>
          </div>
        ) : (
          <div className="title-display">
            <h3>{selectedTask.title}</h3>
            <button 
              onClick={() => setIsEditingTitle(true)}
              className="rename-btn"
            >
              ✏️ Rename
            </button>
          </div>
        )}
      </div>

      {/* Deadline Section */}
      <div className="details-section">
        <label>Set Deadline</label>
        <div className="deadline-input-group">
          <input
            type="date"
            value={deadlineInput}
            onChange={(e) => setDeadlineInput(e.target.value)}
            className="deadline-input"
          />
          <button onClick={onAddDeadline} className="set-btn">
            Set Deadline
          </button>
        </div>
        {selectedTask.deadline && (
          <p className="deadline-display">📅 Deadline: {selectedTask.deadline}</p>
        )}
      </div>

      {/* Subtasks Section */}
      <div className="details-section">
        <label>Add Subtasks</label>
        <div className="subtask-input-group">
          <input
            type="text"
            placeholder="Enter a subtask..."
            value={subtaskInput}
            onChange={(e) => setSubtaskInput(e.target.value)}
            onKeyPress={handleSubtaskKeyPress}
            className="subtask-input"
          />
          <button onClick={onAddSubtask} className="add-subtask-btn">
            Add
          </button>
        </div>

        <SubtaskList 
          subtasks={selectedTask.subtasks}
          onToggleSubtask={onToggleSubtask}
          onDeleteSubtask={onDeleteSubtask}
        />
      </div>
    </section>
  )
}

export default TaskDetails
