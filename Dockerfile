# Container image that runs your code
FROM alpine:3.10

RUN apk add php

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY main.php /main.php

RUN pwd
RUN ls -al

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["php", "/main.php"]