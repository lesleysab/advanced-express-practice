let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let commentID = 5;
let productID = 11;
let VehicleID = 21;

const app = express();
let bodyParser = require("body-parser");
    app.use(bodyParser.json());

        app.get("/comments",function(req,res,next)
        {
        return res.json(comments);
        });
       
        app.get("/comment/:_id",function(req,res,next)
        {
        const commentID = comments.find(user=> user._id==req.params._id)   
        return res.json(commentID);
        });

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
        const productID = products.find(user=> user._id==req.params._id)   
        return res.json(productID);
        });

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
        {
        const vehicleID = vehicles.find(user=> user._id==req.params._id)   
        return res.json(vehicleID);
        });

        app.post("/vehicles",function(req,res,next)
        { 
            let newVehicle = req.body;
                     req.body._id  = VehicleID;  
                     VehicleID ++        
                     vehicles.push(newVehicle);
                     return res.json(newVehicle);
                    
        });
        app.get("/contacts",function(req,res,next)
        {
        return res.json(contacts);
        });

        app.get("/contact/:id",function(req,res,next)
        {
        return res.json(contacts[req.params.id]);
        });


        app.post("/contacts",function(req,res,next)
        { 
            let newContact = req.body;
            
                     contacts.push(newContact);
                     res.json(newContact);
        });  

        app.post("/contact",function(req,res)
        {
            req.body.id = 1;
            contacts.push(req.body);
            return res.send(req.body);
        });










        app.listen(3001, (err) => {
                    if (err) {
                    return console.log("Error", err);
                }
                    console.log("Yo!");
        });


        