import { v4 as uuidv4 } from 'uuid'

let photos = [
	{
		url: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		urlCopy: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		addingPhotoDate: '14.01.2020',
		downloadDate: '14.01.2022',
	},
]

export const getPhotos = (req, res) => {
	res.send(photos)
}

export const createPhoto = (req, res) => {
	const photo = req.body

	photos.push({ ...photo, id: uuidv4() })

	res.send(`Photo with the ${photo.url} added to database!`)
}

export const getPhoto = (req, res) => {
	const { id } = req.params

	const foundPhoto = photos.find(photo => photo.id === id)

	res.send(foundPhoto)
}

export const deletePhoto = (req, res) => {
	const { id } = req.params

	photos = photos.filter(photo => photo.id !== id)

	res.send(`Photo deleteed with ${id} from database`)
}
