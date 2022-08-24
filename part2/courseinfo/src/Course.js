import React from "react";

const Part = ({ part }) => <div>{part.name} {part.exercises}</div>

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => part.exercises + sum, 0)

  return (
    <div>
      {parts.map(part =>
        <div>
          <Part key={part.id} part={part} />
        </div>
      )}
      <h3>total of {total} exercises</h3>
    </div>
  )
}

const Header = ({ header }) => <h1>{header}</h1>

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course