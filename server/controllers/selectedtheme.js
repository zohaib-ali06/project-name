const ThemeModel = require('../models/GHL_Themes/themes.js');
const LocThemeModel = require('../models/GHL_Themes/LocThemes.js');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload=multer({dest:'uploads/'})


exports.genre_list = async function (req, res) {

const theme_name=req.body.theme_name;
const loc_id=req.body.loc_id;
    const cssfile= await fs.readFileSync(`./public/css/${theme_name}.css`);

    var final= cssfile.toString();

    const jsfile= await fs.readFileSync(`./public/js/hello.js`);

    var replace= jsfile.toString();
    const final1 = replace.replaceAll('custom', `${loc_id}`);


    // const dirpath=path.join(,"loc_idFiles")

    fs.writeFile(`./public/loc_id/${loc_id}.css`, `${final}`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

      fs.writeFile(`./public/js/${loc_id}.js`, `${final1}`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

    // console.log(final);

    res.send(req.body);
    // try {
    //     console.log(req.body);


    //     var Theme = new LocThemeModel({

    //         loc_id: req.body.loc_id,
    //         theme_id: req.body.theme_name
    //     })

    //     Theme.save()
    // } catch (error) {

    //     console.log(error);
    // }

    // const id='62bec8a91b408e9876fbb7cd';
    // const result= await ThemeModel.findByIdAndUpdate(id,
    // {$set: { "name" : "Theme E"}})
    // console.log(result);


};


getdata = async function (req, res) {

    const final= fs.readFileSync("http://localhost:8000/public/css/custom.css");

    final= file.toString();
    console.log(final);
    // res.send('final');



};

exports.insertThemes = async function (req, res) {
    const Storage = multer.diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    });

    const upload = multer({

        storage: Storage

    }).single('testimg')
    try {
        console.log(req.body);

        const css_path = `./public/css/${req.body.css_path}.css`;

        var Theme = new ThemeModel({

            name: req.body.name,
            css_path: css_path,
            type: req.body.type,
            description: req.body.description,
            img_path: req.body.img_path
        })

        Theme.save()
    } catch (error) {

        console.log(error);
    }

    res.send(req.body);


};


exports.getThemesData = async function (req, res) {

    const result = await ThemeModel.find()
    // console.log(result);
    res.send(result);

}

exports.imgupload = async function (req, res) {

   

}





