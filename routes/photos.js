import express from 'express'
import { createPhoto, getPhotos, getPhoto, deletePhoto, downloadPhoto, getPhotoDownloadStatus  } from '../controllers/photos.js'


const router = express.Router()


router.post('/', createPhoto)
 
router.get('/:id', getPhoto)
 
router.get('/', getPhotos)
 
router.delete('/:id', deletePhoto)
 
router.get('/download/:url', downloadPhoto)
 
router.get('/download/status/:id', getPhotoDownloadStatus)



export default router
