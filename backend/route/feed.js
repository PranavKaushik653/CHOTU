const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const supabase = require('../supabaseClient');
const upload = multer({ dest: 'uploads/' });
router.post("/",upload.single("file"),async(req,res)=>{
    try{
        const data=fs.readdirSync(req.file.path,"utf-8");
        const products=JSON.parse(data);

        const { error } = await supabase.from("products").insert(products);
        if (error) throw error;

         res.json({ message: "Feed uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to upload feed." });
  }
});

module.exports = router;