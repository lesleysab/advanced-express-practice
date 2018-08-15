let contacts = require(".../contacts");

module.exports.list =  function list(request, response) {
    return res.json(contacts);
   }

   //get all things
   module.exports.show =  function show(request, response) {
    return response.json({theId: request.params.id});

    //get one thing
   }
   module.exports.create =  function create(request, response) {
    return response.json({});
   }
   //post
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }

   //put
   module.exports.remove =  function remove(request, response) {
    return response.json({});
   }

   //delete
   