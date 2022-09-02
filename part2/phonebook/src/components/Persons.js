const Persons = ({ persons }) => {
    return (
        <div>
            <ul id="persons">
                {persons.map(person =>
                    <li key={person.id}>{person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Persons