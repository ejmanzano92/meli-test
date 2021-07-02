# Meli mutants challenge

## Prerequisitos.
- Node 10.17.0.
- Yarn 1.17.3 o superior.

## Instrucciones para correr.
- Crear archivo `.env` con las siguientes env vars.
    - db_link=postgresql://userDB:passwordDB@urlDatabase:portDB/database (cambiar userDB, passwordDB, urlDatabase, portDB, database con los datos correspondientes.)
    - env=develop
- Correr proyecto: ```yarn install && yarn run start```
- Correr Tests: ```yarn install && yarn run test```
- Correr Coverage: ```yarn install && yarn run coverage```

## Coverage
```
    PASS  test/Service/StatService.test.js
    PASS  test/Service/MutantService.test.js
    PASS  test/Utils/Detect.test.js
    -------------------|---------|----------|---------|---------|-------------------
    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    -------------------|---------|----------|---------|---------|-------------------
    All files          |    97.8 |     87.5 |     100 |   97.67 |                   
     Config            |     100 |      100 |     100 |     100 |                   
      Constants.js     |     100 |      100 |     100 |     100 |                   
     Domain            |     100 |      100 |     100 |     100 |                   
      StatsResponse.js |     100 |      100 |     100 |     100 |                   
     Service           |   94.74 |       70 |     100 |   94.59 |                   
      MutantService.js |   93.75 |       70 |     100 |   93.55 | 39,43             
      StatService.js   |     100 |      100 |     100 |     100 |                   
     Utils             |     100 |      100 |     100 |     100 |                   
      Detect.js        |     100 |      100 |     100 |     100 |                   
      Validations.js   |     100 |      100 |     100 |     100 |                   
    -------------------|---------|----------|---------|---------|-------------------

    Test Suites: 3 passed, 3 total
    Tests:       29 passed, 29 total
    Snapshots:   0 total
    Time:        0.799 s, estimated 1 s
```

## Api endpoints.
- Check service: 
    ```
    curl --request GET \
        --url https://meli-mutant-emil.herokuapp.com/meli-mutants/app/health-check/
    ```

- Detect mutant function: 
    ```
        curl --request POST \
        --url https://meli-mutant-emil.herokuapp.com/meli-mutants/mutant/ \
        --header 'Content-Type: application/json' \
        --data '{
            "dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
        }'
    ```
- Get Stats
    ```
        curl --request GET \
        --url https://meli-mutant-emil.herokuapp.com/meli-mutants/stats/
    ```

## Consideraciones:
- La hice en node ya que vi una api bastante sencilla y que no necesitaba algo tan robusto como para hacerlo
- El coverage está al 97%, no hice test de controller puesto a que solo controla el llamado al servicio.
- El proyecto está en heroku por lo tanto el primer request siempre va a tardar un poco más mientras heroku inicia el Dyno.  
- Asumi que si me pasas un ADN invalido (distinto tamaño, nxm o con letras no validas) devuelvo el 403 pero no guardo el registro en BD