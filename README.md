# alavanqa-docs
Documentation repository for alavanQA courses and tutorials

### Pre Condition: 
- [Node.JS 10+ installed](https://nodejs.org/en/download/)
- Yarn installed
```bash
npm install --global yarn
```  


## First Step: install Node modules dependencies

Make sure you are at the root of your project directory:
```bash
yarn install
```

## Building the website locally + HotReload

_Note: you might need permission granted to executed the script. Run: `chmod +x aqabuild.sh`_

Open the terminal and run: 

```bash
./build.sh
```

alavanQA website will be served at: `http://localhost:8080/` (port may vary)

**Hot Reload**: the website is automatically rebuilt via HotReload feature after code changes are saved in the IDE.

_Note: if you are using VS Studio, simply press `Ctrl+k s`_


## Deployment - publishing alavanQA repository

_Note: you might need permission granted to executed the script. Run: `chmod +x deploy.sh`_

Open the terminal and run:

```bash
./deploy.sh
```

testando preview de PR