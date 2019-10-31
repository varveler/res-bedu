FROM tutum/nginx

# install git
RUN  apt-get update && apt-get install -y git

# install nano
RUN  apt-get update && apt-get install -y nano

RUN git clone https://github.com/certbot/certbot /opt/letsencrypt

#RUN mkdir -p /etc/letsencrypt/configs
RUN cd /etc \
    && mkdir -p /letsencrypt/configs

ADD configs/nugets.com.mx.conf /etc/letsencrypt/configs/

RUN cd /var \
    && mkdir -p www/letsencrypt \
    && chgrp www-data www/letsencrypt
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
RUN rm /etc/nginx/sites-enabled/default
ADD sites-enabled/ /etc/nginx/sites-enabled



ENV TERM xterm
