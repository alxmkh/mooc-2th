const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()
app.use(express.json())
morgan.token('post-body', (request) => {
    return JSON.stringify(request.body) ? JSON.stringify(request.body) : null
})
app.use(morgan(':method :url :status :total-time - :response-time ms :post-body'))
app.use(cors())
app.use(express.static('build'))
const PORT = process.env.PORT || 3001

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id)
        .then(note => {
            response.json(note)
        })
        .catch(error => console.log(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => {

            next(error)
        })
})

app.put('/api/persons/:id', (request, response, next) => {

    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedNote => {
            response.json(updatedNote.toJSON())
        })
        .catch(error => {

            next(error)
        })
})

app.post('/api/persons/', (request, response, next) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: `name: ${body.name} or number: ${body.number} missing`
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save()
        .then(savedPerson => {
            response.json(savedPerson.toJSON())
        })
        .catch(err => {
            next(err)
        })
    /*
    Person.find({}).then(persons => {
        return persons.find(person => person.name === body.name)
    }).then(person => {
        if (person) {
            response.status(400).json({
                error: 'name is not unique'
            })
        } else {
            const person = new Person({
                name: body.name,
                number: body.number
            })
            person.save().then(savedPerson => {
                response.json(savedPerson);
            })
        }
    }).catch(error => {
        console.log('Error: ', error)
    })
    */
})

const errorHandler = (error, request, response, next) => {
    console.error('Info about error: ',error.message)

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})