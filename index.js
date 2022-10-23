import express from 'express'
import bodyparser from 'body-parser'
import photosRoutes from './routes/photos.js'

const app = express()
const PORT = 5000

app.use(bodyparser.json()) 

app.use('/photos', photosRoutes)

app.get('/', (req, res) => res.send('hallo!')
)

app.listen(PORT, () => {
	console.log(`Server runing on port: https://localhost:${PORT}`)
})
