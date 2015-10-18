
//$(document).ready(function()
{

	// Define a "Person" class that tracks its own name and children, and has a method to add a new child

	// The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
	var viewModel = {
		list: [
			{
				district: "Mong Kok",
				rating: 2,
				price: 1500,
				ac: false,
				wifi: false
			},
			{
				district: "Sheung Wan",
				rating: 5,
				price: 899,
				wifi:true,
				ac: true
				
			},
			{
				district: "Central",
				rating: 3,
				price: 199,
				ac:true,
				wifi:true
			},
			{
				district: "Wan Chai",
				rating: 4,
				price: 199,
				ac:true,
				wifi:true
			},
			{
				district: "Central",
				rating: 5,
				price: 199,
				ac:true,
				wifi:true
			},
						{
				district: "Tsim Sha Tsui",
				rating: 4,
				price: 300,
				ac:true,
				wifi:false
			},
			{
				district: "Wan Chai",
				rating: 5,
				price: 499,
				ac:true,
				wifi:false
			},
			{
				district: "Tsim Sha Tsui",
				rating: 4,
				price: 199,
				ac:true,
				wifi:true
			},
			{
				district: "Tsim Sha Tsui",
				rating: 4,
				price: 399,
				ac:true,
				wifi:true
			}
			]
		
	};
	
	ko.applyBindings(viewModel);
}
//);

