# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

<!-- ![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png) -->

## Project write-up - UML

### Acivity Diagram
![Activity Diagram](images/SupplychainActivityDiagram.png)

### Sequence Diagram
![Sequence Diagram](images/SupplychainSequenceDiagram.png)

### State Diagram
![State Diagram](images/SupplychainStateDiagram.png)

### Data Model (Class Diagram)
![Data Model](images/SupplychainClassDiagram.png)


## Contract

### Contract Address (Rinkeby)
```
0xe73f3fa5d72063aef897f8b4264215320cbab933
```

### Contract Creation (Tx Hash)
```
0x0d896ab15aad52ec7ca15380594fbd2177157033cb87b4ace81a97f608279e1a
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Truffle v5.1.46 (core: 5.1.46)
Solidity v0.5.16 (solc-js)
Node v10.19.0
Web3.js v1.2.1
```

## Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/combattardigrade/ethereum_supplychain
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:



In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:



This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:



Test smart contracts:

```
truffle test
```

All 10 tests should pass.



In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.



## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
