let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
const app = express();
let bodyParser = require("body-parser");
   
app.use(bodyParser.json());



        app.get("/comments",function(req,res,next)
        {
        return res.json(comments);
        });
       
        app.get("/comment/:_id",function(req,res,next) {
            const commentID = comments.find(comment => comment._id==req.params._id)
            return res.json(commentID);
        });

        let commentID = 5;
        app.post("/comments",function(req,res,next)
        { 
            let newComment = req.body;
                     req.body._id  = commentID;  
                     commentID ++        
                     comments.push(newComment);
                     return res.json(newComment);
                    
        });
       




        
        app.get("/products",function(req,res,next)
        {
        return res.json(products);
        });
       
        app.get("/product/:_id",function(req,res,next)
        {
        const productID = products.find(product=> product._id==req.params._id)   
        return res.json(productID);
        });
        let productID = 11;
        app.post("/products",function(req,res,next)
        { 
            let newProduct = req.body;
                     req.body._id  = productID;  
                     productID ++        
                     products.push(newProduct);
                     return res.json(newProduct);
                    
        });


         




        app.get("/vehicles",function(req,res,next)
        {
        return res.json(vehicles);
        });
       
        app.get("/vehicle/:_id",function(req,res,next)
        { const vehicleID = vehicles.find(vehicle => vehicle._id ==req.params._id) 
            return res.json(vehicleID)
            });
        

        let VehicleID = 21;
        app.post("/vehicles",function(req,res,next)
        { 
            let newVehicle = req.body;
                     req.body._id  = VehicleID;  
                     VehicleID ++;        
                     vehicles.push(newVehicle);
                     return res.json(newVehicle);
                    
        });




        app.get("/contacts",function(req,res,next)
        {
        return res.json(contacts);
        });

        app.get("/contact/:_id",function(req,res,next) {
            const contactID = contacts.find(contact=>contact._id == req.params._id)
                return res.json(contactID);
            });
         

     let contactID = 6;
        app.post("/contacts",function(req,res)
        {
            let newContact = req.body;
            req.body._id = contactID;
            contactID ++
            contacts.push(newContact);
            return res.json(newContact);
        });

        app.listen(3001, (err) => {
                    if (err) {
                    return console.log("Error", err);
                }
                    console.log("Yo!");
        });


        