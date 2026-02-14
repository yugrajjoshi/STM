import React from 'react'

function TaskItem({ task, isActive, onSelectTask }) {
  return (
    <li 
      className={`task-item ${isActive ? 'active' : ''}`}
      onClick={() => onSelectTask(task.id)}
    >
      <span className="task-title">{task.title}</span>
      {task.deadline && <span className="deadline-badge">📅 {task.deadline}</span>}
    </li>
  )
}

export default TaskItem
