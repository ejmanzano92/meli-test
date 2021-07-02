# Meli mutants challenge

## Prerequisitos.
- Node 10.17.0.
- Yarn 1.17.3 o superior.

## Instrucciones para correr.
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

- mutant function: 
    ```
        curl --request POST \
        --url https://meli-mutant-emil.herokuapp.com/meli-mutants/mutant/ \
        --header 'Content-Type: application/json' \
        --data '{
            "dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
        }'
    ```