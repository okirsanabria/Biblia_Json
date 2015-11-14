/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var BibliaRVR60 = {
	version: "RVR60",
	genesis:{}, // 1
	exodo:{}, // 2
	levitico:{}, // 3
	numeros:{}, // 4
	deuteronomio:{}, // 5
	josue:{}, // 6
	jueces:{}, // 7
	rut:{}, // 8
	samuel1:{}, // 9
	samuel2:{}, // 10
	reyes1:{}, // 11
	reyes2:{}, // 12
	cronicas1:{}, // 13
	cronicas2:{}, // 14
	esdras:{}, // 15
	nehemias:{}, // 16
	ester:{}, // 17
	job:{}, // 18
	salmos:{}, // 19
	proverbios:{}, // 20 
	eclesiastes:{}, // 21
	cantares:{}, // 22
	isaias:{}, // 23
	jeremias:{}, // 24
	lamentaciones:{}, // 25
	ezequiel:{}, // 26
	daniel:{}, // 27
	oseas:{}, // 28
	joel:{}, // 29
	amos:{}, // 30
	abdias:{}, // 31
	jonas:{}, // 32
	miqueas:{}, // 33
	nahum:{}, // 34
	habacuc:{}, // 35
	sofonias:{}, // 36
	hageo:{}, // 37
	zacarias:{}, // 38
	malaquias:{}, // 39
	mateo:{}, // 40
	marcos:{}, // 41
	lucas:{}, // 42
	juan:{}, // 43
	hechos:{}, // 44
	romanos:{}, // 45
	corintios1:{}, // 46
	corintios2:{}, // 47
	galatas:{}, // 48
	efesios:{}, // 49
	filipenses:{}, // 50
	colosenses:{}, // 51 
	tesalonicenses1:{}, // 52
	tesalonicenses2:{}, // 53
	timoteo1:{}, // 54
	timoteo2:{}, // 55
	tito:{}, // 56
	filemon:{}, // 57
	hebreos:{}, // 58
	santiago:{}, // 59
	pedro1:{}, // 60
	pedro2:{}, // 61
	juan1:{}, // 62
	juan2:{}, // 63
	juan3:{}, // 64
	judas:{}, // 65
	apocalipsis:{}, // 66
};

// Génesis
BibliaRVR60.getNomLibGenesis = function(){
	return BibliaRVR60.genesis.libro;
}

BibliaRVR60.getNumCapGenesis = function(){
	return BibliaRVR60.genesis.numCapitulos;
}

BibliaRVR60.getNumVerCapGenesis = function(id){
	var cap = BibliaRVR60.genesis[id];	// id = c1, por ejemplo
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoGenesis = function(id, name){
	var cap = BibliaRVR60.genesis[id];	// id = c1, por ejemplo

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ // name = 111, por ejemplo
			return versiculos[i];
		}
	}
	
	return null;

}
// Exodo
BibliaRVR60.getNomLibExodo = function(){
	return BibliaRVR60.exodo.libro;
}

BibliaRVR60.getNumCapExodo = function(){
	return BibliaRVR60.exodo.numCapitulos;
}

BibliaRVR60.getNumVerCapExodo = function(id){
	var cap = BibliaRVR60.exodo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoExodo = function(id, name){
	var cap = BibliaRVR60.exodo[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Levitico
BibliaRVR60.getNomLibLevitico = function(){
	return BibliaRVR60.levitico.libro;
}

BibliaRVR60.getNumCapLevitico = function(){
	return BibliaRVR60.levitico.numCapitulos;
}

BibliaRVR60.getNumVerCapLevitico = function(id){
	var cap = BibliaRVR60.levitico[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoLevitico = function(id, name){
	var cap = BibliaRVR60.levitico[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Numeros
BibliaRVR60.getNomLibNumeros = function(){
	return BibliaRVR60.numeros.libro;
}

BibliaRVR60.getNumCapNumeros = function(){
	return BibliaRVR60.numeros.numCapitulos;
}

BibliaRVR60.getNumVerCapNumeros = function(id){
	var cap = BibliaRVR60.numeros[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoNumeros = function(id, name){
	var cap = BibliaRVR60.numeros[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Deuteronomio
BibliaRVR60.getNomLibDeuteronomio = function(){
	return BibliaRVR60.deuteronomio.libro;
}

BibliaRVR60.getNumCapDeuteronomio = function(){
	return BibliaRVR60.deuteronomio.numCapitulos;
}

BibliaRVR60.getNumVerCapDeuteronomio = function(id){
	var cap = BibliaRVR60.deuteronomio[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoDeuteronomio = function(id, name){
	var cap = BibliaRVR60.deuteronomio[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Josue
BibliaRVR60.getNomLibJosue = function(){
	return BibliaRVR60.josue.libro;
}

BibliaRVR60.getNumCapJosue = function(){
	return BibliaRVR60.josue.numCapitulos;
}

BibliaRVR60.getNumVerCapJosue = function(id){
	var cap = BibliaRVR60.josue[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJosue = function(id, name){
	var cap = BibliaRVR60.josue[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Jueces
BibliaRVR60.getNomLibJueces = function(){
	return BibliaRVR60.jueces.libro;
}

BibliaRVR60.getNumCapJueces = function(){
	return BibliaRVR60.jueces.numCapitulos;
}

BibliaRVR60.getNumVerCapJueces = function(id){
	var cap = BibliaRVR60.jueces[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJueces = function(id, name){
	var cap = BibliaRVR60.jueces[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Rut
BibliaRVR60.getNomLibRut = function(){
	return BibliaRVR60.rut.libro;
}

BibliaRVR60.getNumCapRut = function(){
	return BibliaRVR60.rut.numCapitulos;
}

BibliaRVR60.getNumVerCapRut = function(id){
	var cap = BibliaRVR60.rut[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoRut = function(id, name){
	var cap = BibliaRVR60.rut[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Samuel 
BibliaRVR60.getNomLibSamuel1 = function(){
	return BibliaRVR60.samuel1.libro;
}

BibliaRVR60.getNumCapSamuel1 = function(){
	return BibliaRVR60.samuel1.numCapitulos;
}

BibliaRVR60.getNumVerCapSamuel1 = function(id){
	var cap = BibliaRVR60.samuel1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoSamuel1 = function(id, name){
	var cap = BibliaRVR60.samuel1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Samuel 
BibliaRVR60.getNomLibSamuel2 = function(){
	return BibliaRVR60.samuel2.libro;
}

BibliaRVR60.getNumCapSamuel2 = function(){
	return BibliaRVR60.samuel2.numCapitulos;
}

BibliaRVR60.getNumVerCapSamuel2 = function(id){
	var cap = BibliaRVR60.samuel2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoSamuel2 = function(id, name){
	var cap = BibliaRVR60.samuel2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Reyes 
BibliaRVR60.getNomLibReyes1 = function(){
	return BibliaRVR60.reyes1.libro;
}

BibliaRVR60.getNumCapReyes1 = function(){
	return BibliaRVR60.reyes1.numCapitulos;
}

BibliaRVR60.getNumVerCapReyes1 = function(id){
	var cap = BibliaRVR60.reyes1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoReyes1 = function(id, name){
	var cap = BibliaRVR60.reyes1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Reyes 
BibliaRVR60.getNomLibReyes2 = function(){
	return BibliaRVR60.reyes2.libro;
}

BibliaRVR60.getNumCapReyes2 = function(){
	return BibliaRVR60.reyes2.numCapitulos;
}

BibliaRVR60.getNumVerCapReyes2 = function(id){
	var cap = BibliaRVR60.reyes2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoReyes2 = function(id, name){
	var cap = BibliaRVR60.reyes2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Cronicas 
BibliaRVR60.getNomLibCronicas1 = function(){
	return BibliaRVR60.cronicas1.libro;
}

BibliaRVR60.getNumCapCronicas1 = function(){
	return BibliaRVR60.cronicas1.numCapitulos;
}

BibliaRVR60.getNumVerCapCronicas1 = function(id){
	var cap = BibliaRVR60.cronicas1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoCronicas1 = function(id, name){
	var cap = BibliaRVR60.cronicas1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Cronicas 
BibliaRVR60.getNomLibCronicas2 = function(){
	return BibliaRVR60.cronicas2.libro;
}

BibliaRVR60.getNumCapCronicas2 = function(){
	return BibliaRVR60.cronicas2.numCapitulos;
}

BibliaRVR60.getNumVerCapCronicas2 = function(id){
	var cap = BibliaRVR60.cronicas2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoCronicas2 = function(id, name){
	var cap = BibliaRVR60.cronicas2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Esdras
BibliaRVR60.getNomLibEsdras = function(){
	return BibliaRVR60.esdras.libro;
}

BibliaRVR60.getNumCapEsdras = function(){
	return BibliaRVR60.esdras.numCapitulos;
}

BibliaRVR60.getNumVerCapEsdras = function(id){
	var cap = BibliaRVR60.esdras[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoEsdras = function(id, name){
	var cap = BibliaRVR60.esdras[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Nehemias
BibliaRVR60.getNomLibNehemias = function(){
	return BibliaRVR60.nehemias.libro;
}

BibliaRVR60.getNumCapNehemias = function(){
	return BibliaRVR60.nehemias.numCapitulos;
}

BibliaRVR60.getNumVerCapNehemias = function(id){
	var cap = BibliaRVR60.nehemias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoNehemias = function(id, name){
	var cap = BibliaRVR60.nehemias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Ester
BibliaRVR60.getNomLibEster = function(){
	return BibliaRVR60.ester.libro;
}

BibliaRVR60.getNumCapEster = function(){
	return BibliaRVR60.ester.numCapitulos;
}

BibliaRVR60.getNumVerCapEster = function(id){
	var cap = BibliaRVR60.ester[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoEster = function(id, name){
	var cap = BibliaRVR60.ester[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Job
BibliaRVR60.getNomLibJob = function(){
	return BibliaRVR60.job.libro;
}

BibliaRVR60.getNumCapJob = function(){
	return BibliaRVR60.job.numCapitulos;
}

BibliaRVR60.getNumVerCapJob = function(id){
	var cap = BibliaRVR60.job[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJob = function(id, name){
	var cap = BibliaRVR60.job[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Salmos
BibliaRVR60.getNomLibSalmos = function(){
	return BibliaRVR60.salmos.libro;
}

BibliaRVR60.getNumCapSalmos = function(){
	return BibliaRVR60.salmos.numCapitulos;
}

BibliaRVR60.getNumVerCapSalmos = function(id){
	var cap = BibliaRVR60.salmos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoSalmos = function(id, name){
	var cap = BibliaRVR60.salmos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Proverbios
BibliaRVR60.getNomLibProverbios = function(){
	return BibliaRVR60.proverbios.libro;
}

BibliaRVR60.getNumCapProverbios = function(){
	return BibliaRVR60.proverbios.numCapitulos;
}

BibliaRVR60.getNumVerCapProverbios = function(id){
	var cap = BibliaRVR60.proverbios[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoProverbios = function(id, name){
	var cap = BibliaRVR60.proverbios[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Eclesiastes
BibliaRVR60.getNomLibEclesiastes = function(){
	return BibliaRVR60.eclesiastes.libro;
}

BibliaRVR60.getNumCapEclesiastes = function(){
	return BibliaRVR60.eclesiastes.numCapitulos;
}

BibliaRVR60.getNumVerCapEclesiastes = function(id){
	var cap = BibliaRVR60.eclesiastes[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoEclesiastes = function(id, name){
	var cap = BibliaRVR60.eclesiastes[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Cantares
BibliaRVR60.getNomLibCantares = function(){
	return BibliaRVR60.cantares.libro;
}

BibliaRVR60.getNumCapCantares = function(){
	return BibliaRVR60.cantares.numCapitulos;
}

BibliaRVR60.getNumVerCapCantares = function(id){
	var cap = BibliaRVR60.cantares[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoCantares = function(id, name){
	var cap = BibliaRVR60.cantares[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Isaias
BibliaRVR60.getNomLibIsaias = function(){
	return BibliaRVR60.isaias.libro;
}

BibliaRVR60.getNumCapIsaias = function(){
	return BibliaRVR60.isaias.numCapitulos;
}

BibliaRVR60.getNumVerCapIsaias = function(id){
	var cap = BibliaRVR60.isaias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoIsaias = function(id, name){
	var cap = BibliaRVR60.isaias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Jeremias
BibliaRVR60.getNomLibJeremias = function(){
	return BibliaRVR60.jeremias.libro;
}

BibliaRVR60.getNumCapJeremias = function(){
	return BibliaRVR60.jeremias.numCapitulos;
}

BibliaRVR60.getNumVerCapJeremias = function(id){
	var cap = BibliaRVR60.jeremias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJeremias = function(id, name){
	var cap = BibliaRVR60.jeremias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Lamentaciones
BibliaRVR60.getNomLibLamentaciones = function(){
	return BibliaRVR60.lamentaciones.libro;
}

BibliaRVR60.getNumCapLamentaciones = function(){
	return BibliaRVR60.lamentaciones.numCapitulos;
}

BibliaRVR60.getNumVerCapLamentaciones = function(id){
	var cap = BibliaRVR60.lamentaciones[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoLamentaciones = function(id, name){
	var cap = BibliaRVR60.lamentaciones[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Ezequiel
BibliaRVR60.getNomLibEzequiel = function(){
	return BibliaRVR60.ezequiel.libro;
}

BibliaRVR60.getNumCapEzequiel = function(){
	return BibliaRVR60.ezequiel.numCapitulos;
}

BibliaRVR60.getNumVerCapEzequiel = function(id){
	var cap = BibliaRVR60.ezequiel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoEzequiel = function(id, name){
	var cap = BibliaRVR60.ezequiel[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Daniel
BibliaRVR60.getNomLibDaniel = function(){
	return BibliaRVR60.daniel.libro;
}

BibliaRVR60.getNumCapDaniel = function(){
	return BibliaRVR60.daniel.numCapitulos;
}

BibliaRVR60.getNumVerCapDaniel = function(id){
	var cap = BibliaRVR60.daniel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoDaniel = function(id, name){
	var cap = BibliaRVR60.daniel[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Oseas
BibliaRVR60.getNomLibOseas = function(){
	return BibliaRVR60.oseas.libro;
}

BibliaRVR60.getNumCapOseas = function(){
	return BibliaRVR60.oseas.numCapitulos;
}

BibliaRVR60.getNumVerCapOseas = function(id){
	var cap = BibliaRVR60.oseas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoOseas = function(id, name){
	var cap = BibliaRVR60.oseas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Joel
BibliaRVR60.getNomLibJoel = function(){
	return BibliaRVR60.joel.libro;
}

BibliaRVR60.getNumCapJoel = function(){
	return BibliaRVR60.joel.numCapitulos;
}

BibliaRVR60.getNumVerCapJoel = function(id){
	var cap = BibliaRVR60.joel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJoel = function(id, name){
	var cap = BibliaRVR60.joel[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Amos
BibliaRVR60.getNomLibAmos = function(){
	return BibliaRVR60.amos.libro;
}

BibliaRVR60.getNumCapAmos = function(){
	return BibliaRVR60.amos.numCapitulos;
}

BibliaRVR60.getNumVerCapAmos = function(id){
	var cap = BibliaRVR60.amos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoAmos = function(id, name){
	var cap = BibliaRVR60.amos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Abdias
BibliaRVR60.getNomLibAbdias = function(){
	return BibliaRVR60.abdias.libro;
}

BibliaRVR60.getNumCapAbdias = function(){
	return BibliaRVR60.abdias.numCapitulos;
}

BibliaRVR60.getNumVerCapAbdias = function(id){
	var cap = BibliaRVR60.abdias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoAbdias = function(id, name){
	var cap = BibliaRVR60.abdias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Jonas
BibliaRVR60.getNomLibJonas = function(){
	return BibliaRVR60.jonas.libro;
}

BibliaRVR60.getNumCapJonas = function(){
	return BibliaRVR60.jonas.numCapitulos;
}

BibliaRVR60.getNumVerCapJonas = function(id){
	var cap = BibliaRVR60.jonas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJonas = function(id, name){
	var cap = BibliaRVR60.jonas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Miqueas
BibliaRVR60.getNomLibMiqueas = function(){
	return BibliaRVR60.miqueas.libro;
}

BibliaRVR60.getNumCapMiqueas = function(){
	return BibliaRVR60.miqueas.numCapitulos;
}

BibliaRVR60.getNumVerCapMiqueas = function(id){
	var cap = BibliaRVR60.miqueas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoMiqueas = function(id, name){
	var cap = BibliaRVR60.miqueas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Nahum
BibliaRVR60.getNomLibNahum = function(){
	return BibliaRVR60.nahum.libro;
}

BibliaRVR60.getNumCapNahum = function(){
	return BibliaRVR60.nahum.numCapitulos;
}

BibliaRVR60.getNumVerCapNahum = function(id){
	var cap = BibliaRVR60.nahum[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoNahum = function(id, name){
	var cap = BibliaRVR60.nahum[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Habacuc
BibliaRVR60.getNomLibHabacuc = function(){
	return BibliaRVR60.habacuc.libro;
}

BibliaRVR60.getNumCapHabacuc = function(){
	return BibliaRVR60.habacuc.numCapitulos;
}

BibliaRVR60.getNumVerCapHabacuc = function(id){
	var cap = BibliaRVR60.habacuc[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoHabacuc = function(id, name){
	var cap = BibliaRVR60.habacuc[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Sofonias
BibliaRVR60.getNomLibSofonias = function(){
	return BibliaRVR60.sofonias.libro;
}

BibliaRVR60.getNumCapSofonias = function(){
	return BibliaRVR60.sofonias.numCapitulos;
}

BibliaRVR60.getNumVerCapSofonias = function(id){
	var cap = BibliaRVR60.sofonias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoSofonias = function(id, name){
	var cap = BibliaRVR60.sofonias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Hageo
BibliaRVR60.getNomLibHageo = function(){
	return BibliaRVR60.hageo.libro;
}

BibliaRVR60.getNumCapHageo = function(){
	return BibliaRVR60.hageo.numCapitulos;
}

BibliaRVR60.getNumVerCapHageo = function(id){
	var cap = BibliaRVR60.hageo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoHageo = function(id, name){
	var cap = BibliaRVR60.hageo[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Zacarias
BibliaRVR60.getNomLibZacarias = function(){
	return BibliaRVR60.zacarias.libro;
}

BibliaRVR60.getNumCapZacarias = function(){
	return BibliaRVR60.zacarias.numCapitulos;
}

BibliaRVR60.getNumVerCapZacarias = function(id){
	var cap = BibliaRVR60.zacarias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoZacarias = function(id, name){
	var cap = BibliaRVR60.zacarias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Malaquias
BibliaRVR60.getNomLibMalaquias = function(){
	return BibliaRVR60.malaquias.libro;
}

BibliaRVR60.getNumCapMalaquias = function(){
	return BibliaRVR60.malaquias.numCapitulos;
}

BibliaRVR60.getNumVerCapMalaquias = function(id){
	var cap = BibliaRVR60.malaquias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoMalaquias = function(id, name){
	var cap = BibliaRVR60.malaquias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Mateo
BibliaRVR60.getNomLibMateo = function(){
	return BibliaRVR60.mateo.libro;
}

BibliaRVR60.getNumCapMateo = function(){
	return BibliaRVR60.mateo.numCapitulos;
}

BibliaRVR60.getNumVerCapMateo = function(id){
	var cap = BibliaRVR60.mateo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoMateo = function(id, name){
	var cap = BibliaRVR60.mateo[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Marcos
BibliaRVR60.getNomLibMarcos = function(){
	return BibliaRVR60.marcos.libro;
}

BibliaRVR60.getNumCapMarcos = function(){
	return BibliaRVR60.marcos.numCapitulos;
}

BibliaRVR60.getNumVerCapMarcos = function(id){
	var cap = BibliaRVR60.marcos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoMarcos = function(id, name){
	var cap = BibliaRVR60.marcos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Lucas
BibliaRVR60.getNomLibLucas = function(){
	return BibliaRVR60.lucas.libro;
}

BibliaRVR60.getNumCapLucas = function(){
	return BibliaRVR60.lucas.numCapitulos;
}

BibliaRVR60.getNumVerCapLucas = function(id){
	var cap = BibliaRVR60.lucas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoLucas = function(id, name){
	var cap = BibliaRVR60.lucas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Juan
BibliaRVR60.getNomLibJuan = function(){
	return BibliaRVR60.juan.libro;
}

BibliaRVR60.getNumCapJuan = function(){
	return BibliaRVR60.juan.numCapitulos;
}

BibliaRVR60.getNumVerCapJuan = function(id){
	var cap = BibliaRVR60.juan[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJuan = function(id, name){
	var cap = BibliaRVR60.juan[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Hechos
BibliaRVR60.getNomLibHechos = function(){
	return BibliaRVR60.hechos.libro;
}

BibliaRVR60.getNumCapHechos = function(){
	return BibliaRVR60.hechos.numCapitulos;
}

BibliaRVR60.getNumVerCapHechos = function(id){
	var cap = BibliaRVR60.hechos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoHechos = function(id, name){
	var cap = BibliaRVR60.hechos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Romanos
BibliaRVR60.getNomLibRomanos = function(){
	return BibliaRVR60.romanos.libro;
}

BibliaRVR60.getNumCapRomanos = function(){
	return BibliaRVR60.romanos.numCapitulos;
}

BibliaRVR60.getNumVerCapRomanos = function(id){
	var cap = BibliaRVR60.romanos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoRomanos = function(id, name){
	var cap = BibliaRVR60.romanos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Corintios
BibliaRVR60.getNomLibCorintios1 = function(){
	return BibliaRVR60.corintios1.libro;
}

BibliaRVR60.getNumCapCorintios1 = function(){
	return BibliaRVR60.corintios1.numCapitulos;
}

BibliaRVR60.getNumVerCapCorintios1 = function(id){
	var cap = BibliaRVR60.corintios1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoCorintios1 = function(id, name){
	var cap = BibliaRVR60.corintios1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Corintios
BibliaRVR60.getNomLibCorintios2 = function(){
	return BibliaRVR60.corintios2.libro;
}

BibliaRVR60.getNumCapCorintios2 = function(){
	return BibliaRVR60.corintios2.numCapitulos;
}

BibliaRVR60.getNumVerCapCorintios2 = function(id){
	var cap = BibliaRVR60.corintios2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoCorintios2 = function(id, name){
	var cap = BibliaRVR60.corintios2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Galatas
BibliaRVR60.getNomLibGalatas = function(){
	return BibliaRVR60.galatas.libro;
}

BibliaRVR60.getNumCapGalatas = function(){
	return BibliaRVR60.galatas.numCapitulos;
}

BibliaRVR60.getNumVerCapGalatas = function(id){
	var cap = BibliaRVR60.galatas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoGalatas = function(id, name){
	var cap = BibliaRVR60.galatas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Efesios
BibliaRVR60.getNomLibEfesios = function(){
	return BibliaRVR60.efesios.libro;
}

BibliaRVR60.getNumCapEfesios = function(){
	return BibliaRVR60.efesios.numCapitulos;
}

BibliaRVR60.getNumVerCapEfesios = function(id){
	var cap = BibliaRVR60.efesios[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoEfesios = function(id, name){
	var cap = BibliaRVR60.efesios[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Filipenses
BibliaRVR60.getNomLibFilipenses = function(){
	return BibliaRVR60.filipenses.libro;
}

BibliaRVR60.getNumCapFilipenses = function(){
	return BibliaRVR60.filipenses.numCapitulos;
}

BibliaRVR60.getNumVerCapFilipenses = function(id){
	var cap = BibliaRVR60.filipenses[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoFilipenses = function(id, name){
	var cap = BibliaRVR60.filipenses[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Colosenses
BibliaRVR60.getNomLibColosenses = function(){
	return BibliaRVR60.colosenses.libro;
}

BibliaRVR60.getNumCapColosenses = function(){
	return BibliaRVR60.colosenses.numCapitulos;
}

BibliaRVR60.getNumVerCapColosenses = function(id){
	var cap = BibliaRVR60.colosenses[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoColosenses = function(id, name){
	var cap = BibliaRVR60.colosenses[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Tesalonicenses
BibliaRVR60.getNomLibTesalonicenses1 = function(){
	return BibliaRVR60.tesalonicenses1.libro;
}

BibliaRVR60.getNumCapTesalonicenses1 = function(){
	return BibliaRVR60.tesalonicenses1.numCapitulos;
}

BibliaRVR60.getNumVerCapTesalonicenses1 = function(id){
	var cap = BibliaRVR60.tesalonicenses1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoTesalonicenses1 = function(id, name){
	var cap = BibliaRVR60.tesalonicenses1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Tesalonicenses
BibliaRVR60.getNomLibTesalonicenses2 = function(){
	return BibliaRVR60.tesalonicenses2.libro;
}

BibliaRVR60.getNumCapTesalonicenses2 = function(){
	return BibliaRVR60.tesalonicenses2.numCapitulos;
}

BibliaRVR60.getNumVerCapTesalonicenses2 = function(id){
	var cap = BibliaRVR60.tesalonicenses2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoTesalonicenses2 = function(id, name){
	var cap = BibliaRVR60.tesalonicenses2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Timoteo
BibliaRVR60.getNomLibTimoteo1 = function(){
	return BibliaRVR60.timoteo1.libro;
}

BibliaRVR60.getNumCapTimoteo1 = function(){
	return BibliaRVR60.timoteo1.numCapitulos;
}

BibliaRVR60.getNumVerCapTimoteo1 = function(id){
	var cap = BibliaRVR60.timoteo1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoTimoteo1 = function(id, name){
	var cap = BibliaRVR60.timoteo1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Timoteo
BibliaRVR60.getNomLibTimoteo2 = function(){
	return BibliaRVR60.timoteo2.libro;
}

BibliaRVR60.getNumCapTimoteo2 = function(){
	return BibliaRVR60.timoteo2.numCapitulos;
}

BibliaRVR60.getNumVerCapTimoteo2 = function(id){
	var cap = BibliaRVR60.timoteo2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoTimoteo2 = function(id, name){
	var cap = BibliaRVR60.timoteo2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Tito
BibliaRVR60.getNomLibTito = function(){
	return BibliaRVR60.tito.libro;
}

BibliaRVR60.getNumCapTito = function(){
	return BibliaRVR60.tito.numCapitulos;
}

BibliaRVR60.getNumVerCapTito = function(id){
	var cap = BibliaRVR60.tito[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoTito = function(id, name){
	var cap = BibliaRVR60.tito[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Filemon
BibliaRVR60.getNomLibFilemon = function(){
	return BibliaRVR60.filemon.libro;
}

BibliaRVR60.getNumCapFilemon = function(){
	return BibliaRVR60.filemon.numCapitulos;
}

BibliaRVR60.getNumVerCapFilemon = function(id){
	var cap = BibliaRVR60.filemon[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoFilemon = function(id, name){
	var cap = BibliaRVR60.filemon[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Hebreos
BibliaRVR60.getNomLibHebreos = function(){
	return BibliaRVR60.hebreos.libro;
}

BibliaRVR60.getNumCapHebreos = function(){
	return BibliaRVR60.hebreos.numCapitulos;
}

BibliaRVR60.getNumVerCapHebreos = function(id){
	var cap = BibliaRVR60.hebreos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoHebreos = function(id, name){
	var cap = BibliaRVR60.hebreos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Santiago
BibliaRVR60.getNomLibSantiago = function(){
	return BibliaRVR60.santiago.libro;
}

BibliaRVR60.getNumCapSantiago = function(){
	return BibliaRVR60.santiago.numCapitulos;
}

BibliaRVR60.getNumVerCapSantiago = function(id){
	var cap = BibliaRVR60.santiago[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoSantiago = function(id, name){
	var cap = BibliaRVR60.santiago[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Pedro
BibliaRVR60.getNomLibPedro1 = function(){
	return BibliaRVR60.pedro1.libro;
}

BibliaRVR60.getNumCapPedro1 = function(){
	return BibliaRVR60.pedro1.numCapitulos;
}

BibliaRVR60.getNumVerCapPedro1 = function(id){
	var cap = BibliaRVR60.pedro1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoPedro1 = function(id, name){
	var cap = BibliaRVR60.pedro1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Pedro
BibliaRVR60.getNomLibPedro2 = function(){
	return BibliaRVR60.pedro2.libro;
}

BibliaRVR60.getNumCapPedro2 = function(){
	return BibliaRVR60.pedro2.numCapitulos;
}

BibliaRVR60.getNumVerCapPedro2 = function(id){
	var cap = BibliaRVR60.pedro2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoPedro2 = function(id, name){
	var cap = BibliaRVR60.pedro2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Juan
BibliaRVR60.getNomLibJuan1 = function(){
	return BibliaRVR60.juan1.libro;
}

BibliaRVR60.getNumCapJuan1 = function(){
	return BibliaRVR60.juan1.numCapitulos;
}

BibliaRVR60.getNumVerCapJuan1 = function(id){
	var cap = BibliaRVR60.juan1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJuan1 = function(id, name){
	var cap = BibliaRVR60.juan1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Juan
BibliaRVR60.getNomLibJuan2 = function(){
	return BibliaRVR60.juan2.libro;
}

BibliaRVR60.getNumCapJuan2 = function(){
	return BibliaRVR60.juan2.numCapitulos;
}

BibliaRVR60.getNumVerCapJuan2 = function(id){
	var cap = BibliaRVR60.juan2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJuan2 = function(id, name){
	var cap = BibliaRVR60.juan2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 3 Juan
BibliaRVR60.getNomLibJuan3 = function(){
	return BibliaRVR60.juan3.libro;
}

BibliaRVR60.getNumCapJuan3 = function(){
	return BibliaRVR60.juan3.numCapitulos;
}

BibliaRVR60.getNumVerCapJuan3 = function(id){
	var cap = BibliaRVR60.juan3[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJuan3 = function(id, name){
	var cap = BibliaRVR60.juan3[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Judas
BibliaRVR60.getNomLibJudas = function(){
	return BibliaRVR60.judas.libro;
}

BibliaRVR60.getNumCapJudas = function(){
	return BibliaRVR60.judas.numCapitulos;
}

BibliaRVR60.getNumVerCapJudas = function(id){
	var cap = BibliaRVR60.judas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoJudas = function(id, name){
	var cap = BibliaRVR60.judas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Apocalipsis
BibliaRVR60.getNomLibApocalipsis = function(){
	return BibliaRVR60.apocalipsis.libro;
}

BibliaRVR60.getNumCapApocalipsis = function(){
	return BibliaRVR60.apocalipsis.numCapitulos;
}

BibliaRVR60.getNumVerCapApocalipsis = function(id){
	var cap = BibliaRVR60.apocalipsis[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaRVR60.getVersiculoApocalipsis = function(id, name){
	var cap = BibliaRVR60.apocalipsis[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
