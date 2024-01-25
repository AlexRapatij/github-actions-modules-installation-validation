<?php
echo 'php is live';
$dir = '/github/workspace/app/code';
$files1 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
//var_dump($_ENV);

return 1;