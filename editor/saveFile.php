<?
	// Make a copy once in an hour
	$btime = 1 * 60 * 60;
	$ltime = floor( time() / $btime ) * $btime;
	
	$name  = "versions/file.json";
	$nname = "versions/file_".$ltime.".json";
	if( ! file_exists( $nname ) ) copy($name, $nname);
	
	
	// Update the file
	if(!isset($_POST["p"]))  exit("No POST parameter");
	$p = $_POST["p"];
	if(strlen($p) > 500000)  exit("File is too large");
	
	file_put_contents($name, $p);
	echo("File successfully saved.");
?>