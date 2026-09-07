# Actividad práctica — Registro de préstamo de equipamiento en Hyperledger Fabric

**Materia:** Desarrollo con Tecnologías Blockchain  
**Clase:** 04 — Desarrollo con Hyperledger Fabric  
**Fecha:** 07/09/2026  
**Modalidad:** individual

---

## Qué vas a construir

Al finalizar vas a tener evidencia de:

- Una red local de Fabric con Org1, Org2 y un orderer.
- Un canal llamado `equipamiento`.
- El chaincode `prestamos` desplegado con política de endoso de Org1 y Org2.
- Un equipo `EQ-01` inicializado en el ledger.
- Una transferencia de Org1 a Org2 validada en la red.
- Una prueba de autorización rechazada cuando Org1 intenta transferir un equipo que ya pertenece a Org2.

---

## Material de la actividad

- [Guía completa en Markdown](actividad_practica.md)
- [Guía completa en PDF](actividad_practica.pdf)

La guía tiene el paso a paso completo para macOS, Linux y Windows con WSL2, incluyendo los comandos exactos, las salidas esperadas en cada paso y las preguntas de cierre.

El chaincode lo va a proveer la cátedra durante la clase.

---

## Versiones

- Hyperledger Fabric v2.5.16 (rama LTS actual)
- Fabric CA v1.5.22
- Node.js 18 o superior
- Docker y Docker Compose

---

## Entrega

Al terminar la actividad, subí tu documento de entrega al campus de la materia en **Moodle**, en la tarea correspondiente a la Clase 04.

El documento debe llamarse `Clase04_Apellido_Nombre` y puede estar en formato `.md`, `.docx` o `.pdf`.

Debe incluir:

- Nombre, apellido, legajo y fecha.
- Sistema operativo y versiones de las herramientas usadas.
- Evidencia de cada paso (comandos ejecutados y salidas obtenidas).
- Respuestas a las preguntas finales de la guía.
- Problemas encontrados y cómo los resolviste.

**Fecha límite:** consultá el campus para la fecha de cierre de la tarea.
