/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req, res){
		Role.find()
			.populate("users")
			.exec(function(err, roles){
				if(err){
					return res.json(err);
				}
				return res.json(roles);
			})
	},
	getUsers: function(req, res){
		var name = req.params.name;
		Role.findOne({name:name})
			.populate("users")
			.exec(function(err, role){
				if(err){
					return res.json(err);
				}

				// displaying all data role
				// return res.json(role);

				// display object data on users
				return res.json(role.users);
			})
	}
};

