version: "3.9"

name: myapi

services:
  api:
    build:
      context: ./todo
      dockerfile: Dockerfile.dev
    depends_on:
        - postgres_db
    ports:
      - "8000:8000"  # Expose container port 8000 to host port 8000  
    networks:
      - my-api-net
  postgres_db:
    image: postgres:latest  # Use the official PostgreSQL image
    restart: always
    container_name: PostgresCont
    environment:
        - POSTGRES_USER=ziakhan
        - POSTGRES_PASSWORD=my_password
        - POSTGRES_DB=mydatabase
    ports:
        - '5433:5432'
    volumes:
        - postgres_db:/var/lib/postgresql/data
    networks:
      - my-api-net

volumes:
  postgres_db:
    driver: local

networks:
  my-api-net:  # Define the custom network
m