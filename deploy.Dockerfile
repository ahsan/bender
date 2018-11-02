FROM python:slim
MAINTAINER Abdullah Ahsan <ahsan.abdulah@gmail.com>

RUN pip install --upgrade awscli

ENTRYPOINT [ "sh" ]
