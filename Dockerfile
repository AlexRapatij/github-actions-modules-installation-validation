FROM php:8.2.15-zts-bookworm
COPY main.php /main.php
ENTRYPOINT ["php", "/main.php"]