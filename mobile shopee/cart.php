<?php

ob_start();

// include header.php file
include('header.php');


/* include _cart-template.php file if cart isn't empty */
count($product->getData('cart')) ? include('Template/_cart-template.php') : include('Template/notFound/_cart_notFound.php');
/* !include _cart-template.php file if cart isn't empty */

/* include _wishlist-template.php file */
count($product->getData('wishlist')) ? include('Template/_wishlist-template.php') : include('Template/notFound/_wishlist_notFound.php');
/* !include _wishlist-template.php file */

/* include _new-phones.php file */
include('Template/_new-phones.php');
/* !include _new-phones.php file */


// include footer.php file
include('footer.php');
