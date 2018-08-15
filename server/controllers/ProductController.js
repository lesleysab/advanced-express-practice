let products = require("../products");

module.exports.list =  function list(req, res) {
    return res.json(products);
}
   module.exports.show =  function show(req, res) {
    const productID = products.find(product=> product._id==req.params._id)   
    return res.json(productID);
}
   let productID = 11;
   module.exports.create =  function create(req, res) {
        let newProduct = req.body;
        req.body._id  = productID;  
        productID ++        
        products.push(newProduct);
        return res.json(newProduct);
   
}
 
   module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }

   
   module.exports.remove =  function remove(req, res) {
    return res.json({});
   }

 
   