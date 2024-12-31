# A
**1. Github actions**

GitHub Actions is een geïntegreerde automatiseringstool binnen GitHub waarmee ontwikkelaars workflows kunnen definiëren en uitvoeren voor allerlei taken, zoals Continuous Integration (CI) en Continuous Deployment (CD). 
Het stelt teams in staat om handmatige processen te automatiseren, zoals het bouwen, testen en implementeren van code, direct in hun GitHub-repository.

Een workflow in GitHub Actions bestaat uit een reeks stappen, gedefinieerd in YAML-bestanden, die automatisch worden geactiveerd door bepaalde gebeurtenissen. 
Voorbeelden van zulke gebeurtenissen zijn het pushen van code naar een repository, het openen van een pull request of het plannen van een tijdgebonden taak. 
Elke stap binnen een workflow kan een actie zijn, zoals het draaien van een script of het uitvoeren van vooraf gedefinieerde acties uit de GitHub Marketplace.

Wat GitHub Actions krachtig maakt, is de naadloze integratie met GitHub zelf. Hierdoor hoeven ontwikkelaars geen externe CI/CD-tools te gebruiken. 
Bovendien biedt het een schaalbare en flexibele omgeving waar complexe pipelines kunnen worden opgezet om softwareontwikkeling en -implementatie te versnellen. 
GitHub Actions is ontwikkeld door GitHub, een dochteronderneming van Microsoft, en wordt veel gebruikt door teams die hun ontwikkelprocessen willen stroomlijnen en standaardiseren.

**2. Docker**

Docker is een platform dat ontwikkelaars helpt bij het bouwen, distribueren en uitvoeren van applicaties in containers. 
Een container is een lichte, draagbare en geïsoleerde omgeving waarin een applicatie en al haar afhankelijkheden (zoals bibliotheken, configuratiebestanden en runtime) worden verpakt. 
Hierdoor werkt de applicatie overal hetzelfde, ongeacht of het wordt uitgevoerd op een lokale computer, een testserver of in een cloudomgeving.

Het belangrijkste voordeel van Docker is dat het "works on my machine"-probleem wordt opgelost. 
Omdat containers alle benodigde componenten bevatten, zijn ze onafhankelijk van de onderliggende hardware en het besturingssysteem. 
Dit maakt het eenvoudig om applicaties te ontwikkelen, testen en implementeren zonder zorgen over verschillen in configuraties tussen omgevingen.

Docker Inc., het bedrijf achter Docker, heeft het platform ontwikkeld met als doel softwareontwikkeling efficiënter en betrouwbaarder te maken. 
Het wordt vaak gebruikt in combinatie met CI/CD-tools (zoals GitHub Actions) om een gestroomlijnde, consistente en snelle workflow te creëren voor het bouwen en implementeren van applicaties.


# B

Je begint met de naam van je github action ```name: GitHub Actions Demo```

en je run naam ```run-name: ${{ github.actor }} is testing out GitHub Actions 🚀```

dan gebruik je on: om te zeggen wanneer je deze action laat runnen ```on: [push]```

Hierna maak je je 'jobs' aan waarbij je dan je programma dingen laat runnen, testen, etc.

```
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v4
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."
```


# C

Docker Hub is een cloudgebaseerde repositoryservice van Docker waarmee gebruikers Docker container-images kunnen opslaan, delen en beheren. Ook kan men images pushen (uploaden) naar zowel private als public repositorys. Daarnaast kunnen gebruikers ook images pullen (downloaden) van Docker Hub, waaronder officiële images van softwareleveranciers, community images of images die door andere gebruikers zijn gedeeld. Door Docker Hub is het mogelijk om overal ter wereld via het internet toegang te hebben tot container-images, wat essentieel is voor het ontwikkelen, testen en implementeren van applicaties in containeromgevingen.

Dockerhub repository link: https://hub.docker.com/r/riklenaerts/opsdev-calculator

# D

Voor het gebruik van de credentials & webhook URL gebruiken we secrets. Dit heeft als voordeel dat er in de workflow geen wachwoorden en andere gevoelige info staat. Hierdoor ziet de workflow er ook schoner uit en is die eenvoudiger te lezen. Ook kunnen we secrets eenvoudig hergebruiken in andere workflows, omdat deze centraal beheerd worden in de repository. Als alternatief voor secrets zouden we omgevingsvariabelen kunnen gebruiken. Deze zijn wel minder veilig omdat ze niet geëncrypteerd zijn en zichtbaar kunnen zijn in logs of gedeelde configuraties.
