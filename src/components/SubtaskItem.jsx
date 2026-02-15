import React from 'react'

function SubtaskItem({ subtask, onToggleSubtask, onDeleteSubtask }) {
  return (
    <li className="subtask-item">
      <input
        type="checkbox"
        checked={subtask.completed}
        onChange={() => onToggleSubtask(subtask.id)}
        className="subtask-checkbox"
      />
      <span className={subtask.completed ? 'completed' : ''}>{subtask.text}</span>
      <button 
        onClick={() => onDeleteSubtask(subtask.id)}
        className="delete-subtask-btn"
      >
        ✕
      </button>
    </li>
  )
}
export default SubtaskItem
