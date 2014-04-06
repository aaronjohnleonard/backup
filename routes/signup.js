
/*
 * GET sign up page.
 */

exports.signup = function(req, res){
	var number = 4+2;
	res.render('signup', { title: 'Backup' });
};