FROM alpine:3.10

COPY main.sh /main.sh

ENTRYPOINT ["/main.sh"]