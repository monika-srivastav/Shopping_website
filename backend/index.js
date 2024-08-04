const express = require("express"); // initialize
const port = 4000;
const app = express()
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path")
const cors = require("cors");//to provde the access to react project


app.use(express.json()) ///WITH THE HELP OF THIS EXPRESS.JSON WHATEVER REQUEST WE WILL GET FROM RESPONSE WILL BE AUTOMATICALLY PASSES THROUGH JSON
app.use(cors());

// DATABASE CONNECTION WITH MONGODB
mongoose.connect('mongodb://localhost:27017/ecommerce');

// mongoose.connect("mongodb+srv://srivastavmonika:12345678m@cluster0.vzcndrf.mongodb.net/E-commerce")

//API CREATION

app.get("/", (req, res) => {
    res.send("express app is running")
})







//// Image STORAGE ENGINE

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

//CREATING UPLOAD ENDPOINT FOR IMAGES

app.use('/images', express.static('upload/images'))           //TO PROVIDE IMG URL CREATE THIS
app.post("/upload", upload.single('product'), (req, res) => {

    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


////schema for creating proucts

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    avilable: {
        type: Boolean,
        default: true,
    },
})

app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,

        old_price: req.body.old_price,
        new_price: req.body.new_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name
    })
})


////CREATING API FOR DELETING PRODUCTS

app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})



///////CREATING API FOR GETTING ALL PRODUCTS

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
})



////SCHEMA CREATING FOR USER MODEL

const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

///CREATING ENDPOINT FOR REGISTERING THE USER
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: 'existing user found with same email address' })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        cartData: cart,
    })
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
})

///CREATING ENDPOINT FOR USER LOGIN 

app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, errors: "wrong password" })
        }
    }
    else {
        res.json({ success: false, errors: "wrong email id" })
    }
})


/////CREATING ENDPOINTS FOR NEWCOLLECTION DATA
app.get("/newcollections", async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("newcollection fetched");
    res.send(newcollection);
})
/////CREATING ENDPOINTS FOR popular DATA
app.get("/popularinwomen", async (req, res) => {
    let products = await Product.find({ category: "women" });
    let popular_in_women = products.slice(0, 4);
    console.log("popular in women fetched");
    res.send(popular_in_women);
})
/////CREATING ENDPOINTS FOR related DATA
app.get("/relatedproduct", async (req, res) => {
    let Men = await Product.find({ category: "men" });
    let Women = await Product.find({ category: "women" });
    let kid = await Product.find({ category: "kid" });
   if(Men===Men){
    let related_product = Men.slice(0, 4);
    console.log("related product fetched");
    res.send(related_product);
   }
   else if( Product.find({ category: "women" })){
    let related_product = Women.slice(0, 4);
    console.log("related product fetched");
    res.send(related_product);
   }
   else{
    let related_product = kid.slice(0, 4);
    console.log("related product fetched");
    res.send(related_product);
   }
    
   
})


////CREATING MIDDWARE TO FETCH USER

const fetchUser = async (req, res, next) => {

    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "please authenticate using valid token " })
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "please authenticate using valid token" })
        }
    }

}

////////////CREATING ENDPOINT FOR ADDING PRODUCTS IN CARTDATA
app.post('/addtocart', fetchUser, async (req, res) => {
    console.log("Added", req.body);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send('added')
})

////////////CREATING ENDPOINT FOR remove PRODUCTS FROM CARTDATA
app.post('/removefromcart ', fetchUser, async (req, res) => {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData});
        res.send('removed')


})



////////CREATING ENDPOINT  TO GET CART DATA
app.post('/getcart ', fetchUser, async (req, res) => {
    console.log("getcart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);

})



app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port" + port)
    }
    else {
        console.log("Error: " + error)
    }
})

