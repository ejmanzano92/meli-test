# Meli mutants challenge

## Prerequisitos.
- Node 10.17.0 o superior
- Yarn 1.17.3 o superior.

## Instrucciones para correr.
- Correr proyecto: ```yarn install && yarn run start```
- Correr Tests: ```yarn install && yarn run test```
- Correr Coverage: ```yarn install && yarn run coverage```

## Coverage
```
    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    -------------------|---------|----------|---------|---------|-------------------
    All files          |    97.5 |     87.5 |     100 |   97.33 |                   
    Config             |     100 |      100 |     100 |     100 |                   
    Constants.js       |     100 |      100 |     100 |     100 |                   
    Service            |   93.75 |       70 |     100 |   93.55 |                   
    MutantService.js   |   93.75 |       70 |     100 |   93.55 | 39,43             
    Utils              |     100 |      100 |     100 |     100 |                   
    Detect.js          |     100 |      100 |     100 |     100 |                   
    Validations.js     |     100 |      100 |     100 |     100 |                   
    -------------------|---------|----------|---------|---------|-------------------

    Test Suites: 2 passed, 2 total
    Tests:       28 passed, 28 total
    Snapshots:   0 total
    Time:        0.784 s, estimated 1 s
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