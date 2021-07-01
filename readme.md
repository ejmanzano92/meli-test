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
    PASS  test/Utils/Detect.test.js
    PASS  test/Service/MutantService.test.js
    -------------------|---------|----------|---------|---------|-------------------
    File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    -------------------|---------|----------|---------|---------|-------------------
    All files          |   97.18 |    90.91 |     100 |   96.97 |                   
    Config            |     100 |      100 |     100 |     100 |                   
    Constants.js     |     100 |      100 |     100 |     100 |                   
    Service           |    91.3 |       75 |     100 |   90.91 |                   
    MutantService.js |    91.3 |       75 |     100 |   90.91 | 21,32             
    Utils             |     100 |      100 |     100 |     100 |                   
    Detect.js        |     100 |      100 |     100 |     100 |                   
    Validation.js    |     100 |      100 |     100 |     100 |                   
    -------------------|---------|----------|---------|---------|-------------------

    Test Suites: 2 passed, 2 total
    Tests:       28 passed, 28 total
    Snapshots:   0 total
    Time:        0.423 s, estimated 1 s
```

## Api endpoints.
- Check service: 