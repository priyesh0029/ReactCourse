const multer= require('multer');

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
  

  const editedStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


module.exports={
    uploads:multer({storage:Storage}).array('Image',1),
    editeduploads:multer({storage:editedStorage}).fields([
        {name:'image1',maxCount:1},
    ]),

}