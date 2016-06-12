/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req, res){
		User.find()
			.populate('roles')
			.exec(function(err,users){
				if(err){
					return res.json(err);
				}
				return res.json(users);
			})
	},
	getRoles: function(req, res){
		var username = req.params.name;
		User.findOne({username:username})
			.populate("roles")
			.exec(function(err, user){
				if(err){
					return res.json(err);
				}
				// displaying all data user
				// return res.json(user);

				// display object data on roles
				return res.json(user.roles);
			})
	}
};

