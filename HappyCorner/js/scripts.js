
//$(document).ready(function()
{
	// Define a "Person" class that tracks its own name and children, and has a method to add a new child

	// The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
	var viewModel = {
		list: [
			{
				district: "Mong Kok",
				rating: 5,
				price: 150,
				fan: true,
				ac: true,
				wifi: false,
				karaoke: false,
				food: true,
				recommend: true
			},
			{
				district: "Tsim Sha Tsui",
				rating: 4,
				price: 100,
				fan: true,
				wifi:true,
				karaoke: true,
				food: true,
				recommend: true
			},
			{
				district: "Central",
				rating: 3,
				karaoke: false,
				food: false,
				wifi:true
			},
			{
				district: "Bertie",
				rating: 4,
				karaoke: false,
				food: false,
				wifi:false
			},
			{
				district: "Bertie",
				rating: 5,
				karaoke: false,
				wifi:false,
				food: false
			}
			]
		
	};
	
	ko.applyBindings(viewModel);
}
//);

