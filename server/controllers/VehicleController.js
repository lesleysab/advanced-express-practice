let vehicles = require("../vehicles");

module.exports.list =  function list(req, res) {
    return res.json(vehicles);
}
       
   module.exports.show =  function show(req, res) {
    const vehicleID = vehicles.find(vehicle => vehicle._id ==req.params._id) 
    return res.json(vehicleID)
}

   let VehicleID = 21;
   module.exports.create =  function create(req, res) {
      
    let newVehicle = req.body;
    req.body._id  = VehicleID;  
    VehicleID ++;        
    vehicles.push(newVehicle);
    return res.json(newVehicle);
   
}

 
   module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }

   
   module.exports.remove =  function remove(req, res) {
    return res.json({});
   }

 
   