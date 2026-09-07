# Fabric préstamos de equipamiento

Actividad práctica individual para levantar una red local de Hyperledger Fabric con dos organizaciones y desplegar un chaincode nuevo.

## Qué vas a construir

Al finalizar vas a tener:

- una red local de Fabric con Org1, Org2 y un orderer;
- un canal llamado `equipamiento`;
- el chaincode `prestamos` desplegado con política de endoso de Org1 y Org2;
- un equipo `EQ-01` inicializado en el ledger;
- una transferencia de Org1 a Org2 validada en la red;
- una prueba de autorización rechazada cuando Org1 intenta transferir un equipo que ya pertenece a Org2.

## Material de la actividad

- [Guía completa en Markdown](actividad_practica.md)
- [Guía completa en PDF](actividad_practica.pdf)
- [Chaincode TypeScript](chaincode/prestamos-ts)

La guía está pensada para que puedas empezar desde cero. Si no tenés el código local, dentro del Markdown hay un bloque copiable que crea todos los archivos del chaincode.

## Versiones usadas

El práctico fija versiones para que todos trabajen con el mismo entorno:

- Hyperledger Fabric v2.5.16
- Fabric CA v1.5.22
- Node.js 18 o superior
- Docker y Docker Compose

Fabric v2.5.x es la rama LTS actual del proyecto. La release v3.1.5 se menciona solo como contexto de evolución, no como base del laboratorio.

## Inicio rápido

Leé primero la guía completa. El flujo principal es:

```bash
mkdir -p ~/fabric-labs
cd ~/fabric-labs
git clone https://github.com/utn-blockchain-5k3/fabric-prestamos-equipamiento.git
cd fabric-prestamos-equipamiento

curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh
chmod +x install-fabric.sh
FABRIC_DOCKER_REGISTRY=docker.io/hyperledger ./install-fabric.sh --fabric-version 2.5.16 --ca-version 1.5.22 docker samples binary

CHAINCODE_PATH="$PWD/chaincode/prestamos-ts"
cd fabric-samples/test-network
./network.sh down
./network.sh up createChannel -c equipamiento

./network.sh deployCC \
  -c equipamiento \
  -ccn prestamos \
  -ccp "$CHAINCODE_PATH" \
  -ccl typescript \
  -ccep "AND('Org1MSP.peer','Org2MSP.peer')"
```

La guía completa muestra el paso a paso para macOS, Linux y Windows con WSL2, incluyendo consultas, invocaciones y evidencia esperada.

## Estructura

```text
.
├── README.md
├── actividad_practica.md
├── actividad_practica.pdf
└── chaincode/
    └── prestamos-ts/
        ├── package.json
        ├── package-lock.json
        ├── tsconfig.json
        └── src/
            ├── index.ts
            └── prestamos.ts
```

## Limpieza

Al terminar la actividad, apagá la red local:

```bash
cd fabric-samples/test-network
./network.sh down
```
