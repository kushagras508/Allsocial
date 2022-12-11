module.exports.home = function home(req,res){
    console.log(req.cookies);
    
    return res.render('home', {
        title: "Home"
    });
}
