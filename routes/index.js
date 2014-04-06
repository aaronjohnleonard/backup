
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Backup' });
};

exports.signup = function(req, res){
	res.render('signup', {title: 'Signup' });
}