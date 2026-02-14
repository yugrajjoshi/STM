import React from 'react'
import SubtaskItem from './SubtaskItem'

function SubtaskList({ subtasks, onToggleSubtask, onDeleteSubtask }) {
  if (!subtasks || subtasks.length === 0) {
    return null
  }

  return (
    <ul className="subtask-list">
      {subtasks.map((subtask) => (
        <SubtaskItem
          key={subtask.id}
          subtask={subtask}
          onToggleSubtask={onToggleSubtask}
          onDeleteSubtask={onDeleteSubtask}
        />
      ))}
    </ul>
  )
}

export default SubtaskList
