
new WOW().init(){
	var products = [];
	var cartItems = [];
	var cartItems = [];
	var cart_n = document.getElementById("cart_n");

	var fruitDIV = document.getElementById("fruitDIV");
	var juiceDIV = document.getElementById("juiceDIV");
	var saladDIV = document.getElementById("saladDIV");


	var FRUIT = [
		{name: 'Apple', price:1},
		{name: 'Orange', price:1},
		{name: 'Cherry', price:1},
		{name: 'Apple'	, price:1},
		{name: 'Strawberry', price:1},
		{name: 'Kiwi', price:1},
		{name: 'Banana', price:1},
		{name: 'Egg', price:1},
	];

	var JUICE = [
		{name: 'Juice #1', price:10},
		{name: 'Juice #2', price:10},
		{name: 'Juice #3', price:10},
		{name: 'Juice #4', price:10},
		{name: 'Juice #5', price:10}
	];

	var SALAD = [
		{name: 'Salad #1', price:11},
		{name: 'Salad #2', price:11},
		{name: 'Salad #3', price:11},
		{name: 'Salad #4', price:11},
		{name: 'Salad #5', price:11},
		{name: 'Salad #6', price:11}
	];
}	

	function HTMLfruitProduct(con){
		let URL = `img/fruits/fruits${con}.jpeg`;
		let btn = `btnFruit${con}`;
		return `
			<div class="col-md-4" wow zoomIn data-wow-duration="10s" data-wow-offset="240">
				<div class="card mb-4 shadow-sm">
					<img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
					<div class="card-body">
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<p class="card-text">${FRUIT[con-1].name}</p>
						<p class="card-text">${FRUIT[con-1].price}</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${FRUIT[con-1].name}',
								'${FRUIT[con-1].price}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color: inherit;" href="cart.php">Buy</a>
								</button>
								<button type="button" onclick="cart('${FRUIT[con-1].name}',
								'${FRUIT[con-1].price}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color: inherit;" href="#">Add to cart</a>
								</button>
							</div>
							<small class="text-muted">Free Shipping</small>
						</div>
					</div>
				</div>
			</div>

		`;
	}

	function HTMLjuiceProduct(con){
		let URL = `img/juice/juice${con}.jpeg`;
		let btn = `btnJuice${con}`;
		return `
			<div class="col-md-4" wow zoomIn data-wow-duration="10s" data-wow-offset="240">
				<div class="card mb-4 shadow-sm">
					<img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
					<div class="card-body">
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<p class="card-text">${JUICE[con-1].name}</p>
						<p class="card-text">${JUICE[con-1].price}</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${JUICE[con-1].name}',
								'${JUICE[con-1].price}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color: inherit;" href="cart.php">Buy</a>
								</button>
								<button type="button" onclick="cart('${JUICE[con-1].name}',
								'${JUICE[con-1].price}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color: inherit;" href="#">Add to cart</a>
								</button>
							</div>
							<small class="text-muted">Free Shipping</small>
						</div>
					</div>
				</div>
			</div>

		`;
	}


	function HTMLsaladProduct(con){
		let URL = `img/salad/salad${con}.jpeg`;
		let btn = `btnSalad${con}`;
		return `
			<div class="col-md-4" wow zoomIn data-wow-duration="10s" data-wow-offset="240">
				<div class="card mb-4 shadow-sm">
					<img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
					<div class="card-body">
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<i style="color:orange;" class="fa fa-star"></i>
						<p class="card-text">${SALAD[con-1].name}</p>
						<p class="card-text">${SALAD[con-1].price}</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button type="button" onclick="cart2('${SALAD[con-1].name}',
								'${SALAD[con-1].price}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color: inherit;" href="cart.php">Buy</a>
								</button>
								<button type="button" onclick="cart('${SALAD[con-1].name}',
								'${SALAD[con-1].price}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary">
									<a style="color: inherit;" href="#">Add to cart</a>
								</button>
							</div>
							<small class="text-muted">Free Shipping</small>
						</div>
					</div>
				</div>
			</div>

		`;
	}



function animation(){
	const toast = swal.mixin({
		toast:true;
		position: 'top-end';
		showConfirmButton: false;
		timer: 1000;
	});
	toast({
		type: 'success';
		titel: 'Added to shopping cart.'	
	});
}

function cart(name, price, url, con, btncart){
	var item={
		name: name,
		price: price,
		url:url
	}
	cartItems.push(item){
		let storage = JSON.parse(localStorage.getItem("cart"));
			if(storage == null){
				product.push(item);
				localStorage.setItem("cart", JSON.stringify(products));
			}
			else{
				products = JSON.parse(localStorage.getItem("cart"));
				products.push(item);
				localStorage.setItem("cart", JSON.stringify(products));
			}
			products = JSON.parse(localStorage.getItem("cart"));
			cart_n.innerHTML = `[${products.length}]`;
			document.getElementById(btncart).style.display="none";
			animation();
	}
}

function cart2(params){
	
}


