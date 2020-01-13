<?php
	include_once 'db/connection.php';
	$object = new Connection();
	$connection = $object->Connect();

?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Ecommercce</title>
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/carousel.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
	
</head>
<body>
	
	<header>
		<nav class="navbar fixed-top navbar-expand-md navbar-dark text-white" style="background: #2EB26E;">
			<a href="#" class="text-white navbar-brand">
				<i class="fab fa-pagelines animate flash"> Organic Store</i>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto menu">
					<li class="nav-item active">
						<a href="index.html" class="nav-link">Home</a>
					</li>
				</ul>
				<form class="form-inline mt-2 mt-md-0">
					<a class="text-white nav-link" href="index.html">
						<i class="text-warning fas fa-shopping-cart"></i> Shopping cart
						<i style="color:yellow;" id="cart_n"></i>
					</a>
				</form>
			</div>
		</nav>
	</header>
	
	<div class="container mt-3">
		<main role="main">
			<div class="row">
				<div class="col">
					<div class="table-responsive-sm">
						<table class="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Product</th>
									<th scope="col">Description</th>
									<th scope="col">Quantity</th>
									<th scope="col">Price</th>
								</tr>
							</thead>
							<tbody id="table">
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<hr class="featurette-divider">
		</main>
	</div>

		<div class="container">
			<footer>
				<p class="float-right">
					<a href="#">TOP</a>
				</p>
				<div class="row">
					SALVANDO EL SEMESTRE
				</div>
			</footer>
		</div>

	</main>

	


	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
	<script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="js/wow.js"></script>
	<script src="js/cart.js"></script>


</body>
</html>