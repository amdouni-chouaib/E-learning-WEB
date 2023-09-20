const express = require('express');
const router = express.Router();
const Pdf = require('../model/Pdf');
const jwt = require('jsonwebtoken');
const multer = require('multer');


filename = '';
const mystorage = multer.diskStorage({

    destination:'./uploads',
    filename: (req, file , redirect)=>{
        let date = Date.now();
        let fl= file.originalname;
        redirect(null, fl);
        filename = fl;
    }
})
const upload = multer({storage:mystorage})
router.post("/uploadpdf", upload.any("pdfFile"), (req, res) => {
    try {
      let data = req.body;
      let pdf = new Pdf(data);
      pdf.date = new Date();
      pdf.pdfFile = filename;
      pdf.tags = data.tags?.split(",");
      pdf
        .save()
        .then((savedPdf) => {
          // filename = req.body.pdfFile;
          req.body;
          res.status(200).send(savedPdf);
        })
        .catch((err) => {
          res.status(400).json({error:"Error While Adding the file"});
        });

        const token = jwt.sign(userdata, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token:token,role:userdata.role });
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/getpdfbyid/:id' , (req,res)=>{
    id = req.params.id;

    Pdf.findByName ({_id: id})
   .then(
       (pdf)=>{
       res.status(200).send(pdf);
   })
   .catch(
       (err)=>{
       res.status(400).send(err);
   }
   )
})




router.delete('/deletepdf/:id', (req,res)=>{
    id = req.params.id;

   Pdf.findOneAndDelete({_id: id})
   .then(
    (deletedPdf)=>{
        res.status(200).send(deletedPdf);
        }
   )
   .catch(
    (err)=>{
        res.status(400).send(err)
    }
   )

})


module.exports = router;
