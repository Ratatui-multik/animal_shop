<?
include 'functions.php';
$db = connect_db();
$goods= get_goods($db);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Shop for animals</title>

  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/bootstrap.css" rel="stylesheet">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="scripts/bootstrap.js"></script>
  <script type="text/javascript" src="scripts/script.js"></script>

</head>


<body>
<?// foreach ($goods as $item) : ?>
<li>

<p id="title"><?//=$item['order_id'];?></p>



</li>
<?// endforeach; ?>  
<div class="container">
  <nav class="navbar navbar-default">
   <div class="container-fluid">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Shop for animals
        <!-- <img alt="Brand" src="pictures/brandcat.png"></a>-->

      </div>


      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="session.php">Меню<span class="sr-only">(current)</span></a></li>
          <li><a href="#">Про нас</a></li>
      
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Категорії товарів <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Корми для тварин</a></li>
              <li><a href="#">Препарати</a></li>

            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </nav></div> <!-- bar-->
<div class="container">
    <div class="row">
    <div class="container">
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
      </ol></div>
    </div></div>
<div class="container"  > 
        <div class="row lib" ><!--For gallery!--></div>

        <nav align="center">
          <ul class="pagination">
        <!--For pagination!-->
          </ul>
        </nav>

      </div>
      





  </body>
  </html>