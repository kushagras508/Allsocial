module.exports.profile = function(req,res){
    res.render('user_profile',{
        title: "Profile"
    });
}
module.exports.posts = function(req,res){
    res.render('posts',{
        title: "Posts",
        item: "Your Posts"
    });
}
module.exports.signUp = function(req,res){
    res.render('user_sign_up',{
        title: "Posts"
    });
}
module.exports.signIn = function(req,res){
    res.render('user_sign_in',{
        title: "Posts"
    });
}