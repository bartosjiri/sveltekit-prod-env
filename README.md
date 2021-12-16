# SvelteKit production environment variables

Reproduction repository for undefined environment variables in production build of SvelteKit when providing through Docker.

## Requirements

- [Docker](https://docs.docker.com/engine/install/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## Usage

1. Start up the application in development mode:
	```
    docker-compose -f docker-compose.dev.yml up --build -d
    ```
2. Visit `http://localhost` and verify that the value of the specified environment variable is available.
3. Terminate the application:
	```
    docker-compose -f docker-compose.dev.yml down
    ```
4. Start up the application in production mode:
	```
    docker-compose up --build -d
    ```
5. Visit `http://localhost` to find the undefined value of the environment variable.
6. To terminate the application in production mode:
	```
    docker-compose down
    ```

## References

- [SvelteKit issue](https://github.com/sveltejs/kit/issues/3004)
- [Vite PR](https://github.com/vitejs/vite/pull/5404)