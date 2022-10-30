const deleteFile = require('../utils')
const { Image } = require('../models/images')

const createImage = async (req,res,_next) => {
    try{
        let profile = req.body.profileImage;
        if(req.file) {
            profile = req.file.path.replace("\\", "/");
        }
        const fileUpload = {
            profile: profile
        }
        const upload = new Image(fileUpload);
        const result = await upload.save();
        res
        .status(201)
        .json({ message : "Image upload successfully!", data: result, status: 1});
    }
    catch(err){
        res.send("An error occured");
        console.log(err)
    }
};

const editImage = async (req,res,_next) => {
 try{
    const img =  await Image.findById(req.params.id);
    let profile = req.body.profileImage;
    if(req.file) {
        profile = req.file.path.replace("\\", "/");
    }
    if(img.profile && img.profile != profile) {
        deleteFile(img.profile);
    }
    img.profile = profile;
    const result = await img.save();
    res.json({
        message: "Image updated successfully!",
        data: result
    });
 } catch(err){
    res.send("An error occured");
    console.log(err)
 }
}
module.exports = { createImage, editImage }
