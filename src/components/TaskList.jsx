import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, selectedTaskId, onSelectTask }) {
  return (
    <section className="tasks-section">
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Create one to get started!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem 
              key={task.id}
              task={task}
              isActive={selectedTaskId === task.id}
              onSelectTask={onSelectTask}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList
