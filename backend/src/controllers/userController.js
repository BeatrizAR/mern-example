const userCtrl = {}

const User = require('../models/user')

userCtrl.getUser = async (req,res) => {
    console.log(req.body)
    const {email,password} = req.body
    const emailU = await User.findOne({email: email})
    console.log(emailU)
    if(emailU){
        //console.log("la contraseña es ", emailU.password)
        if(password == emailU.password){
            // res.redirect('/inicio')
            // res.send("Inicio");
            res.json({success:true})
        }else{
            console.log("Contraseña inconrrecta")
            res.json({success:false})
        }

    }else{
        console.log("el usuario no existe!!")
        res.json({success:false})
    }
}

userCtrl.createUser = async (req,res) => {
    console.log(req.body)
    let errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        console.log("las contraseñas no coinciden")
        errors.push({ text: "La contraseña no coincide." });
        res.json({success:false})
    }
    if (password.length < 4) {
        errors.push({ text: "La contraseña debe ser mayor a 4 caracteres." });
        res.json({success:false})
    }
    if (errors.length > 0) {
        //res.json({message: ''})
        res.json({success:false})
       
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
          //res.send("El correo ya esta registrado.");
          res.json({success:false})
        } else {
          const newUser = new User({ name, email, password });
          //newUser.password = await newUser.encryptPassword(password);
          newUser.save();
          //res.send( "Registro exitoso!");
          res.json({success:true})
        }
    }
}


module.exports = userCtrl