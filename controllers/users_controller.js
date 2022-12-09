module.exports.profile = function(req,res){
    res.render('profile',{
        title: "Profile"
    });
}
module.exports.posts = function(req,res){
    res.render('posts',{
        title: "Posts",
        item: "Your Posts"
    });
}