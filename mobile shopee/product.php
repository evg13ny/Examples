<?php

ob_start();

// include header.php file
include('header.php');


/* include _products.php file */
include('Template/_products.php');
/* !include _products.php file */

/* include _top-sale.php file */
include('Template/_top-sale.php');
/* !include _top-sale.php file */


// include footer.php file
include('footer.php');
