module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "Profile"
    });
}
module.exports.posts = function(req,res){
    return res.render('posts',{
        title: "Posts",
        item: "Your Posts"
    });
}
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "AllSocial | Sign Up"
    });
}
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "AllSocial | Sign In"
    });
}