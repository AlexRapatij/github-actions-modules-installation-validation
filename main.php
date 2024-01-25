<?php
echo 'php is live';
$dir = '/home/runner/work/base-choiceshops-magento2/base-choiceshops-magento2';
$files1 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
//var_dump($_ENV);