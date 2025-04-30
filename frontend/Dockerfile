FROM httpd:2.4

# Copiar apenas os arquivos de configuração
COPY apache_cors/proxy.conf /usr/local/apache2/conf/extra/proxy.conf
COPY apache_cors/my_httpd.conf /usr/local/apache2/conf/httpd.conf

# Copiar apenas o frontend (suponho que esteja em uma pasta "frontend")
COPY ./publica /usr/local/apache2/htdocs/

#RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Não precisa alterar usuário
# EXPOSE 80 já é implícito no httpd, mas podemos manter
EXPOSE 80
