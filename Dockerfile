FROM alpine:3.8

COPY main.sh /main.sh

ENTRYPOINT ["/main.sh"]