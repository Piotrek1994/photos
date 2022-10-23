import express from 'express'
import { createPhoto, getPhotos, getPhoto, deletePhoto } from '../controllers/photos.js'


const router = express.Router()


router.get('/', getPhotos)

router.post('/', createPhoto)

router.get('/:id', getPhoto)

router.delete('/:id', deletePhoto)


export default router
