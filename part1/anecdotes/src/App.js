import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
    'Premature optimzation is the root of all evil',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debut it',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays of blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])

  const onVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVotes = () => {
    //find position of highest number in points array - call that position of anecdotes array
    let mostVotesAmount = 0
    let mostVotesPosition = 0
    for (let i = 0; i < points.length; i++) {
      if (points[i] > mostVotesAmount) {
        mostVotesAmount = points[i]
        mostVotesPosition = i
      }
    }
    return anecdotes[mostVotesPosition]
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={onVote} text="vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 7))} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{mostVotes()}</p>
    </div>
  )
}

export default App;