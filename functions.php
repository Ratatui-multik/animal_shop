<? 
function connect_db() {

//Подключаемся к серверу базы данных
	$db = mysqli_connect('localhost','root','','Shop');
	echo 'VDSgffff';
	if(!$db) {
		exit('Error'.mysqli_error());
	}
//Устанавливаем кодировку запросов
	return $db;
}

function get_goods($db,$id = FALSE) {

//Запрос на выборку все товаров
// $sql = "SELECT * FROM orders";
// $result = mysqli_query($db,$sql);

// for($i = 0;$i < mysqli_num_rows($result); $i++) {
// $goods[] = mysqli_fetch_array($result);
	$sql = "SELECT * FROM products";
	$result = mysqli_query($db,$sql);
while($row = mysqli_fetch_assoc($result)){ // оформим каждую строку результата
                                      // как ассоциативный массив
    $data[] = $row; // допишем строку из выборки как новый элемент результирующего массива
}

	// echo json_encode($data, JSON_UNESCAPED_UNICODE );
	 
	 $str_value= implode($data);
 	 $f = fopen('scripts/goods.json', 'w+');    //открываем файл
     fwrite($f, json_encode($data, JSON_UNESCAPED_UNICODE));       // записываем в него сгенерированное значение
     fclose($f);


     return $goods;
 }
 ?>
