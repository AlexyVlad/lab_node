import express from 'express'
import _ from 'lodash'

const app = express()
const PORT = 8000
const furnitures = [
    {
        id: 1,
        name: "«King» Savana",
        color: "Шоколадный",
        width: 250,
        height: 82,
        deep: 115
    },
    {
        id: 2,
        name: "Кресло «Волана» Swiss velvet 02",
        color: "Бирюзовый",
        width: 84,
        height: 75,
        deep: 76
    },
    {
        id: 3,
        name: "Кровать «Титан Лофт 90»",
        color: "Белый",
        width: 198,
        height: 80,
        deep: 96
    },
    {
        id: 4,
        name: "Компьютерный стол «Маркос» с подъемным механизмом",
        color: "Белый",
        width: 75,
        height: 75,
        deep: 120
    },
    {
        id: 5,
        name: "Прикроватная тумба «Верона»",
        color: "Синий",
        width: 41,
        height: 44,
        deep: 41
    }
]

app.use(express.json())

app.get('/furnitures/', (req, res) => {
    res.status(200).json(furnitures)
})

app.get('/furnitures/:id', (req, res) => {
    const furniture = furnitures.find(furniture => furniture.id == req.params.id)

    if (_.isUndefined(furniture)) {
        res.status(404).json('Good does not exist')
    }

    res.status(200).json(furniture)
})

app.post('/furnitures/', (req, res) => {
    const newFurniture = {
        id: _.last(furnitures).id + 1,
        name: req.body.name,
        color: req.body.color,
        width: req.body.width,
        height: req.body.height,
        deep: req.body.deep
    }

    furnitures.push(newFurniture)

    res.json(newFurniture)
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
