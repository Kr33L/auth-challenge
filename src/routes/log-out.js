const { removeSession } = require('../model/session');

function post(req, res) {
	const session_id = req.signedCookies.sid;
	removeSession(session_id);
	res.clearCookie('sid');
	res.redirect('/');
}

module.exports = { post };
