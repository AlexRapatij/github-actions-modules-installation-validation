FROM alpine:3.10

COPY main2.sh /main2.sh

ENTRYPOINT ["/main2.sh"]