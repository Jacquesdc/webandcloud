## Start 

sur le credible-mode-290313.oa.r.appspot.com

**(lors du premier lancement faire la commande suivante : )** 

    gcloud config set project credible-mode-290313

**(puis à chaque up, faire : )**

    mvn clean package
    mvn appengine:deploy




### sur le "port 80 de Google"
    mvn clean package
    mvn appengine:run

##  OpenAPI

Appelez l'outil Endpoints Frameworks à l'aide de cette commande 

    mvn endpoints-framework:openApiDocs

Déployez le fichier de configuration OpenAPI généré précédemment

    gcloud endpoints services deploy target/openapi-docs/openapi.json


## Activer les services

Pour assurer la gestion des API, Endpoints Frameworks a besoin des services suivants :

    Nom	Titre
    servicemanagement.googleapis.com	API Service Management
    servicecontrol.googleapis.com	API Service Control
    endpoints.googleapis.com	Google Cloud Endpoints

Utilisez la commande suivante pour vérifier que les services nécessaires sont activés :

    gcloud services list

Si les services requis ne sont pas répertoriés, activez-les :

    gcloud services enable servicemanagement.googleapis.com
    gcloud services enable servicecontrol.googleapis.com
    gcloud services enable endpoints.googleapis.com

# webandcloud

**Be sure your maven has access to the web**
* you should have file ~/.m2/settings.xml
* otherwise cp ~molli-p/.m2/settings.xml ~/.m2/

```
molli-p@remote:~/.m2$ cat settings.xml
<settings>
 <proxies>
 <proxy>
      <active>true</active>
      <protocol>https</protocol>
      <host>proxy.ensinfo.sciences.univ-nantes.prive</host>
      <port>3128</port>
    </proxy>
  </proxies>
</settings>
```

## import and run in eclipse
* install the code in your home:
```
 cd ~
 git clone https://github.com/momo54/webandcloud.git
 cd webandcloud
 mvn install
```
* Change "sobike44" with your google project ID in pom.xml
* Change "sobike44" with your google project ID in src/main/webapp/WEB-INF/appengine-web.xml

## Run in eclipse

* start an eclipse with gcloud plugin
```
 /media/Enseignant/eclipse/eclipse
 or ~molli-p/eclipse/eclipse
 ```
* import the maven project in eclipse
 * File/import/maven/existing maven project
 * browse to ~/webandcloud
 * select pom.xml
 * Finish and wait
 * Ready to deploy and run...
 ```
 gcloud app create error...
 ```
 Go to google cloud shell console (icon near your head in google console)
 ```
 gcloud app create
 ```


## Install and Run 
* (gcloud SDK must be installed first. see https://cloud.google.com/sdk/install)
 * the gcloud command should be in your path. Run the following command to initialize your local install of gcloud.
```
gcloud init
```
* git clone https://github.com/momo54/webandcloud.git
* cd webandcloud
* running local (http://localhost:8080):
```
mvn package
mvn appengine:run
```
* Deploying at Google (need gcloud configuration, see error message -> tell you what to do... 
)
```
mvn appengine:deploy
gcloud app browse
```

# Access REST API
* (worked before) 
```
https://<yourapp>.appstpot.com/_ah/api/explorer
```
* New version of endpoints (see https://cloud.google.com/endpoints/docs/frameworks/java/adding-api-management?hl=fr):
```
mvn clean package
mvn endpoints-framework:openApiDocs
gcloud endpoints services deploy target/openapi-docs/openapi.json 
mvn appengine:deploy
```
