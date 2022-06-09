document.addEventListener("DOMContentLoaded", async () => {
    load_data();
    document.getElementById('result').innerHTML = navigator.deviceMemory ?? 'unknown'
    setTimeout(() => {
      document.getElementById('result').innerHTML = navigator.deviceMemory ?? 'unknown'
    }, 10000);
});

function animation() {
    const animation = document.getElementById("intro");
    animation.innerHTML = `<button class="button_important" onclick="fin_animation()">Je veux retourner sur mon application ! 😃</button>
    <div class="scene">
    <div class="mercure_orbit">
        <img src="images/mercure2.png" class="planete mercure">
    </div>
    <div class="venus_orbit">
        <img src="images/venus2.png" class="planete venus">
    </div>
    <div class="earth_orbit">
        <img src="images/terre2.png" class="planete earth">
    </div>
    <div class="mars_orbit">
        <img src="images/mars2.png" class="planete mars">
    </div>
    <div class="jupiler_orbit">
        <img src="images/jupiter2.png" class="planete jupiler">
    </div>
    <div class="saturne_orbit">
        <img src="images/saturne2.png" class="planete saturne">
    </div>
    <div class="youranus_orbit">
        <img src="images/uranus2.png" class="planete youranus">
    </div>
    <div class="neptune_orbit">
        <img src="images/neptune2.png" class="planete neptune">
    </div>
    <img src="images/sun2.png" class="planete sun">
</div>`;
}

function fin_animation() {
    const fin_animation = document.getElementById("intro");
    fin_animation.innerHTML = `<h1>Le Système Solaire</h1><p style="color: white;">Le Système solaire est composé du Soleil mais aussi de tout ce qui gravite autour de celui-ci : les planètes et leurs satellites, les planètes naines, les astéroïdes, les objets de la ceinture de Kuiper et les comètes. On parle également de Système solaire lorsqu’on fait référence à un groupe de corps célestes orbitant autour d’une étoile (on parle alors de planètes extrasolaires). Dans cette animation, le Système solaire représente le système incluant le Soleil et la Terre. Les dimensions du système solaire sont définies par rapport à la distance Soleil-Terre, que l’on appelle « unité astronomique » (UA). Une UA fait 150 millions de km. On estime que la distance entre le soleil et la frontière du système solaire est d’environ 86 à 100 UA. </p>
    <button class="button_important" onclick="animation()">Je veux voir l'animation ! 😃</button>
    <fieldset class="cadre">
        <legend class="legend_accueil">LE SOLEIL</legend>
        <img src="images/soleil.png" alt="image représentant le Soleil" title="Soleil" />
        <p>
            Le soleil est une étoile de taille et de luminosité moyennes. Les rayons solaires et autres radiations sont produits grâce à la conversion d’hydrogène en hélium à l’intérieur du soleil brûlant et dense. Bien que cette fusion nucléaire brûle 600 millions de tonnes d’hydrogène par seconde, le Soleil est si massif (2 x 10 puissance 30 kg) qu’il peut continuer à briller autant pendant encore 6 milliards d’années ! C’est cette stabilité qui a permis à la vie de se développer et de survivre sur terre.
        </p>
    </fieldset>
    <fieldset class="cadre">
        <legend class="legend_accueil">LES PLANÈTES TELLURIQUES</legend>
        <p>
            Les planètes telluriques sont principalement composées de roches et de métaux et ont une densité relativement élevée, une rotation lente, une surface solide, pas d'anneaux et peu de satellites.
        </p>
    </fieldset>
    <fieldset class="cadre">
        <legend class="legend_accueil">LES PLANÈTES GAZEUSES</legend>
        <p>
            Les planètes gazeuses sont principalement composées d'hydrogène et d'hélium et généralement ont une faible densité, une rotation rapide, des atmosphères épaisses, des anneaux et beaucoup de satellites.
        </p>
    </fieldset>
    <!-- Lorsqu'on ajoute, modifie ou supprime des planètes, elles seront affichés, modifiés ou enlevés de la liste -->
    <fieldset class="cadre">
        <legend class="legend_accueil">Vos planètes</legend>
        <div id="content" style="display: flex; flex-wrap: wrap; width: 100%; justify-content: center; color:azure;"></div>
        <div id="ajout_planete">
            <p>Pour ajouter une planète, veuillez cliquer sur le bouton ci-dessous</p>
            <div style="align-items: center; width: 100%; margin-top: 30px;">
                <button onclick="add()">Ajouter une planète</button><br><br>
            </div>
        </div>
    </fieldset>
    <fieldset class="cadre">
        <legend class="legend_accueil">Formulaire de souscription</legend>
        <div id="form">
            <p style="text-align: center;">
                Notre page vous a plue et vous souhaitez être tenu informé des changements de notre application ? <br><br>
                C'est simple ! Cliquez sur le bouton ci-dessous, remplissez et soumettez-nous le formulaire. 
            </p>
            <button onclick="subscriberForm()">Remplir maintenant !</button>
        </div>
    </fieldset>`;
}
function load_data() {
    const contentElement = document.getElementById("content");

    contentElement.innerHTML = "";
    if (localStorage.getItem("planetes")) {

        const planetes = JSON.parse(localStorage.getItem("planetes"));
        planetes.forEach((planete, id) => {
            contentElement.innerHTML += `<div id="planete-${id}" class="planete"> 
                <img src="images/${planete.img_planete}.png"> <br><p>
                                            Nom : ${planete.nom_planete}<br> 
                                            Masse : ${planete.masse_planete} kg <br>  
                                            Densité : ${planete.densite_planete} g/cm³<br> 
                                            Température_Min : ${planete.tempMin_planete} °C <br>
                                            Température_Max : ${planete.tempMax_planete} °C <br>
                                            <div class="modif_suppr_img">
                                                <img src="images/modifier.png" alt="Modifier la planète" onclick="modif_planete('${id}')">
                                                <img src="images/supprimer.png" alt="Modifier la planète" onclick="supr_planete('${id}')">
                                            </div></p>
                                        </div>`;
        });
    }
}

function add() {
    const ajout_planete = document.getElementById("ajout_planete");
    ajout_planete.innerHTML = ``;
    const contentElement = document.getElementById("content");
    contentElement.innerHTML += `<div class="formulaire">
<div class="label-input">
    <label for="nom_planete">Nom : </label><br>
    <input type="text" name="nom_planete" id="nom_planete" required>
</div>
<div class="label-input">
    <label for="masse_planete">Masse : </label><br>
    <input type="text" name="masse_planete" id="masse_planete" required>
</div>
<div class="label-input">
    <label for="densite_planete">Densité : </label><br>
    <input type="text" name="densite_planete" id="densite_planete" required>
</div>
<div class="label-input">
    <label for="tempMin_planete">Température minimale : </label><br>
    <input type="number" name="tempMin_planete" id="tempMin_planete" required>
</div>
<div class="label-input">
    <label for="tempMax_planete">Température maximale : </label><br>
    <input type="number" name="tempMax_planete" id="tempMax_planete" required>
</div>
<div class="label-input">
    <label for="img_planete">Chemin vers l'image : </label><br>
    <input type="text" id="img_planete" name="img_planete" accept="image/png, image/jpeg" required>
</div>
<div style="align-items: center; width: 100%; margin-top: 30px;">
    <button onclick="send_planete()">Ajouter la planète</button><br><br>
</div>
</div>`;
}

function send_planete() {
    const ajout_planete = document.getElementById("ajout_planete");
    ajout_planete.innerHTML += `<div style="align-items: center; width: 100%; margin-top: 30px;">
                    <button onclick="add()">Ajouter une planète</button><br><br>
                </div>`;

    // Création de la planète
    const nom = document.getElementById("nom_planete").value;
    const masse = document.getElementById("masse_planete").value;
    const densite = document.getElementById("densite_planete").value;
    const tempMin = parseInt(document.getElementById("tempMin_planete").value);
    const tempMax = parseInt(document.getElementById("tempMax_planete").value);
    const img = document.getElementById("img_planete").value;
    const planete = {
        "nom_planete": nom, "masse_planete": masse, "densite_planete": densite, "tempMin_planete": tempMin, "tempMax_planete":tempMax, "img_planete" : img
    };
    // envoi de la planète
    if (localStorage.getItem("planetes")) {
        let tableau = JSON.parse(localStorage.getItem("planetes"))
        tableau = [...tableau,planete]
        localStorage.setItem("planetes", JSON.stringify(tableau))
    } else {
        let tableau = [planete]
        localStorage.setItem("planetes", JSON.stringify(tableau))
    }
    load_data();
}

function modif_planete(id) {
    const contentElement = document.getElementById(`planete-${id}`);

    contentElement.innerHTML = `
    <label for="nom_planete">Nom : </label><br>
    <input value="${JSON.parse(localStorage.getItem("planetes"))[id].nom_planete}" type="text" name="nom_planete" id="nouveau_nom_planete" ><br>
    <label for="masse_planete">Masse : </label><br>
    <input value="${JSON.parse(localStorage.getItem("planetes"))[id].masse_planete}" type="text" name="masse_planete" id="nouveau_masse_planete"><br>
    <label for="densite_planete">Densité : </label><br>
    <input value="${JSON.parse(localStorage.getItem("planetes"))[id].densite_planete}" type="text" name="densite_planete" id="nouveau_densite_planete"> <br>
    <label for="tempMin_planete">Température_Min : </label><br>                            
    <input value="${JSON.parse(localStorage.getItem("planetes"))[id].tempMin_planete}" type="number" name="tempMin_planete" id="nouveau_tempMin_planete"> <br>
    <label for="tempMax_planete">Température_Max : </label><br>
    <input value="${JSON.parse(localStorage.getItem("planetes"))[id].tempMax_planete}" type="number" name="tempMax_planete" id="nouveau_tempMax_planete"> <br>
    <label for="img_planete">Chemin : </label><br>                            
    <input value="${JSON.parse(localStorage.getItem("planetes"))[id].img_planete}" type="text" id="nouveau_img_planete" name="img_planete" accept="image/png, image/jpeg"><br>
    <div class="valider_annuler_img">
        <img src="images/valider.png" alt="Valider" onclick="sauv_planete('${id}')">
        <img src="images/annuler.png" alt="Annuler" onclick="load_data()">
    </div>`;
}

function sauv_planete(id_update) {
    const nom = document.getElementById("nouveau_nom_planete").value;
    const masse = document.getElementById("nouveau_masse_planete").value;
    const densite = document.getElementById("nouveau_densite_planete").value;
    const tempMin = parseInt(document.getElementById("nouveau_tempMin_planete").value);
    const tempMax = parseInt(document.getElementById("nouveau_tempMax_planete").value);
    const img = document.getElementById("nouveau_img_planete").value;
    const planete = {
        "nom_planete": nom, "masse_planete": masse, "densite_planete": densite, "tempMin_planete": tempMin, "tempMax_planete":tempMax, "img_planete" : img
    };
    const planetes = JSON.parse(localStorage.getItem("planetes"))
    for (let id = 0; id < planetes.length; id++) {
        if (id_update == id) {
            planetes[id] = planete
        }

    }
    localStorage.setItem("planetes", JSON.stringify(planetes))
    load_data();
}

function supr_planete(id_delete) {

    let planetes = JSON.parse(localStorage.getItem("planetes"))
    for (let id = 0; id < planetes.length; id++) {
        if (id_delete == id) {
            planetes.splice(id, 1)
        }

    }
    // Pour ajouter le tableau dans le storage
    localStorage.setItem("planetes", JSON.stringify(planetes))

    load_data();
}

function getUserMedia(options, successCallback, failureCallback) {
    let api = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (api) { return api.bind(navigator)(options, successCallback, failureCallback);}
}
  
let theStream;
  
function getStream() {
    const cadrePhotoVideo = document.getElementById("photoVideo");
    cadrePhotoVideo.innerHTML += `<div style="width:100%;"><video autoplay style="height: 180px; width: 240px; border: solid white 1px;"></video></div>
    <img class="img_button" style="width:10%;" src="images/cam2.png" alt="Prendre la photo" onclick="takePhoto()"></div>`;
    const cadrePhotoPrise = document.getElementById("photoPrise");
    cadrePhotoPrise.innerHTML = ``;
    const buttonGetStream = document.getElementById("buttonGetStream");
    buttonGetStream.innerHTML = ``;
    if (!navigator.getUserMedia && !navigator.webkitGetUserMedia && !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
        alert('User Media API not supported.');
        return;
    }
    
    let constraints = {
      video: true
    };
  
    getUserMedia(constraints, function (stream) {
      let mediaControl = document.querySelector('video');
      if ('srcObject' in mediaControl) {
        mediaControl.srcObject = stream;
      } else if (navigator.mozGetUserMedia) {
        mediaControl.mozSrcObject = stream;
      } else {
        mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
      }
      theStream = stream;
    }, function (err) {
      alert('Error: ' + err);
    });
}
  
function takePhoto() {
    const cadrePhotoPrise = document.getElementById("photoPrise");
    cadrePhotoPrise.innerHTML += `<div style="width:100%;"><img id="imageTag" style="height: 180px; width: 240px;"></div><button class="buttonGetStream" onclick="getStream()">Reprendre !</button>`;
    if (!('ImageCapture' in window)) {
      alert('ImageCapture is not available');
      return;
    }
    
    if (!theStream) {
      alert('Grab the video stream first!');
      return;
    }
    
    let theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);
  
    theImageCapturer.takePhoto()
      .then(blob => {
        let theImageTag = document.getElementById('imageTag');
        theImageTag.src = URL.createObjectURL(blob);
      })
      .catch(err => alert('Error: ' + err));
    const cadrePhotoVideo = document.getElementById("photoVideo");
    cadrePhotoVideo.innerHTML = ``;
}

function subscriberForm() {
    const formulaire = document.getElementById("form");
    formulaire.innerHTML = `<div style="display: flex; flex-direction: row; justify-content : space-evenly; align-items: center;" >
    <div style="width: 50%;height: 100%;">
        <div id="photoVideo" style="display: flex; flex-wrap: wrap; width: 100%; justify-content: center; color:azure;"></div>
        <div id="photoPrise" style="display: flex; flex-wrap: wrap; width: 100%; justify-content: center; color:azure;"></div>
        <div id="buttonGetStream" style="width: 100%">
            <img class="img_button" src="images/camera.png" alt="Prendre une photo" onclick="getStream()">
        </div>
    </div style="width: 50%; height: 100%;">
    <div class="formulaire">
        <div class="label-input">
            <label for="nom_subscriber">Nom : </label><br>
            <input type="text" name="nom_subscriber" required>
        </div>
        <div class="label-input">
            <label for="prenom_subscriber">Prénom : </label><br>
            <input type="text" name="prenom_subscriber" required>
        </div>
        <div class="label-input">
            <label for="date_subscriber">Date de naissance : </label><br>
            <input type="date" name="date_subscriber" required>
        </div>
        <div class="label-input">
            <label for="email_subscriber">E-mail : </label><br>
            <input type="email" name="email_subscriber" required>
        </div>
    </div>
</div>
<button class="button_important" onclick="submitForm()">Soumettre le formulaire ! 😃</button>`;
}

function submitForm() {
    const formulaire = document.getElementById("form");
    formulaire.innerHTML = `<p style="text-align: center;">
        Notre page vous a plue et vous souhaitez être tenu informé des changements de notre application ? <br><br>
        C'est simple ! Cliquez sur le bouton ci-dessous, remplissez et soumettez-nous le formulaire. 
    </p>
    <button onclick="subscriberForm()">Remplir maintenant !</button>`;
}


let RAM = navigator.deviceMemory;
document.getElementById('result').innerHTML = `${RAM}`;