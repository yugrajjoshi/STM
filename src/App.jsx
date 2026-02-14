import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddTaskSection from './components/AddTaskSection'
import TaskList from './components/TaskList'
import TaskDetails from './components/TaskDetails'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [subtaskInput, setSubtaskInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: inputValue,
        completed: false,
        subtasks: [],
        deadline: '',
      }
      setTasks([...tasks, newTask])
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  const handleSelectTask = (taskId) => {
    setSelectedTaskId(taskId)
    setSubtaskInput('')
    const task = tasks.find(t => t.id === taskId)
    setDeadlineInput(task?.deadline || '')
  }

  const handleAddSubtask = () => {
    if (subtaskInput.trim() !== '' && selectedTaskId) {
      setTasks(tasks.map(task => {
        if (task.id === selectedTaskId) {
          return {
            ...task,
            subtasks: [...(task.subtasks || []), { id: Date.now(), text: subtaskInput, completed: false }]
          }
        }
        return task
      }))
      setSubtaskInput('')
    }
  }

  const handleAddDeadline = () => {
    if (deadlineInput && selectedTaskId) {
      setTasks(tasks.map(task => {
        if (task.id === selectedTaskId) {
          return { ...task, deadline: deadlineInput }
        }
        return task
      }))
    }
  }

  const handleDeleteSubtask = (subtaskId) => {
    if (selectedTaskId) {
      setTasks(tasks.map(task => {
        if (task.id === selectedTaskId) {
          return {
            ...task,
            subtasks: task.subtasks.filter(st => st.id !== subtaskId)
          }
        }
        return task
      }))
    }
  }

  const handleToggleSubtask = (subtaskId) => {
    if (selectedTaskId) {
      setTasks(tasks.map(task => {
        if (task.id === selectedTaskId) {
          return {
            ...task,
            subtasks: task.subtasks.map(st => 
              st.id === subtaskId ? { ...st, completed: !st.completed } : st
            )
          }
        }
        return task
      }))
    }
  }

  const handleRenameTask = (newTitle) => {
    if (selectedTaskId && newTitle.trim() !== '') {
      setTasks(tasks.map(task => {
        if (task.id === selectedTaskId) {
          return { ...task, title: newTitle }
        }
        return task
      }))
    }
  }

  const selectedTask = tasks.find(t => t.id === selectedTaskId)

  return (
    <>
      <Header />

      <div className="container">
        <AddTaskSection 
          inputValue={inputValue}
          setInputValue={setInputValue}
          onAddTask={handleAddTask}
          onKeyPress={handleKeyPress}
        />

        <div className="main-content">
          <TaskList 
            tasks={tasks}
            selectedTaskId={selectedTaskId}
            onSelectTask={handleSelectTask}
          />

          {selectedTask && (
            <TaskDetails 
              selectedTask={selectedTask}
              subtaskInput={subtaskInput}
              setSubtaskInput={setSubtaskInput}
              deadlineInput={deadlineInput}
              setDeadlineInput={setDeadlineInput}
              onAddSubtask={handleAddSubtask}
              onAddDeadline={handleAddDeadline}
              onToggleSubtask={handleToggleSubtask}
              onDeleteSubtask={handleDeleteSubtask}
              onRenameTask={handleRenameTask}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App