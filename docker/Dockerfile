FROM alpine:3.10

COPY entrypoint.sh /entrypoint.sh

RUN sed -i 's/\r$//' chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
