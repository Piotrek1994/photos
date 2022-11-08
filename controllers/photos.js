import { query } from 'express'
import { v4 as uuidv4 } from 'uuid'

let photos = [
	{
		url: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		urlCopy: 'https://pixabay.com/pl/photos/morze-fale-natura-lekki-ocean-7484743/',
		addingPhotoDate: '10.05.2010',
		downloadDate: '14.01.2015',
		id: 1
	},
	{
		url: 'https://www.istockphoto.com/pl/zdj%C4%99cie/ocean-wave-gm104669275-13199364',
		urlCopy: 'https://www.istockphoto.com/pl/zdj%C4%99cie/ocean-wave-gm104669275-13199364',
		addingPhotoDate: '01.01.2000',
		downloadDate: '12.01.2002',
		id: 2
	},
	{
		url: 'https://www.istockphoto.com/pl/zdj%C4%99cie/delektuj%C4%85c-si%C4%99-koktajlem-przy-basenie-gm950688808-259497731',
		urlCopy: 'https://www.istockphoto.com/pl/zdj%C4%99cie/delektuj%C4%85c-si%C4%99-koktajlem-przy-basenie-gm950688808-259497731',
		addingPhotoDate: '12.05.2010',
		downloadDate: '25.08.2012',
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

//komentarz 