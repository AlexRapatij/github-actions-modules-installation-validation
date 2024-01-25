# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY main.php /main.php

RUN apk add php
RUN php -v

RUN chmod +x main.php

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["php main.php"]
