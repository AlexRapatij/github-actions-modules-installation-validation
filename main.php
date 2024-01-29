<?php
// allowed items
$allowedVendors = array_map('trim', explode("\n", $_ENV['INPUT_ALLOWED-VENDORS']));
$allowedModules = array_map('trim', explode("\n", $_ENV['INPUT_ALLOWED-MODULES']));
// app/code path
$appCodePath = trim(trim($_ENV['INPUT_APP-CODE-FOLDER']), '/');
if (empty($appCodePath)) {
    $appCodePath = 'app/code';
}

$notAllowedItems = [];

$dir = '/github/workspace/' . $appCodePath;
$vendors = scandir($dir);
foreach ($vendors as $vendor) {
    if (!is_dir($dir . "/" . $vendor) || in_array($vendor, ['.', '..'])) {
        continue;
    }
    if (in_array($vendor, $allowedVendors)) {
        continue;
    }

    $modules = scandir("{$dir}/{$vendor}");
    foreach ($modules as $module) {
        if (!is_dir("{$dir}/{$vendor}/{$module}") || in_array($module, ['.', '..'])) {
            continue;
        }
        $moduleName = "{$vendor}_{$module}";
        if (!in_array($moduleName, $allowedModules)) {
            $notAllowedItems[] = $moduleName;
        }
    }
}

if (count($notAllowedItems)) {
    throw new \Exception("Next module(s) installing not allowed in app/code folder: \n" .
        implode("\n", $notAllowedItems));
}
