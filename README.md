<div align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" 
  width="200" alt="Nest Logo" /></a>
  <a href="https://graphql.org" target="blank"><img src="https://graphql.org/img/logo.svg" 
  width="200" alt="GraphQL Logo" /></a>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
# Dev

1. Clone the project.
2. Copy the `env.template` file and rename it to `.env`, change de env variables.
3. Execute the following command to install dependencies:
```
yarn install
```
4. Lift the Docker image (using Docker Desktop or any other container's tool):
```
docker-compose up -d
```

5. Connect the database to a db manager like table plus using the env variables
6. Start the Nest backend:
```
yarn start:dev
```

7. Visit the site:
```
localhost:3000/graphql
```

# Prod 
1. Clone the project.
2. Copy the `env.template` file and rename it to `.env.prod`.
3. Lift the docker image (using Docker Desktop or any other container's tool):
```
docker-compose -f docker-compose.prod.yml --env-file .env.prod up --build
```
Note: To start the image just execute the same command without the --build property 

4. Deploy the project on your preferred hosting server using the docker image and it's variables


# Seeder
Execute the __"mutation"__ `executeSeed` to populate the database with information.
