function arr() {
	var arr = [ 'red', 'blue', 'yellow', 'purple' ];
	document.getElementById('demo').innerHTML = arr;
}

function obj() {
	var hero = {
		firstName : "rajat",
		lastName : "chouksey",
		talk : function() {
			alert("wo wo");
		}
	};

	var book = {
		name : 'catch',
		published : 1961,
		author : {
			fn : 'joseph',
			ln : 'hel'
		}
	};
	var h1 = new Hero('Michelangelo');
	var h2 = new Hero('Donatello');
	document.getElementById('demo').innerHTML = h1.whoAreYou();
}

function Hero(name) {
	this.name = name;
	this.occupation = 'Ninja';
	this.whoAreYou = function() {
		return "I'm " + this.name + " and I'm a " + this.occupation;
	}
}
