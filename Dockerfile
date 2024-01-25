# Container image that runs your code
FROM php:8.3.2-fpm-bullseye

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY main.php /main.php
RUN chmod +x main.php

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["php main.php"]
