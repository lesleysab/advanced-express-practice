let comments = require("../comments");

module.exports.list =  function list(req, res) {
    return res.json(comments);
   }

 
module.exports.show =  function show(req, res) {
    const commentID = comments.find(comment => comment._id==req.params._id)
    return res.json(commentID);
}

   let commentID = 5;
   module.exports.create =  function create(req, res) {
            let newComment = req.body;
            req.body._id  = commentID;  
            commentID ++        
            comments.push(newComment);
            return res.json(newComment);
   
}
   
   module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }

   
   module.exports.remove =  function remove(req, res) {
    return res.json({});
   }

 