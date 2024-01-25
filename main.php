<?php
echo 'php is live';
$dir = '/';
$files1 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
//var_dump($_ENV);