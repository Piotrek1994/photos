import { query } from 'express'
import { v4 as uuidv4 } from 'uuid'

let photos = [
	{
		url: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		urlCopy: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		addingPhotoDate: '14.01.2020',
		downloadDate: '14.01.2022',
		id: 1
	},
	{
		url: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		urlCopy: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		addingPhotoDate: '14.01.2020',
		downloadDate: '14.01.2022',
		id: 2
	},
	{
		url: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		urlCopy: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		addingPhotoDate: '14.01.2020',
		downloadDate: '14.01.2022',
		id: 3
	}
]

export const getPhotos = (req, res) => {
	const { ids: ids } = req.query
	const foundPhotos = photos.filter(({ id }) => ids?.includes(id))

	res.send(foundPhotos)
}

export const downloadPhoto = (req, res) => {
	const { url: url } = req.params
	const statusUrl = addPhotoToDownloadQue(url)

	res.send(statusUrl)
}

export const addPhotoToDownloadQue = (_url) => {
	// que download of photo

	const photoDownloadStatusUrl = "https://localhost:5000/photos/download/status/21312"
	return photoDownloadStatusUrl
}

export const getPhotoDownloadStatus = (req, res) => {
	const { id: downloadId } = req.params
	const status = checkPhotoDownloadStatus(downloadId)

	res.send({ downloadStatus: status })
}

export const checkPhotoDownloadStatus = (_downloadId) => {
	return "finished"
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

