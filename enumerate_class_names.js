Java.perform(function(){
	Java.enumerateLoadedClasses({
		"onMatch": function(c) {

			// Print the class name
			console.log("Class: ", c);

			try {
				// Get a wrapper object for "c"
				var clazz = Java.use(c);

				// This is how you enumerate the methods of each class
				var methods = Object.getOwnPropertyNames(clazz.__proto__);
			} catch(e) {
				// Something went wrong while getting a wrapper object for class "c"
				console.log(e);
			}
		},
		"onComplete": function(){}
	});
});