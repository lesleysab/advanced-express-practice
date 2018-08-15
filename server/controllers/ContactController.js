let contacts = require("../contacts");

module.exports.list =  function list(req, res) {
        return res.json(contacts);
   }
   module.exports.show =  function show(req, res) {
        const contactID = contacts.find(contact=>contact._id == req.params._id)
        return res.json(contactID);
    }

   let contactID = 6;
   module.exports.create =  function create(req, res) {
        let newContact = req.body;
        req.body._id = contactID;
        contactID ++
        contacts.push(newContact);
        return res.json(newContact);
    }
 
   module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }

   
   module.exports.remove =  function remove(req, res) {
    return res.json({});
   }

 
   