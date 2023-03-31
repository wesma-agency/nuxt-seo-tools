export default class UserDto {
	id;
	email;
	name;
	password;
	role;
	active;

	constructor(data) {
		this.id = data.id;
		this.email = data.email;
		this.name = data.name;
		this.password = "";
		this.role = data.role;
		this.active = data.active == 1 ? true : false;
	}
}
