FROM python:3.7

ENV PYTHONBUFFERED=0
ENV PYTHONUNBUFFERED=0

RUN apt-get update -y
RUN apt-get -y install binutils libproj-dev gdal-bin wget

# RUN mkdir /backend
WORKDIR /backend

ADD requirements.txt /backend/

RUN pip3 install -r requirements.txt
RUN adduser --disabled-password --gecos '' tasksuser

ADD wait-for-it.sh /backend/
RUN chmod +x /backend/wait-for-it.sh

COPY . /backend/
#RUN chmod -R 777 /backend/temp/emailAttachments
#RUN chmod -R 777 /backend/temp/inventoryFiles
