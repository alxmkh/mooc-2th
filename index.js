const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
morgan.token('post-body', (request)  => {
    return JSON.stringify(request.body) ? JSON.stringify(request.body) : null
})
app.use(morgan(':method :url :status :total-time - :response-time ms :post-body'))
app.use(cors())
app.use(express.static('build'))
const PORT = process.env.PORT || 3001

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-345345-345",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "123-432-12344-231",
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "123-3333-2113-22",
    }
]

app.get('/info', (request, response) => {
    const count = persons.length
    const currentDate = new Date()
    const body = `
        <p>Phonebook has info for ${count} people</p>
        <p>${currentDate}</p>
    `
    response.send(body);
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end();
})

app.put('/api/persons/:id',(request, response) => {
    const id = Number(request.params.id);
    const findedPerson = persons.find(person => person.id === id);
    let currentPerson = request.body;
    if (!findedPerson) {
        return response.status(400).json({
            error: 'object not found'
        })
    }
    persons = persons.map(person => person.id === currentPerson.id ? currentPerson : person);
    response.json(currentPerson);
})

app.post('/api/persons/', (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: `name: ${body.name} or number: ${body.number} missing`
        })
    }

    const personsCheck = persons.find(person => person.name === body.name)

    if (personsCheck) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: Math.floor(Math.random() * Math.floor(9999)),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    response.json(person)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})