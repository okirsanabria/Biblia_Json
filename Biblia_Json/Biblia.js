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

function Biblia(){
	
	this.versiones = {
		RVR60: "RVR60", // Español
		JFA: "JFA", // Portugués
		KJV: "KJV", // Ingles
	}

	this.libros = {
		genesis: 1, 
		exodo: 2,
		levitico: 3,
		numeros: 4,
		deuteronomio: 5,
		josue: 6,
		jueces: 7,
		rut: 8,
		samuel1: 9,
		samuel2: 10,
		reyes1: 11,
		reyes2: 12,
		cronicas1: 13,
		cronicas2: 14,
		esdras: 15,
		nehemias: 16,
		ester: 17,
		job: 18,
		salmos: 19,
		proverbios: 20, 
		eclesiastes: 21,
		cantares: 22,
		isaias: 23,
		jeremias: 24,
		lamentaciones: 25,
		ezequiel: 26,
		daniel: 27,
		oseas: 28,
		joel: 29,
		amos: 30,
		abdias: 31,
		jonas: 32,
		miqueas: 33,
		nahum: 34,
		habacuc: 35,
		sofonias: 36,
		hageo: 37,
		zacarias: 38,
		malaquias: 39,
		mateo: 40,
		marcos: 41,
		lucas: 42,
		juan: 43,
		hechos: 44,
		romanos: 45,
		corintios1: 46,
		corintios2: 47,
		galatas: 48,
		efesios: 49,
		filipenses: 50,
		colosenses: 51, 
		tesalonicenses1: 52,
		tesalonicenses2: 53,
		timoteo1: 54,
		timoteo2: 55,
		tito: 56,
		filemon: 57,
		hebreos: 58,
		santiago: 59,
		pedro1: 60,
		pedro2: 61,
		juan1: 62,
		juan2: 63,
		juan3: 64,
		judas: 65,
		apocalipsis: 66	
	}

}

Biblia.prototype.buscarNombreLibro = function (lib, cap, version){
	var nomLibro = "", numCapitulos = 0, numVerCap = 0, texto = "";
	
	if(version == this.versiones.RVR60){
		nomLibro = this.loadNomLibRVR60(lib);
		numCapitulos = this.loadNumCapRVR60(lib);
		numVerCap = this.loadNumVerCapRVR60(lib,"c"+cap);

		texto += nomLibro + " " + cap + "-" + numCapitulos + " (" + version + ")";

	}
	else if(version == this.versiones.JFA){
		nomLibro = this.loadNomLibJFA(lib);
		numCapitulos = this.loadNumCapJFA(lib);
		numVerCap = this.loadNumVerCapJFA(lib,"c"+cap);

		texto += nomLibro + " " + cap + "-" + numCapitulos + " (" + version + ")";

	}
	else if(version == this.versiones.KJV){
		nomLibro = this.loadNomLibKJV(lib);
		numCapitulos = this.loadNumCapKJV(lib);
		numVerCap = this.loadNumVerCapKJV(lib,"c"+cap);
		
		texto += nomLibro + " " + cap + "-" + numCapitulos + " (" + version + ")";

	}

	return texto;

}

Biblia.prototype.buscarCapitulo = function (lib, cap, version){
	var nomLibro = "", numCapitulos = 0, numVerCap = 0, jsonVersiculo = null, texto = "";
	
	if(version==this.versiones.RVR60){
		nomLibro = this.loadNomLibRVR60(lib);
		numCapitulos = this.loadNumCapRVR60(lib);
		numVerCap = this.loadNumVerCapRVR60(lib,"c"+cap);

		//texto += nomLibro + " " + cap + " - " + numCapitulos + "  ";
		
		for(var ver=1;ver<=numVerCap;ver++){
			jsonVersiculo = this.loadVersiculoRVR60(lib,"c"+cap,lib+""+cap+""+ver);	
			if(ver == 1){
				texto += jsonVersiculo.v+ " " +jsonVersiculo.texto; 
			}
			else{
				texto += " " + jsonVersiculo.v+ " " +jsonVersiculo.texto; 
			}
		}
	}
	else if(version==this.versiones.JFA){
		nomLibro = this.loadNomLibJFA(lib);
		numCapitulos = this.loadNumCapJFA(lib);
		numVerCap = this.loadNumVerCapJFA(lib,"c"+cap);

		//texto += nomLibro + " " + cap + " - " + numCapitulos + "  ";

		for(var ver=1;ver<=numVerCap;ver++){
			jsonVersiculo = this.loadVersiculoJFA(lib,"c"+cap,lib+""+cap+""+ver);	
			if(ver == 1){
				texto += jsonVersiculo.v+ " " +jsonVersiculo.texto; 
			}
			else{
				texto += " " + jsonVersiculo.v+ " " +jsonVersiculo.texto; 
			}
		}
	}
	else if(version==this.versiones.KJV){
		nomLibro = this.loadNomLibKJV(lib);
		numCapitulos = this.loadNumCapKJV(lib);
		numVerCap = this.loadNumVerCapKJV(lib,"c"+cap);
		
		//texto += nomLibro + " " + cap + " - " + numCapitulos + "  ";

		for(var ver=1;ver<=numVerCap;ver++){
			jsonVersiculo = this.loadVersiculoKJV(lib,"c"+cap,lib+""+cap+""+ver);	
			if(ver == 1){
				texto += jsonVersiculo.v+ " " +jsonVersiculo.texto; 
			}
			else{
				texto += " " + jsonVersiculo.v+ " " +jsonVersiculo.texto; 
			}
		}
	}

	return texto;

}


// Método que retorna el nombre de un libro específico de la BibliaRVR60.
Biblia.prototype.loadNomLibRVR60 = function(libro){
	var nomLibro = "";

	switch(libro){
		case 1: nomLibro = BibliaRVR60.getNomLibGenesis();
		break;
		case 2: nomLibro = BibliaRVR60.getNomLibExodo();
		break;
		case 3: nomLibro = BibliaRVR60.getNomLibLevitico();
		break;
		case 4: nomLibro = BibliaRVR60.getNomLibNumeros();
		break;
		case 5: nomLibro = BibliaRVR60.getNomLibDeuteronomio();
		break;
		case 6: nomLibro = BibliaRVR60.getNomLibJosue();
		break;
		case 7: nomLibro = BibliaRVR60.getNomLibJueces();
		break;
		case 8: nomLibro = BibliaRVR60.getNomLibRut();
		break;
		case 9: nomLibro = BibliaRVR60.getNomLibSamuel1();
		break;
		case 10: nomLibro = BibliaRVR60.getNomLibSamuel2();
		break;
		case 11: nomLibro = BibliaRVR60.getNomLibReyes1();
		break;
		case 12: nomLibro = BibliaRVR60.getNomLibReyes2();
		break;
		case 13: nomLibro = BibliaRVR60.getNomLibCronicas1();
		break;
		case 14: nomLibro = BibliaRVR60.getNomLibCronicas2();
		break;
		case 15: nomLibro = BibliaRVR60.getNomLibEsdras();
		break;
		case 16: nomLibro = BibliaRVR60.getNomLibNehemias();
		break;
		case 17: nomLibro = BibliaRVR60.getNomLibEster();
		break;
		case 18: nomLibro = BibliaRVR60.getNomLibJob();
		break;
		case 19: nomLibro = BibliaRVR60.getNomLibSalmos();
		break;
		case 20: nomLibro = BibliaRVR60.getNomLibProverbios();
		break;
		case 21: nomLibro = BibliaRVR60.getNomLibEclesiastes();
		break;
		case 22: nomLibro = BibliaRVR60.getNomLibCantares();
		break;
		case 23: nomLibro = BibliaRVR60.getNomLibIsaias();
		break;
		case 24: nomLibro = BibliaRVR60.getNomLibJeremias();
		break;
		case 25: nomLibro = BibliaRVR60.getNomLibLamentaciones();
		break;
		case 26: nomLibro = BibliaRVR60.getNomLibEzequiel();
		break;
		case 27: nomLibro = BibliaRVR60.getNomLibDaniel();
		break;
		case 28: nomLibro = BibliaRVR60.getNomLibOseas();
		break;
		case 29: nomLibro = BibliaRVR60.getNomLibJoel();
		break;
		case 30: nomLibro = BibliaRVR60.getNomLibAmos();
		break;
		case 31: nomLibro = BibliaRVR60.getNomLibAbdias();
		break;
		case 32: nomLibro = BibliaRVR60.getNomLibJonas();
		break;
		case 33: nomLibro = BibliaRVR60.getNomLibMiqueas();
		break;
		case 34: nomLibro = BibliaRVR60.getNomLibNahum();
		break;
		case 35: nomLibro = BibliaRVR60.getNomLibHabacuc();
		break;
		case 36: nomLibro = BibliaRVR60.getNomLibSofonias();
		break;
		case 37: nomLibro = BibliaRVR60.getNomLibHageo();
		break;
		case 38: nomLibro = BibliaRVR60.getNomLibZacarias();
		break;
		case 39: nomLibro = BibliaRVR60.getNomLibMalaquias();
		break;
		case 40: nomLibro = BibliaRVR60.getNomLibMateo();
		break;
		case 41: nomLibro = BibliaRVR60.getNomLibMarcos();
		break;
		case 42: nomLibro = BibliaRVR60.getNomLibLucas();
		break;
		case 43: nomLibro = BibliaRVR60.getNomLibJuan();
		break;
		case 44: nomLibro = BibliaRVR60.getNomLibHechos();
		break;
		case 45: nomLibro = BibliaRVR60.getNomLibRomanos();
		break;
		case 46: nomLibro = BibliaRVR60.getNomLibCorintios1();
		break;
		case 47: nomLibro = BibliaRVR60.getNomLibCorintios2();
		break;
		case 48: nomLibro = BibliaRVR60.getNomLibGalatas();
		break;
		case 49: nomLibro = BibliaRVR60.getNomLibEfesios();
		break;
		case 50: nomLibro = BibliaRVR60.getNomLibFilipenses();
		break;
		case 51: nomLibro = BibliaRVR60.getNomLibColosenses();
		break;
		case 52: nomLibro = BibliaRVR60.getNomLibTesalonicenses1();
		break;
		case 53: nomLibro = BibliaRVR60.getNomLibTesalonicenses2();
		break;
		case 54: nomLibro = BibliaRVR60.getNomLibTimoteo1();
		break;
		case 55: nomLibro = BibliaRVR60.getNomLibTimoteo2();
		break;
		case 56: nomLibro = BibliaRVR60.getNomLibTito();
		break;
		case 57: nomLibro = BibliaRVR60.getNomLibFilemon();
		break;
		case 58: nomLibro = BibliaRVR60.getNomLibHebreos();
		break;
		case 59: nomLibro = BibliaRVR60.getNomLibSantiago();
		break;
		case 60: nomLibro = BibliaRVR60.getNomLibPedro1();
		break;
		case 61: nomLibro = BibliaRVR60.getNomLibPedro2();
		break;
		case 62: nomLibro = BibliaRVR60.getNomLibJuan1();
		break;
		case 63: nomLibro = BibliaRVR60.getNomLibJuan2();
		break;
		case 64: nomLibro = BibliaRVR60.getNomLibJuan3();
		break;
		case 65: nomLibro = BibliaRVR60.getNomLibJudas();
		break;
		case 66: nomLibro = BibliaRVR60.getNomLibApocalipsis();
		break;


	}

	return nomLibro;

}

// Método que retorna el número de capitulos de un libro específico de la BibliaRVR60.  
Biblia.prototype.loadNumCapRVR60 = function(libro) {
	var numCapitulos = 0;

	switch(libro){
		case 1: numCapitulos = BibliaRVR60.getNumCapGenesis();
		break;
		case 2: numCapitulos = BibliaRVR60.getNumCapExodo();
		break;
		case 3: numCapitulos = BibliaRVR60.getNumCapLevitico();
		break;
		case 4: numCapitulos = BibliaRVR60.getNumCapNumeros();
		break;
		case 5: numCapitulos = BibliaRVR60.getNumCapDeuteronomio();
		break;
		case 6: numCapitulos = BibliaRVR60.getNumCapJosue();
		break;
		case 7: numCapitulos = BibliaRVR60.getNumCapJueces();
		break;
		case 8: numCapitulos = BibliaRVR60.getNumCapRut();
		break;
		case 9: numCapitulos = BibliaRVR60.getNumCapSamuel1();
		break;
		case 10: numCapitulos = BibliaRVR60.getNumCapSamuel2();
		break;
		case 11: numCapitulos = BibliaRVR60.getNumCapReyes1();
		break;
		case 12: numCapitulos = BibliaRVR60.getNumCapReyes2();
		break;
		case 13: numCapitulos = BibliaRVR60.getNumCapCronicas1();
		break;
		case 14: numCapitulos = BibliaRVR60.getNumCapCronicas2();
		break;
		case 15: numCapitulos = BibliaRVR60.getNumCapEsdras();
		break;
		case 16: numCapitulos = BibliaRVR60.getNumCapNehemias();
		break;
		case 17: numCapitulos = BibliaRVR60.getNumCapEster();
		break;
		case 18: numCapitulos = BibliaRVR60.getNumCapJob();
		break;
		case 19: numCapitulos = BibliaRVR60.getNumCapSalmos();
		break;
		case 20: numCapitulos = BibliaRVR60.getNumCapProverbios();
		break;
		case 21: numCapitulos = BibliaRVR60.getNumCapEclesiastes();
		break;
		case 22: numCapitulos = BibliaRVR60.getNumCapCantares();
		break;
		case 23: numCapitulos = BibliaRVR60.getNumCapIsaias();
		break;
		case 24: numCapitulos = BibliaRVR60.getNumCapJeremias();
		break;
		case 25: numCapitulos = BibliaRVR60.getNumCapLamentaciones();
		break;
		case 26: numCapitulos = BibliaRVR60.getNumCapEzequiel();
		break;
		case 27: numCapitulos = BibliaRVR60.getNumCapDaniel();
		break;
		case 28: numCapitulos = BibliaRVR60.getNumCapOseas();
		break;
		case 29: numCapitulos = BibliaRVR60.getNumCapJoel();
		break;
		case 30: numCapitulos = BibliaRVR60.getNumCapAmos();
		break;
		case 31: numCapitulos = BibliaRVR60.getNumCapAbdias();
		break;
		case 32: numCapitulos = BibliaRVR60.getNumCapJonas();
		break;
		case 33: numCapitulos = BibliaRVR60.getNumCapMiqueas();
		break;
		case 34: numCapitulos = BibliaRVR60.getNumCapNahum();
		break;
		case 35: numCapitulos = BibliaRVR60.getNumCapHabacuc();
		break;
		case 36: numCapitulos = BibliaRVR60.getNumCapSofonias();
		break;
		case 37: numCapitulos = BibliaRVR60.getNumCapHageo();
		break;
		case 38: numCapitulos = BibliaRVR60.getNumCapZacarias();
		break;
		case 39: numCapitulos = BibliaRVR60.getNumCapMalaquias();
		break;
		case 40: numCapitulos = BibliaRVR60.getNumCapMateo();
		break;
		case 41: numCapitulos = BibliaRVR60.getNumCapMarcos();
		break;
		case 42: numCapitulos = BibliaRVR60.getNumCapLucas();
		break;
		case 43: numCapitulos = BibliaRVR60.getNumCapJuan();
		break;
		case 44: numCapitulos = BibliaRVR60.getNumCapHechos();
		break;
		case 45: numCapitulos = BibliaRVR60.getNumCapRomanos();
		break;
		case 46: numCapitulos = BibliaRVR60.getNumCapCorintios1();
		break;
		case 47: numCapitulos = BibliaRVR60.getNumCapCorintios2();
		break;
		case 48: numCapitulos = BibliaRVR60.getNumCapGalatas();
		break;
		case 49: numCapitulos = BibliaRVR60.getNumCapEfesios();
		break;
		case 50: numCapitulos = BibliaRVR60.getNumCapFilipenses();
		break;
		case 51: numCapitulos = BibliaRVR60.getNumCapColosenses();
		break;
		case 52: numCapitulos = BibliaRVR60.getNumCapTesalonicenses1();
		break;
		case 53: numCapitulos = BibliaRVR60.getNumCapTesalonicenses2();
		break;
		case 54: numCapitulos = BibliaRVR60.getNumCapTimoteo1();
		break;
		case 55: numCapitulos = BibliaRVR60.getNumCapTimoteo2();
		break;
		case 56: numCapitulos = BibliaRVR60.getNumCapTito();
		break;
		case 57: numCapitulos = BibliaRVR60.getNumCapFilemon();
		break;
		case 58: numCapitulos = BibliaRVR60.getNumCapHebreos();
		break;
		case 59: numCapitulos = BibliaRVR60.getNumCapSantiago();
		break;
		case 60: numCapitulos = BibliaRVR60.getNumCapPedro1();
		break;
		case 61: numCapitulos = BibliaRVR60.getNumCapPedro2();
		break;
		case 62: numCapitulos = BibliaRVR60.getNumCapJuan1();
		break;
		case 63: numCapitulos = BibliaRVR60.getNumCapJuan2();
		break;
		case 64: numCapitulos = BibliaRVR60.getNumCapJuan3();
		break;
		case 65: numCapitulos = BibliaRVR60.getNumCapJudas();
		break;
		case 66: numCapitulos = BibliaRVR60.getNumCapApocalipsis();
		break;


	}

	return numCapitulos;
}

// Método que retorna el número de versiculos de un cápitulo específico de la BibliaRVR60.
Biblia.prototype.loadNumVerCapRVR60 = function(libro,cap) {
	var numVersiculos = 0;

	switch(libro){
		case 1: numVersiculos = BibliaRVR60.getNumVerCapGenesis(cap);
		break;
		case 2: numVersiculos = BibliaRVR60.getNumVerCapExodo(cap);
		break;
		case 3: numVersiculos = BibliaRVR60.getNumVerCapLevitico(cap);
		break;
		case 4: numVersiculos = BibliaRVR60.getNumVerCapNumeros(cap);
		break;
		case 5: numVersiculos = BibliaRVR60.getNumVerCapDeuteronomio(cap);
		break;
		case 6: numVersiculos = BibliaRVR60.getNumVerCapJosue(cap);
		break;
		case 7: numVersiculos = BibliaRVR60.getNumVerCapJueces(cap);
		break;
		case 8: numVersiculos = BibliaRVR60.getNumVerCapRut(cap);
		break;
		case 9: numVersiculos = BibliaRVR60.getNumVerCapSamuel1(cap);
		break;
		case 10: numVersiculos = BibliaRVR60.getNumVerCapSamuel2(cap);
		break;
		case 11: numVersiculos = BibliaRVR60.getNumVerCapReyes1(cap);
		break;
		case 12: numVersiculos = BibliaRVR60.getNumVerCapReyes2(cap);
		break;
		case 13: numVersiculos = BibliaRVR60.getNumVerCapCronicas1(cap);
		break;
		case 14: numVersiculos = BibliaRVR60.getNumVerCapCronicas2(cap);
		break;
		case 15: numVersiculos = BibliaRVR60.getNumVerCapEsdras(cap);
		break;
		case 16: numVersiculos = BibliaRVR60.getNumVerCapNehemias(cap);
		break;
		case 17: numVersiculos = BibliaRVR60.getNumVerCapEster(cap);
		break;
		case 18: numVersiculos = BibliaRVR60.getNumVerCapJob(cap);
		break;
		case 19: numVersiculos = BibliaRVR60.getNumVerCapSalmos(cap);
		break;
		case 20: numVersiculos = BibliaRVR60.getNumVerCapProverbios(cap);
		break;
		case 21: numVersiculos = BibliaRVR60.getNumVerCapEclesiastes(cap);
		break;
		case 22: numVersiculos = BibliaRVR60.getNumVerCapCantares(cap);
		break;
		case 23: numVersiculos = BibliaRVR60.getNumVerCapIsaias(cap);
		break;
		case 24: numVersiculos = BibliaRVR60.getNumVerCapJeremias(cap);
		break;
		case 25: numVersiculos = BibliaRVR60.getNumVerCapLamentaciones(cap);
		break;
		case 26: numVersiculos = BibliaRVR60.getNumVerCapEzequiel(cap);
		break;
		case 27: numVersiculos = BibliaRVR60.getNumVerCapDaniel(cap);
		break;
		case 28: numVersiculos = BibliaRVR60.getNumVerCapOseas(cap);
		break;
		case 29: numVersiculos = BibliaRVR60.getNumVerCapJoel(cap);
		break;
		case 30: numVersiculos = BibliaRVR60.getNumVerCapAmos(cap);
		break;
		case 31: numVersiculos = BibliaRVR60.getNumVerCapAbdias(cap);
		break;
		case 32: numVersiculos = BibliaRVR60.getNumVerCapJonas(cap);
		break;
		case 33: numVersiculos = BibliaRVR60.getNumVerCapMiqueas(cap);
		break;
		case 34: numVersiculos = BibliaRVR60.getNumVerCapNahum(cap);
		break;
		case 35: numVersiculos = BibliaRVR60.getNumVerCapHabacuc(cap);
		break;
		case 36: numVersiculos = BibliaRVR60.getNumVerCapSofonias(cap);
		break;
		case 37: numVersiculos = BibliaRVR60.getNumVerCapHageo(cap);
		break;
		case 38: numVersiculos = BibliaRVR60.getNumVerCapZacarias(cap);
		break;
		case 39: numVersiculos = BibliaRVR60.getNumVerCapMalaquias(cap);
		break;
		case 40: numVersiculos = BibliaRVR60.getNumVerCapMateo(cap);
		break;
		case 41: numVersiculos = BibliaRVR60.getNumVerCapMarcos(cap);
		break;
		case 42: numVersiculos = BibliaRVR60.getNumVerCapLucas(cap);
		break;
		case 43: numVersiculos = BibliaRVR60.getNumVerCapJuan(cap);
		break;
		case 44: numVersiculos = BibliaRVR60.getNumVerCapHechos(cap);
		break;
		case 45: numVersiculos = BibliaRVR60.getNumVerCapRomanos(cap);
		break;
		case 46: numVersiculos = BibliaRVR60.getNumVerCapCorintios1(cap);
		break;
		case 47: numVersiculos = BibliaRVR60.getNumVerCapCorintios2(cap);
		break;
		case 48: numVersiculos = BibliaRVR60.getNumVerCapGalatas(cap);
		break;
		case 49: numVersiculos = BibliaRVR60.getNumVerCapEfesios(cap);
		break;
		case 50: numVersiculos = BibliaRVR60.getNumVerCapFilipenses(cap);
		break;
		case 51: numVersiculos = BibliaRVR60.getNumVerCapColosenses(cap);
		break;
		case 52: numVersiculos = BibliaRVR60.getNumVerCapTesalonicenses1(cap);
		break;
		case 53: numVersiculos = BibliaRVR60.getNumVerCapTesalonicenses2(cap);
		break;
		case 54: numVersiculos = BibliaRVR60.getNumVerCapTimoteo1(cap);
		break;
		case 55: numVersiculos = BibliaRVR60.getNumVerCapTimoteo2(cap);
		break;
		case 56: numVersiculos = BibliaRVR60.getNumVerCapTito(cap);
		break;
		case 57: numVersiculos = BibliaRVR60.getNumVerCapFilemon(cap);
		break;
		case 58: numVersiculos = BibliaRVR60.getNumVerCapHebreos(cap);
		break;
		case 59: numVersiculos = BibliaRVR60.getNumVerCapSantiago(cap);
		break;
		case 60: numVersiculos = BibliaRVR60.getNumVerCapPedro1(cap);
		break;
		case 61: numVersiculos = BibliaRVR60.getNumVerCapPedro2(cap);
		break;
		case 62: numVersiculos = BibliaRVR60.getNumVerCapJuan1(cap);
		break;
		case 63: numVersiculos = BibliaRVR60.getNumVerCapJuan2(cap);
		break;
		case 64: numVersiculos = BibliaRVR60.getNumVerCapJuan3(cap);
		break;
		case 65: numVersiculos = BibliaRVR60.getNumVerCapJudas(cap);
		break;
		case 66: numVersiculos = BibliaRVR60.getNumVerCapApocalipsis(cap);
		break;


	}

	return numVersiculos;
}

// Método que retorna JSON {name,#l,#c,#v,texto}, de un versículo específico de la BibliaRVR60.
Biblia.prototype.loadVersiculoRVR60 = function(libro,cap,name) {
	var jsonItem;

	switch(libro){
		case 1: jsonItem = BibliaRVR60.getVersiculoGenesis(cap,name);
		break;
		case 2: jsonItem = BibliaRVR60.getVersiculoExodo(cap,name);
		break;
		case 3: jsonItem = BibliaRVR60.getVersiculoLevitico(cap,name);
		break;
		case 4: jsonItem = BibliaRVR60.getVersiculoNumeros(cap,name);
		break;
		case 5: jsonItem = BibliaRVR60.getVersiculoDeuteronomio(cap,name);
		break;
		case 6: jsonItem = BibliaRVR60.getVersiculoJosue(cap,name);
		break;
		case 7: jsonItem = BibliaRVR60.getVersiculoJueces(cap,name);
		break;
		case 8: jsonItem = BibliaRVR60.getVersiculoRut(cap,name);
		break;
		case 9: jsonItem = BibliaRVR60.getVersiculoSamuel1(cap,name);
		break;
		case 10: jsonItem = BibliaRVR60.getVersiculoSamuel2(cap,name);
		break;
		case 11: jsonItem = BibliaRVR60.getVersiculoReyes1(cap,name);
		break;
		case 12: jsonItem = BibliaRVR60.getVersiculoReyes2(cap,name);
		break;
		case 13: jsonItem = BibliaRVR60.getVersiculoCronicas1(cap,name);
		break;
		case 14: jsonItem = BibliaRVR60.getVersiculoCronicas2(cap,name);
		break;
		case 15: jsonItem = BibliaRVR60.getVersiculoEsdras(cap,name);
		break;
		case 16: jsonItem = BibliaRVR60.getVersiculoNehemias(cap,name);
		break;
		case 17: jsonItem = BibliaRVR60.getVersiculoEster(cap,name);
		break;
		case 18: jsonItem = BibliaRVR60.getVersiculoJob(cap,name);
		break;
		case 19: jsonItem = BibliaRVR60.getVersiculoSalmos(cap,name);
		break;
		case 20: jsonItem = BibliaRVR60.getVersiculoProverbios(cap,name);
		break;
		case 21: jsonItem = BibliaRVR60.getVersiculoEclesiastes(cap,name);
		break;
		case 22: jsonItem = BibliaRVR60.getVersiculoCantares(cap,name);
		break;
		case 23: jsonItem = BibliaRVR60.getVersiculoIsaias(cap,name);
		break;
		case 24: jsonItem = BibliaRVR60.getVersiculoJeremias(cap,name);
		break;
		case 25: jsonItem = BibliaRVR60.getVersiculoLamentaciones(cap,name);
		break;
		case 26: jsonItem = BibliaRVR60.getVersiculoEzequiel(cap,name);
		break;
		case 27: jsonItem = BibliaRVR60.getVersiculoDaniel(cap,name);
		break;
		case 28: jsonItem = BibliaRVR60.getVersiculoOseas(cap,name);
		break;
		case 29: jsonItem = BibliaRVR60.getVersiculoJoel(cap,name);
		break;
		case 30: jsonItem = BibliaRVR60.getVersiculoAmos(cap,name);
		break;
		case 31: jsonItem = BibliaRVR60.getVersiculoAbdias(cap,name);
		break;
		case 32: jsonItem = BibliaRVR60.getVersiculoJonas(cap,name);
		break;
		case 33: jsonItem = BibliaRVR60.getVersiculoMiqueas(cap,name);
		break;
		case 34: jsonItem = BibliaRVR60.getVersiculoNahum(cap,name);
		break;
		case 35: jsonItem = BibliaRVR60.getVersiculoHabacuc(cap,name);
		break;
		case 36: jsonItem = BibliaRVR60.getVersiculoSofonias(cap,name);
		break;
		case 37: jsonItem = BibliaRVR60.getVersiculoHageo(cap,name);
		break;
		case 38: jsonItem = BibliaRVR60.getVersiculoZacarias(cap,name);
		break;
		case 39: jsonItem = BibliaRVR60.getVersiculoMalaquias(cap,name);
		break;
		case 40: jsonItem = BibliaRVR60.getVersiculoMateo(cap,name);
		break;
		case 41: jsonItem = BibliaRVR60.getVersiculoMarcos(cap,name);
		break;
		case 42: jsonItem = BibliaRVR60.getVersiculoLucas(cap,name);
		break;
		case 43: jsonItem = BibliaRVR60.getVersiculoJuan(cap,name);
		break;
		case 44: jsonItem = BibliaRVR60.getVersiculoHechos(cap,name);
		break;
		case 45: jsonItem = BibliaRVR60.getVersiculoRomanos(cap,name);
		break;
		case 46: jsonItem = BibliaRVR60.getVersiculoCorintios1(cap,name);
		break;
		case 47: jsonItem = BibliaRVR60.getVersiculoCorintios2(cap,name);
		break;
		case 48: jsonItem = BibliaRVR60.getVersiculoGalatas(cap,name);
		break;
		case 49: jsonItem = BibliaRVR60.getVersiculoEfesios(cap,name);
		break;
		case 50: jsonItem = BibliaRVR60.getVersiculoFilipenses(cap,name);
		break;
		case 51: jsonItem = BibliaRVR60.getVersiculoColosenses(cap,name);
		break;
		case 52: jsonItem = BibliaRVR60.getVersiculoTesalonicenses1(cap,name);
		break;
		case 53: jsonItem = BibliaRVR60.getVersiculoTesalonicenses2(cap,name);
		break;
		case 54: jsonItem = BibliaRVR60.getVersiculoTimoteo1(cap,name);
		break;
		case 55: jsonItem = BibliaRVR60.getVersiculoTimoteo2(cap,name);
		break;
		case 56: jsonItem = BibliaRVR60.getVersiculoTito(cap,name);
		break;
		case 57: jsonItem = BibliaRVR60.getVersiculoFilemon(cap,name);
		break;
		case 58: jsonItem = BibliaRVR60.getVersiculoHebreos(cap,name);
		break;
		case 59: jsonItem = BibliaRVR60.getVersiculoSantiago(cap,name);
		break;
		case 60: jsonItem = BibliaRVR60.getVersiculoPedro1(cap,name);
		break;
		case 61: jsonItem = BibliaRVR60.getVersiculoPedro2(cap,name);
		break;
		case 62: jsonItem = BibliaRVR60.getVersiculoJuan1(cap,name);
		break;
		case 63: jsonItem = BibliaRVR60.getVersiculoJuan2(cap,name);
		break;
		case 64: jsonItem = BibliaRVR60.getVersiculoJuan3(cap,name);
		break;
		case 65: jsonItem = BibliaRVR60.getVersiculoJudas(cap,name);
		break;
		case 66: jsonItem = BibliaRVR60.getVersiculoApocalipsis(cap,name);
		break;


	}

	//console.log(jsonItem.texto);
	return jsonItem;
	
};

// Método que retorna el nombre de un libro específico de la BibliaJFA.
Biblia.prototype.loadNomLibJFA = function(libro){
	var nomLibro = "";

	switch(libro){
		case 1: nomLibro = BibliaJFA.getNomLibGenesis();
		break;
		case 2: nomLibro = BibliaJFA.getNomLibExodo();
		break;
		case 3: nomLibro = BibliaJFA.getNomLibLevitico();
		break;
		case 4: nomLibro = BibliaJFA.getNomLibNumeros();
		break;
		case 5: nomLibro = BibliaJFA.getNomLibDeuteronomio();
		break;
		case 6: nomLibro = BibliaJFA.getNomLibJosue();
		break;
		case 7: nomLibro = BibliaJFA.getNomLibJueces();
		break;
		case 8: nomLibro = BibliaJFA.getNomLibRut();
		break;
		case 9: nomLibro = BibliaJFA.getNomLibSamuel1();
		break;
		case 10: nomLibro = BibliaJFA.getNomLibSamuel2();
		break;
		case 11: nomLibro = BibliaJFA.getNomLibReyes1();
		break;
		case 12: nomLibro = BibliaJFA.getNomLibReyes2();
		break;
		case 13: nomLibro = BibliaJFA.getNomLibCronicas1();
		break;
		case 14: nomLibro = BibliaJFA.getNomLibCronicas2();
		break;
		case 15: nomLibro = BibliaJFA.getNomLibEsdras();
		break;
		case 16: nomLibro = BibliaJFA.getNomLibNehemias();
		break;
		case 17: nomLibro = BibliaJFA.getNomLibEster();
		break;
		case 18: nomLibro = BibliaJFA.getNomLibJob();
		break;
		case 19: nomLibro = BibliaJFA.getNomLibSalmos();
		break;
		case 20: nomLibro = BibliaJFA.getNomLibProverbios();
		break;
		case 21: nomLibro = BibliaJFA.getNomLibEclesiastes();
		break;
		case 22: nomLibro = BibliaJFA.getNomLibCantares();
		break;
		case 23: nomLibro = BibliaJFA.getNomLibIsaias();
		break;
		case 24: nomLibro = BibliaJFA.getNomLibJeremias();
		break;
		case 25: nomLibro = BibliaJFA.getNomLibLamentaciones();
		break;
		case 26: nomLibro = BibliaJFA.getNomLibEzequiel();
		break;
		case 27: nomLibro = BibliaJFA.getNomLibDaniel();
		break;
		case 28: nomLibro = BibliaJFA.getNomLibOseas();
		break;
		case 29: nomLibro = BibliaJFA.getNomLibJoel();
		break;
		case 30: nomLibro = BibliaJFA.getNomLibAmos();
		break;
		case 31: nomLibro = BibliaJFA.getNomLibAbdias();
		break;
		case 32: nomLibro = BibliaJFA.getNomLibJonas();
		break;
		case 33: nomLibro = BibliaJFA.getNomLibMiqueas();
		break;
		case 34: nomLibro = BibliaJFA.getNomLibNahum();
		break;
		case 35: nomLibro = BibliaJFA.getNomLibHabacuc();
		break;
		case 36: nomLibro = BibliaJFA.getNomLibSofonias();
		break;
		case 37: nomLibro = BibliaJFA.getNomLibHageo();
		break;
		case 38: nomLibro = BibliaJFA.getNomLibZacarias();
		break;
		case 39: nomLibro = BibliaJFA.getNomLibMalaquias();
		break;
		case 40: nomLibro = BibliaJFA.getNomLibMateo();
		break;
		case 41: nomLibro = BibliaJFA.getNomLibMarcos();
		break;
		case 42: nomLibro = BibliaJFA.getNomLibLucas();
		break;
		case 43: nomLibro = BibliaJFA.getNomLibJuan();
		break;
		case 44: nomLibro = BibliaJFA.getNomLibHechos();
		break;
		case 45: nomLibro = BibliaJFA.getNomLibRomanos();
		break;
		case 46: nomLibro = BibliaJFA.getNomLibCorintios1();
		break;
		case 47: nomLibro = BibliaJFA.getNomLibCorintios2();
		break;
		case 48: nomLibro = BibliaJFA.getNomLibGalatas();
		break;
		case 49: nomLibro = BibliaJFA.getNomLibEfesios();
		break;
		case 50: nomLibro = BibliaJFA.getNomLibFilipenses();
		break;
		case 51: nomLibro = BibliaJFA.getNomLibColosenses();
		break;
		case 52: nomLibro = BibliaJFA.getNomLibTesalonicenses1();
		break;
		case 53: nomLibro = BibliaJFA.getNomLibTesalonicenses2();
		break;
		case 54: nomLibro = BibliaJFA.getNomLibTimoteo1();
		break;
		case 55: nomLibro = BibliaJFA.getNomLibTimoteo2();
		break;
		case 56: nomLibro = BibliaJFA.getNomLibTito();
		break;
		case 57: nomLibro = BibliaJFA.getNomLibFilemon();
		break;
		case 58: nomLibro = BibliaJFA.getNomLibHebreos();
		break;
		case 59: nomLibro = BibliaJFA.getNomLibSantiago();
		break;
		case 60: nomLibro = BibliaJFA.getNomLibPedro1();
		break;
		case 61: nomLibro = BibliaJFA.getNomLibPedro2();
		break;
		case 62: nomLibro = BibliaJFA.getNomLibJuan1();
		break;
		case 63: nomLibro = BibliaJFA.getNomLibJuan2();
		break;
		case 64: nomLibro = BibliaJFA.getNomLibJuan3();
		break;
		case 65: nomLibro = BibliaJFA.getNomLibJudas();
		break;
		case 66: nomLibro = BibliaJFA.getNomLibApocalipsis();
		break;


	}

	return nomLibro;

}

// Método que retorna el número de capítulos de un libro específico de la BibliaJFA.
Biblia.prototype.loadNumCapJFA = function(libro) {
	var numCapitulos = 0;

	switch(libro){
		case 1: numCapitulos = BibliaJFA.getNumCapGenesis();
		break;
		case 2: numCapitulos = BibliaJFA.getNumCapExodo();
		break;
		case 3: numCapitulos = BibliaJFA.getNumCapLevitico();
		break;
		case 4: numCapitulos = BibliaJFA.getNumCapNumeros();
		break;
		case 5: numCapitulos = BibliaJFA.getNumCapDeuteronomio();
		break;
		case 6: numCapitulos = BibliaJFA.getNumCapJosue();
		break;
		case 7: numCapitulos = BibliaJFA.getNumCapJueces();
		break;
		case 8: numCapitulos = BibliaJFA.getNumCapRut();
		break;
		case 9: numCapitulos = BibliaJFA.getNumCapSamuel1();
		break;
		case 10: numCapitulos = BibliaJFA.getNumCapSamuel2();
		break;
		case 11: numCapitulos = BibliaJFA.getNumCapReyes1();
		break;
		case 12: numCapitulos = BibliaJFA.getNumCapReyes2();
		break;
		case 13: numCapitulos = BibliaJFA.getNumCapCronicas1();
		break;
		case 14: numCapitulos = BibliaJFA.getNumCapCronicas2();
		break;
		case 15: numCapitulos = BibliaJFA.getNumCapEsdras();
		break;
		case 16: numCapitulos = BibliaJFA.getNumCapNehemias();
		break;
		case 17: numCapitulos = BibliaJFA.getNumCapEster();
		break;
		case 18: numCapitulos = BibliaJFA.getNumCapJob();
		break;
		case 19: numCapitulos = BibliaJFA.getNumCapSalmos();
		break;
		case 20: numCapitulos = BibliaJFA.getNumCapProverbios();
		break;
		case 21: numCapitulos = BibliaJFA.getNumCapEclesiastes();
		break;
		case 22: numCapitulos = BibliaJFA.getNumCapCantares();
		break;
		case 23: numCapitulos = BibliaJFA.getNumCapIsaias();
		break;
		case 24: numCapitulos = BibliaJFA.getNumCapJeremias();
		break;
		case 25: numCapitulos = BibliaJFA.getNumCapLamentaciones();
		break;
		case 26: numCapitulos = BibliaJFA.getNumCapEzequiel();
		break;
		case 27: numCapitulos = BibliaJFA.getNumCapDaniel();
		break;
		case 28: numCapitulos = BibliaJFA.getNumCapOseas();
		break;
		case 29: numCapitulos = BibliaJFA.getNumCapJoel();
		break;
		case 30: numCapitulos = BibliaJFA.getNumCapAmos();
		break;
		case 31: numCapitulos = BibliaJFA.getNumCapAbdias();
		break;
		case 32: numCapitulos = BibliaJFA.getNumCapJonas();
		break;
		case 33: numCapitulos = BibliaJFA.getNumCapMiqueas();
		break;
		case 34: numCapitulos = BibliaJFA.getNumCapNahum();
		break;
		case 35: numCapitulos = BibliaJFA.getNumCapHabacuc();
		break;
		case 36: numCapitulos = BibliaJFA.getNumCapSofonias();
		break;
		case 37: numCapitulos = BibliaJFA.getNumCapHageo();
		break;
		case 38: numCapitulos = BibliaJFA.getNumCapZacarias();
		break;
		case 39: numCapitulos = BibliaJFA.getNumCapMalaquias();
		break;
		case 40: numCapitulos = BibliaJFA.getNumCapMateo();
		break;
		case 41: numCapitulos = BibliaJFA.getNumCapMarcos();
		break;
		case 42: numCapitulos = BibliaJFA.getNumCapLucas();
		break;
		case 43: numCapitulos = BibliaJFA.getNumCapJuan();
		break;
		case 44: numCapitulos = BibliaJFA.getNumCapHechos();
		break;
		case 45: numCapitulos = BibliaJFA.getNumCapRomanos();
		break;
		case 46: numCapitulos = BibliaJFA.getNumCapCorintios1();
		break;
		case 47: numCapitulos = BibliaJFA.getNumCapCorintios2();
		break;
		case 48: numCapitulos = BibliaJFA.getNumCapGalatas();
		break;
		case 49: numCapitulos = BibliaJFA.getNumCapEfesios();
		break;
		case 50: numCapitulos = BibliaJFA.getNumCapFilipenses();
		break;
		case 51: numCapitulos = BibliaJFA.getNumCapColosenses();
		break;
		case 52: numCapitulos = BibliaJFA.getNumCapTesalonicenses1();
		break;
		case 53: numCapitulos = BibliaJFA.getNumCapTesalonicenses2();
		break;
		case 54: numCapitulos = BibliaJFA.getNumCapTimoteo1();
		break;
		case 55: numCapitulos = BibliaJFA.getNumCapTimoteo2();
		break;
		case 56: numCapitulos = BibliaJFA.getNumCapTito();
		break;
		case 57: numCapitulos = BibliaJFA.getNumCapFilemon();
		break;
		case 58: numCapitulos = BibliaJFA.getNumCapHebreos();
		break;
		case 59: numCapitulos = BibliaJFA.getNumCapSantiago();
		break;
		case 60: numCapitulos = BibliaJFA.getNumCapPedro1();
		break;
		case 61: numCapitulos = BibliaJFA.getNumCapPedro2();
		break;
		case 62: numCapitulos = BibliaJFA.getNumCapJuan1();
		break;
		case 63: numCapitulos = BibliaJFA.getNumCapJuan2();
		break;
		case 64: numCapitulos = BibliaJFA.getNumCapJuan3();
		break;
		case 65: numCapitulos = BibliaJFA.getNumCapJudas();
		break;
		case 66: numCapitulos = BibliaJFA.getNumCapApocalipsis();
		break;


	}

	return numCapitulos;
}

// Método que retorna el número de versiculos de un capítulo específico de la BibliaJFA.
Biblia.prototype.loadNumVerCapJFA = function(libro,cap) {
	var numVersiculos = 0;

	switch(libro){
		case 1: numVersiculos = BibliaJFA.getNumVerCapGenesis(cap);
		break;
		case 2: numVersiculos = BibliaJFA.getNumVerCapExodo(cap);
		break;
		case 3: numVersiculos = BibliaJFA.getNumVerCapLevitico(cap);
		break;
		case 4: numVersiculos = BibliaJFA.getNumVerCapNumeros(cap);
		break;
		case 5: numVersiculos = BibliaJFA.getNumVerCapDeuteronomio(cap);
		break;
		case 6: numVersiculos = BibliaJFA.getNumVerCapJosue(cap);
		break;
		case 7: numVersiculos = BibliaJFA.getNumVerCapJueces(cap);
		break;
		case 8: numVersiculos = BibliaJFA.getNumVerCapRut(cap);
		break;
		case 9: numVersiculos = BibliaJFA.getNumVerCapSamuel1(cap);
		break;
		case 10: numVersiculos = BibliaJFA.getNumVerCapSamuel2(cap);
		break;
		case 11: numVersiculos = BibliaJFA.getNumVerCapReyes1(cap);
		break;
		case 12: numVersiculos = BibliaJFA.getNumVerCapReyes2(cap);
		break;
		case 13: numVersiculos = BibliaJFA.getNumVerCapCronicas1(cap);
		break;
		case 14: numVersiculos = BibliaJFA.getNumVerCapCronicas2(cap);
		break;
		case 15: numVersiculos = BibliaJFA.getNumVerCapEsdras(cap);
		break;
		case 16: numVersiculos = BibliaJFA.getNumVerCapNehemias(cap);
		break;
		case 17: numVersiculos = BibliaJFA.getNumVerCapEster(cap);
		break;
		case 18: numVersiculos = BibliaJFA.getNumVerCapJob(cap);
		break;
		case 19: numVersiculos = BibliaJFA.getNumVerCapSalmos(cap);
		break;
		case 20: numVersiculos = BibliaJFA.getNumVerCapProverbios(cap);
		break;
		case 21: numVersiculos = BibliaJFA.getNumVerCapEclesiastes(cap);
		break;
		case 22: numVersiculos = BibliaJFA.getNumVerCapCantares(cap);
		break;
		case 23: numVersiculos = BibliaJFA.getNumVerCapIsaias(cap);
		break;
		case 24: numVersiculos = BibliaJFA.getNumVerCapJeremias(cap);
		break;
		case 25: numVersiculos = BibliaJFA.getNumVerCapLamentaciones(cap);
		break;
		case 26: numVersiculos = BibliaJFA.getNumVerCapEzequiel(cap);
		break;
		case 27: numVersiculos = BibliaJFA.getNumVerCapDaniel(cap);
		break;
		case 28: numVersiculos = BibliaJFA.getNumVerCapOseas(cap);
		break;
		case 29: numVersiculos = BibliaJFA.getNumVerCapJoel(cap);
		break;
		case 30: numVersiculos = BibliaJFA.getNumVerCapAmos(cap);
		break;
		case 31: numVersiculos = BibliaJFA.getNumVerCapAbdias(cap);
		break;
		case 32: numVersiculos = BibliaJFA.getNumVerCapJonas(cap);
		break;
		case 33: numVersiculos = BibliaJFA.getNumVerCapMiqueas(cap);
		break;
		case 34: numVersiculos = BibliaJFA.getNumVerCapNahum(cap);
		break;
		case 35: numVersiculos = BibliaJFA.getNumVerCapHabacuc(cap);
		break;
		case 36: numVersiculos = BibliaJFA.getNumVerCapSofonias(cap);
		break;
		case 37: numVersiculos = BibliaJFA.getNumVerCapHageo(cap);
		break;
		case 38: numVersiculos = BibliaJFA.getNumVerCapZacarias(cap);
		break;
		case 39: numVersiculos = BibliaJFA.getNumVerCapMalaquias(cap);
		break;
		case 40: numVersiculos = BibliaJFA.getNumVerCapMateo(cap);
		break;
		case 41: numVersiculos = BibliaJFA.getNumVerCapMarcos(cap);
		break;
		case 42: numVersiculos = BibliaJFA.getNumVerCapLucas(cap);
		break;
		case 43: numVersiculos = BibliaJFA.getNumVerCapJuan(cap);
		break;
		case 44: numVersiculos = BibliaJFA.getNumVerCapHechos(cap);
		break;
		case 45: numVersiculos = BibliaJFA.getNumVerCapRomanos(cap);
		break;
		case 46: numVersiculos = BibliaJFA.getNumVerCapCorintios1(cap);
		break;
		case 47: numVersiculos = BibliaJFA.getNumVerCapCorintios2(cap);
		break;
		case 48: numVersiculos = BibliaJFA.getNumVerCapGalatas(cap);
		break;
		case 49: numVersiculos = BibliaJFA.getNumVerCapEfesios(cap);
		break;
		case 50: numVersiculos = BibliaJFA.getNumVerCapFilipenses(cap);
		break;
		case 51: numVersiculos = BibliaJFA.getNumVerCapColosenses(cap);
		break;
		case 52: numVersiculos = BibliaJFA.getNumVerCapTesalonicenses1(cap);
		break;
		case 53: numVersiculos = BibliaJFA.getNumVerCapTesalonicenses2(cap);
		break;
		case 54: numVersiculos = BibliaJFA.getNumVerCapTimoteo1(cap);
		break;
		case 55: numVersiculos = BibliaJFA.getNumVerCapTimoteo2(cap);
		break;
		case 56: numVersiculos = BibliaJFA.getNumVerCapTito(cap);
		break;
		case 57: numVersiculos = BibliaJFA.getNumVerCapFilemon(cap);
		break;
		case 58: numVersiculos = BibliaJFA.getNumVerCapHebreos(cap);
		break;
		case 59: numVersiculos = BibliaJFA.getNumVerCapSantiago(cap);
		break;
		case 60: numVersiculos = BibliaJFA.getNumVerCapPedro1(cap);
		break;
		case 61: numVersiculos = BibliaJFA.getNumVerCapPedro2(cap);
		break;
		case 62: numVersiculos = BibliaJFA.getNumVerCapJuan1(cap);
		break;
		case 63: numVersiculos = BibliaJFA.getNumVerCapJuan2(cap);
		break;
		case 64: numVersiculos = BibliaJFA.getNumVerCapJuan3(cap);
		break;
		case 65: numVersiculos = BibliaJFA.getNumVerCapJudas(cap);
		break;
		case 66: numVersiculos = BibliaJFA.getNumVerCapApocalipsis(cap);
		break;


	}

	return numVersiculos;
}

// Método que retorna JSON {name,#l,#c,#v,texto}, de un versículo específico de la BibliaJFA.
Biblia.prototype.loadVersiculoJFA = function(libro,cap,name) {
	var jsonItem;

	switch(libro){
		case 1: jsonItem = BibliaJFA.getVersiculoGenesis(cap,name);
		break;
		case 2: jsonItem = BibliaJFA.getVersiculoExodo(cap,name);
		break;
		case 3: jsonItem = BibliaJFA.getVersiculoLevitico(cap,name);
		break;
		case 4: jsonItem = BibliaJFA.getVersiculoNumeros(cap,name);
		break;
		case 5: jsonItem = BibliaJFA.getVersiculoDeuteronomio(cap,name);
		break;
		case 6: jsonItem = BibliaJFA.getVersiculoJosue(cap,name);
		break;
		case 7: jsonItem = BibliaJFA.getVersiculoJueces(cap,name);
		break;
		case 8: jsonItem = BibliaJFA.getVersiculoRut(cap,name);
		break;
		case 9: jsonItem = BibliaJFA.getVersiculoSamuel1(cap,name);
		break;
		case 10: jsonItem = BibliaJFA.getVersiculoSamuel2(cap,name);
		break;
		case 11: jsonItem = BibliaJFA.getVersiculoReyes1(cap,name);
		break;
		case 12: jsonItem = BibliaJFA.getVersiculoReyes2(cap,name);
		break;
		case 13: jsonItem = BibliaJFA.getVersiculoCronicas1(cap,name);
		break;
		case 14: jsonItem = BibliaJFA.getVersiculoCronicas2(cap,name);
		break;
		case 15: jsonItem = BibliaJFA.getVersiculoEsdras(cap,name);
		break;
		case 16: jsonItem = BibliaJFA.getVersiculoNehemias(cap,name);
		break;
		case 17: jsonItem = BibliaJFA.getVersiculoEster(cap,name);
		break;
		case 18: jsonItem = BibliaJFA.getVersiculoJob(cap,name);
		break;
		case 19: jsonItem = BibliaJFA.getVersiculoSalmos(cap,name);
		break;
		case 20: jsonItem = BibliaJFA.getVersiculoProverbios(cap,name);
		break;
		case 21: jsonItem = BibliaJFA.getVersiculoEclesiastes(cap,name);
		break;
		case 22: jsonItem = BibliaJFA.getVersiculoCantares(cap,name);
		break;
		case 23: jsonItem = BibliaJFA.getVersiculoIsaias(cap,name);
		break;
		case 24: jsonItem = BibliaJFA.getVersiculoJeremias(cap,name);
		break;
		case 25: jsonItem = BibliaJFA.getVersiculoLamentaciones(cap,name);
		break;
		case 26: jsonItem = BibliaJFA.getVersiculoEzequiel(cap,name);
		break;
		case 27: jsonItem = BibliaJFA.getVersiculoDaniel(cap,name);
		break;
		case 28: jsonItem = BibliaJFA.getVersiculoOseas(cap,name);
		break;
		case 29: jsonItem = BibliaJFA.getVersiculoJoel(cap,name);
		break;
		case 30: jsonItem = BibliaJFA.getVersiculoAmos(cap,name);
		break;
		case 31: jsonItem = BibliaJFA.getVersiculoAbdias(cap,name);
		break;
		case 32: jsonItem = BibliaJFA.getVersiculoJonas(cap,name);
		break;
		case 33: jsonItem = BibliaJFA.getVersiculoMiqueas(cap,name);
		break;
		case 34: jsonItem = BibliaJFA.getVersiculoNahum(cap,name);
		break;
		case 35: jsonItem = BibliaJFA.getVersiculoHabacuc(cap,name);
		break;
		case 36: jsonItem = BibliaJFA.getVersiculoSofonias(cap,name);
		break;
		case 37: jsonItem = BibliaJFA.getVersiculoHageo(cap,name);
		break;
		case 38: jsonItem = BibliaJFA.getVersiculoZacarias(cap,name);
		break;
		case 39: jsonItem = BibliaJFA.getVersiculoMalaquias(cap,name);
		break;
		case 40: jsonItem = BibliaJFA.getVersiculoMateo(cap,name);
		break;
		case 41: jsonItem = BibliaJFA.getVersiculoMarcos(cap,name);
		break;
		case 42: jsonItem = BibliaJFA.getVersiculoLucas(cap,name);
		break;
		case 43: jsonItem = BibliaJFA.getVersiculoJuan(cap,name);
		break;
		case 44: jsonItem = BibliaJFA.getVersiculoHechos(cap,name);
		break;
		case 45: jsonItem = BibliaJFA.getVersiculoRomanos(cap,name);
		break;
		case 46: jsonItem = BibliaJFA.getVersiculoCorintios1(cap,name);
		break;
		case 47: jsonItem = BibliaJFA.getVersiculoCorintios2(cap,name);
		break;
		case 48: jsonItem = BibliaJFA.getVersiculoGalatas(cap,name);
		break;
		case 49: jsonItem = BibliaJFA.getVersiculoEfesios(cap,name);
		break;
		case 50: jsonItem = BibliaJFA.getVersiculoFilipenses(cap,name);
		break;
		case 51: jsonItem = BibliaJFA.getVersiculoColosenses(cap,name);
		break;
		case 52: jsonItem = BibliaJFA.getVersiculoTesalonicenses1(cap,name);
		break;
		case 53: jsonItem = BibliaJFA.getVersiculoTesalonicenses2(cap,name);
		break;
		case 54: jsonItem = BibliaJFA.getVersiculoTimoteo1(cap,name);
		break;
		case 55: jsonItem = BibliaJFA.getVersiculoTimoteo2(cap,name);
		break;
		case 56: jsonItem = BibliaJFA.getVersiculoTito(cap,name);
		break;
		case 57: jsonItem = BibliaJFA.getVersiculoFilemon(cap,name);
		break;
		case 58: jsonItem = BibliaJFA.getVersiculoHebreos(cap,name);
		break;
		case 59: jsonItem = BibliaJFA.getVersiculoSantiago(cap,name);
		break;
		case 60: jsonItem = BibliaJFA.getVersiculoPedro1(cap,name);
		break;
		case 61: jsonItem = BibliaJFA.getVersiculoPedro2(cap,name);
		break;
		case 62: jsonItem = BibliaJFA.getVersiculoJuan1(cap,name);
		break;
		case 63: jsonItem = BibliaJFA.getVersiculoJuan2(cap,name);
		break;
		case 64: jsonItem = BibliaJFA.getVersiculoJuan3(cap,name);
		break;
		case 65: jsonItem = BibliaJFA.getVersiculoJudas(cap,name);
		break;
		case 66: jsonItem = BibliaJFA.getVersiculoApocalipsis(cap,name);
		break;


	}

	//console.log(jsonItem.texto);
	return jsonItem;
};

// Método que retorna el nombre de un libro específico de la BibliaKJV.
Biblia.prototype.loadNomLibKJV = function(libro){
	var nomLibro = "";

	switch(libro){
		case 1: nomLibro = BibliaKJV.getNomLibGenesis();
		break;
		case 2: nomLibro = BibliaKJV.getNomLibExodo();
		break;
		case 3: nomLibro = BibliaKJV.getNomLibLevitico();
		break;
		case 4: nomLibro = BibliaKJV.getNomLibNumeros();
		break;
		case 5: nomLibro = BibliaKJV.getNomLibDeuteronomio();
		break;
		case 6: nomLibro = BibliaKJV.getNomLibJosue();
		break;
		case 7: nomLibro = BibliaKJV.getNomLibJueces();
		break;
		case 8: nomLibro = BibliaKJV.getNomLibRut();
		break;
		case 9: nomLibro = BibliaKJV.getNomLibSamuel1();
		break;
		case 10: nomLibro = BibliaKJV.getNomLibSamuel2();
		break;
		case 11: nomLibro = BibliaKJV.getNomLibReyes1();
		break;
		case 12: nomLibro = BibliaKJV.getNomLibReyes2();
		break;
		case 13: nomLibro = BibliaKJV.getNomLibCronicas1();
		break;
		case 14: nomLibro = BibliaKJV.getNomLibCronicas2();
		break;
		case 15: nomLibro = BibliaKJV.getNomLibEsdras();
		break;
		case 16: nomLibro = BibliaKJV.getNomLibNehemias();
		break;
		case 17: nomLibro = BibliaKJV.getNomLibEster();
		break;
		case 18: nomLibro = BibliaKJV.getNomLibJob();
		break;
		case 19: nomLibro = BibliaKJV.getNomLibSalmos();
		break;
		case 20: nomLibro = BibliaKJV.getNomLibProverbios();
		break;
		case 21: nomLibro = BibliaKJV.getNomLibEclesiastes();
		break;
		case 22: nomLibro = BibliaKJV.getNomLibCantares();
		break;
		case 23: nomLibro = BibliaKJV.getNomLibIsaias();
		break;
		case 24: nomLibro = BibliaKJV.getNomLibJeremias();
		break;
		case 25: nomLibro = BibliaKJV.getNomLibLamentaciones();
		break;
		case 26: nomLibro = BibliaKJV.getNomLibEzequiel();
		break;
		case 27: nomLibro = BibliaKJV.getNomLibDaniel();
		break;
		case 28: nomLibro = BibliaKJV.getNomLibOseas();
		break;
		case 29: nomLibro = BibliaKJV.getNomLibJoel();
		break;
		case 30: nomLibro = BibliaKJV.getNomLibAmos();
		break;
		case 31: nomLibro = BibliaKJV.getNomLibAbdias();
		break;
		case 32: nomLibro = BibliaKJV.getNomLibJonas();
		break;
		case 33: nomLibro = BibliaKJV.getNomLibMiqueas();
		break;
		case 34: nomLibro = BibliaKJV.getNomLibNahum();
		break;
		case 35: nomLibro = BibliaKJV.getNomLibHabacuc();
		break;
		case 36: nomLibro = BibliaKJV.getNomLibSofonias();
		break;
		case 37: nomLibro = BibliaKJV.getNomLibHageo();
		break;
		case 38: nomLibro = BibliaKJV.getNomLibZacarias();
		break;
		case 39: nomLibro = BibliaKJV.getNomLibMalaquias();
		break;
		case 40: nomLibro = BibliaKJV.getNomLibMateo();
		break;
		case 41: nomLibro = BibliaKJV.getNomLibMarcos();
		break;
		case 42: nomLibro = BibliaKJV.getNomLibLucas();
		break;
		case 43: nomLibro = BibliaKJV.getNomLibJuan();
		break;
		case 44: nomLibro = BibliaKJV.getNomLibHechos();
		break;
		case 45: nomLibro = BibliaKJV.getNomLibRomanos();
		break;
		case 46: nomLibro = BibliaKJV.getNomLibCorintios1();
		break;
		case 47: nomLibro = BibliaKJV.getNomLibCorintios2();
		break;
		case 48: nomLibro = BibliaKJV.getNomLibGalatas();
		break;
		case 49: nomLibro = BibliaKJV.getNomLibEfesios();
		break;
		case 50: nomLibro = BibliaKJV.getNomLibFilipenses();
		break;
		case 51: nomLibro = BibliaKJV.getNomLibColosenses();
		break;
		case 52: nomLibro = BibliaKJV.getNomLibTesalonicenses1();
		break;
		case 53: nomLibro = BibliaKJV.getNomLibTesalonicenses2();
		break;
		case 54: nomLibro = BibliaKJV.getNomLibTimoteo1();
		break;
		case 55: nomLibro = BibliaKJV.getNomLibTimoteo2();
		break;
		case 56: nomLibro = BibliaKJV.getNomLibTito();
		break;
		case 57: nomLibro = BibliaKJV.getNomLibFilemon();
		break;
		case 58: nomLibro = BibliaKJV.getNomLibHebreos();
		break;
		case 59: nomLibro = BibliaKJV.getNomLibSantiago();
		break;
		case 60: nomLibro = BibliaKJV.getNomLibPedro1();
		break;
		case 61: nomLibro = BibliaKJV.getNomLibPedro2();
		break;
		case 62: nomLibro = BibliaKJV.getNomLibJuan1();
		break;
		case 63: nomLibro = BibliaKJV.getNomLibJuan2();
		break;
		case 64: nomLibro = BibliaKJV.getNomLibJuan3();
		break;
		case 65: nomLibro = BibliaKJV.getNomLibJudas();
		break;
		case 66: nomLibro = BibliaKJV.getNomLibApocalipsis();
		break;


	}

	return nomLibro;

}

// Método que retorna el número de capitulos de un libro específico de la BibliaKJV.
Biblia.prototype.loadNumCapKJV = function(libro) {
	var numCapitulos = 0;

	switch(libro){
		case 1: numCapitulos = BibliaKJV.getNumCapGenesis();
		break;
		case 2: numCapitulos = BibliaKJV.getNumCapExodo();
		break;
		case 3: numCapitulos = BibliaKJV.getNumCapLevitico();
		break;
		case 4: numCapitulos = BibliaKJV.getNumCapNumeros();
		break;
		case 5: numCapitulos = BibliaKJV.getNumCapDeuteronomio();
		break;
		case 6: numCapitulos = BibliaKJV.getNumCapJosue();
		break;
		case 7: numCapitulos = BibliaKJV.getNumCapJueces();
		break;
		case 8: numCapitulos = BibliaKJV.getNumCapRut();
		break;
		case 9: numCapitulos = BibliaKJV.getNumCapSamuel1();
		break;
		case 10: numCapitulos = BibliaKJV.getNumCapSamuel2();
		break;
		case 11: numCapitulos = BibliaKJV.getNumCapReyes1();
		break;
		case 12: numCapitulos = BibliaKJV.getNumCapReyes2();
		break;
		case 13: numCapitulos = BibliaKJV.getNumCapCronicas1();
		break;
		case 14: numCapitulos = BibliaKJV.getNumCapCronicas2();
		break;
		case 15: numCapitulos = BibliaKJV.getNumCapEsdras();
		break;
		case 16: numCapitulos = BibliaKJV.getNumCapNehemias();
		break;
		case 17: numCapitulos = BibliaKJV.getNumCapEster();
		break;
		case 18: numCapitulos = BibliaKJV.getNumCapJob();
		break;
		case 19: numCapitulos = BibliaKJV.getNumCapSalmos();
		break;
		case 20: numCapitulos = BibliaKJV.getNumCapProverbios();
		break;
		case 21: numCapitulos = BibliaKJV.getNumCapEclesiastes();
		break;
		case 22: numCapitulos = BibliaKJV.getNumCapCantares();
		break;
		case 23: numCapitulos = BibliaKJV.getNumCapIsaias();
		break;
		case 24: numCapitulos = BibliaKJV.getNumCapJeremias();
		break;
		case 25: numCapitulos = BibliaKJV.getNumCapLamentaciones();
		break;
		case 26: numCapitulos = BibliaKJV.getNumCapEzequiel();
		break;
		case 27: numCapitulos = BibliaKJV.getNumCapDaniel();
		break;
		case 28: numCapitulos = BibliaKJV.getNumCapOseas();
		break;
		case 29: numCapitulos = BibliaKJV.getNumCapJoel();
		break;
		case 30: numCapitulos = BibliaKJV.getNumCapAmos();
		break;
		case 31: numCapitulos = BibliaKJV.getNumCapAbdias();
		break;
		case 32: numCapitulos = BibliaKJV.getNumCapJonas();
		break;
		case 33: numCapitulos = BibliaKJV.getNumCapMiqueas();
		break;
		case 34: numCapitulos = BibliaKJV.getNumCapNahum();
		break;
		case 35: numCapitulos = BibliaKJV.getNumCapHabacuc();
		break;
		case 36: numCapitulos = BibliaKJV.getNumCapSofonias();
		break;
		case 37: numCapitulos = BibliaKJV.getNumCapHageo();
		break;
		case 38: numCapitulos = BibliaKJV.getNumCapZacarias();
		break;
		case 39: numCapitulos = BibliaKJV.getNumCapMalaquias();
		break;
		case 40: numCapitulos = BibliaKJV.getNumCapMateo();
		break;
		case 41: numCapitulos = BibliaKJV.getNumCapMarcos();
		break;
		case 42: numCapitulos = BibliaKJV.getNumCapLucas();
		break;
		case 43: numCapitulos = BibliaKJV.getNumCapJuan();
		break;
		case 44: numCapitulos = BibliaKJV.getNumCapHechos();
		break;
		case 45: numCapitulos = BibliaKJV.getNumCapRomanos();
		break;
		case 46: numCapitulos = BibliaKJV.getNumCapCorintios1();
		break;
		case 47: numCapitulos = BibliaKJV.getNumCapCorintios2();
		break;
		case 48: numCapitulos = BibliaKJV.getNumCapGalatas();
		break;
		case 49: numCapitulos = BibliaKJV.getNumCapEfesios();
		break;
		case 50: numCapitulos = BibliaKJV.getNumCapFilipenses();
		break;
		case 51: numCapitulos = BibliaKJV.getNumCapColosenses();
		break;
		case 52: numCapitulos = BibliaKJV.getNumCapTesalonicenses1();
		break;
		case 53: numCapitulos = BibliaKJV.getNumCapTesalonicenses2();
		break;
		case 54: numCapitulos = BibliaKJV.getNumCapTimoteo1();
		break;
		case 55: numCapitulos = BibliaKJV.getNumCapTimoteo2();
		break;
		case 56: numCapitulos = BibliaKJV.getNumCapTito();
		break;
		case 57: numCapitulos = BibliaKJV.getNumCapFilemon();
		break;
		case 58: numCapitulos = BibliaKJV.getNumCapHebreos();
		break;
		case 59: numCapitulos = BibliaKJV.getNumCapSantiago();
		break;
		case 60: numCapitulos = BibliaKJV.getNumCapPedro1();
		break;
		case 61: numCapitulos = BibliaKJV.getNumCapPedro2();
		break;
		case 62: numCapitulos = BibliaKJV.getNumCapJuan1();
		break;
		case 63: numCapitulos = BibliaKJV.getNumCapJuan2();
		break;
		case 64: numCapitulos = BibliaKJV.getNumCapJuan3();
		break;
		case 65: numCapitulos = BibliaKJV.getNumCapJudas();
		break;
		case 66: numCapitulos = BibliaKJV.getNumCapApocalipsis();
		break;


	}

	return numCapitulos;
}

// Método que retorna el número de versículos de un cápitulo específico de la BibliaKJV.
Biblia.prototype.loadNumVerCapKJV = function(libro,cap) {
	var numVersiculos = 0;

	switch(libro){
		case 1: numVersiculos = BibliaKJV.getNumVerCapGenesis(cap);
		break;
		case 2: numVersiculos = BibliaKJV.getNumVerCapExodo(cap);
		break;
		case 3: numVersiculos = BibliaKJV.getNumVerCapLevitico(cap);
		break;
		case 4: numVersiculos = BibliaKJV.getNumVerCapNumeros(cap);
		break;
		case 5: numVersiculos = BibliaKJV.getNumVerCapDeuteronomio(cap);
		break;
		case 6: numVersiculos = BibliaKJV.getNumVerCapJosue(cap);
		break;
		case 7: numVersiculos = BibliaKJV.getNumVerCapJueces(cap);
		break;
		case 8: numVersiculos = BibliaKJV.getNumVerCapRut(cap);
		break;
		case 9: numVersiculos = BibliaKJV.getNumVerCapSamuel1(cap);
		break;
		case 10: numVersiculos = BibliaKJV.getNumVerCapSamuel2(cap);
		break;
		case 11: numVersiculos = BibliaKJV.getNumVerCapReyes1(cap);
		break;
		case 12: numVersiculos = BibliaKJV.getNumVerCapReyes2(cap);
		break;
		case 13: numVersiculos = BibliaKJV.getNumVerCapCronicas1(cap);
		break;
		case 14: numVersiculos = BibliaKJV.getNumVerCapCronicas2(cap);
		break;
		case 15: numVersiculos = BibliaKJV.getNumVerCapEsdras(cap);
		break;
		case 16: numVersiculos = BibliaKJV.getNumVerCapNehemias(cap);
		break;
		case 17: numVersiculos = BibliaKJV.getNumVerCapEster(cap);
		break;
		case 18: numVersiculos = BibliaKJV.getNumVerCapJob(cap);
		break;
		case 19: numVersiculos = BibliaKJV.getNumVerCapSalmos(cap);
		break;
		case 20: numVersiculos = BibliaKJV.getNumVerCapProverbios(cap);
		break;
		case 21: numVersiculos = BibliaKJV.getNumVerCapEclesiastes(cap);
		break;
		case 22: numVersiculos = BibliaKJV.getNumVerCapCantares(cap);
		break;
		case 23: numVersiculos = BibliaKJV.getNumVerCapIsaias(cap);
		break;
		case 24: numVersiculos = BibliaKJV.getNumVerCapJeremias(cap);
		break;
		case 25: numVersiculos = BibliaKJV.getNumVerCapLamentaciones(cap);
		break;
		case 26: numVersiculos = BibliaKJV.getNumVerCapEzequiel(cap);
		break;
		case 27: numVersiculos = BibliaKJV.getNumVerCapDaniel(cap);
		break;
		case 28: numVersiculos = BibliaKJV.getNumVerCapOseas(cap);
		break;
		case 29: numVersiculos = BibliaKJV.getNumVerCapJoel(cap);
		break;
		case 30: numVersiculos = BibliaKJV.getNumVerCapAmos(cap);
		break;
		case 31: numVersiculos = BibliaKJV.getNumVerCapAbdias(cap);
		break;
		case 32: numVersiculos = BibliaKJV.getNumVerCapJonas(cap);
		break;
		case 33: numVersiculos = BibliaKJV.getNumVerCapMiqueas(cap);
		break;
		case 34: numVersiculos = BibliaKJV.getNumVerCapNahum(cap);
		break;
		case 35: numVersiculos = BibliaKJV.getNumVerCapHabacuc(cap);
		break;
		case 36: numVersiculos = BibliaKJV.getNumVerCapSofonias(cap);
		break;
		case 37: numVersiculos = BibliaKJV.getNumVerCapHageo(cap);
		break;
		case 38: numVersiculos = BibliaKJV.getNumVerCapZacarias(cap);
		break;
		case 39: numVersiculos = BibliaKJV.getNumVerCapMalaquias(cap);
		break;
		case 40: numVersiculos = BibliaKJV.getNumVerCapMateo(cap);
		break;
		case 41: numVersiculos = BibliaKJV.getNumVerCapMarcos(cap);
		break;
		case 42: numVersiculos = BibliaKJV.getNumVerCapLucas(cap);
		break;
		case 43: numVersiculos = BibliaKJV.getNumVerCapJuan(cap);
		break;
		case 44: numVersiculos = BibliaKJV.getNumVerCapHechos(cap);
		break;
		case 45: numVersiculos = BibliaKJV.getNumVerCapRomanos(cap);
		break;
		case 46: numVersiculos = BibliaKJV.getNumVerCapCorintios1(cap);
		break;
		case 47: numVersiculos = BibliaKJV.getNumVerCapCorintios2(cap);
		break;
		case 48: numVersiculos = BibliaKJV.getNumVerCapGalatas(cap);
		break;
		case 49: numVersiculos = BibliaKJV.getNumVerCapEfesios(cap);
		break;
		case 50: numVersiculos = BibliaKJV.getNumVerCapFilipenses(cap);
		break;
		case 51: numVersiculos = BibliaKJV.getNumVerCapColosenses(cap);
		break;
		case 52: numVersiculos = BibliaKJV.getNumVerCapTesalonicenses1(cap);
		break;
		case 53: numVersiculos = BibliaKJV.getNumVerCapTesalonicenses2(cap);
		break;
		case 54: numVersiculos = BibliaKJV.getNumVerCapTimoteo1(cap);
		break;
		case 55: numVersiculos = BibliaKJV.getNumVerCapTimoteo2(cap);
		break;
		case 56: numVersiculos = BibliaKJV.getNumVerCapTito(cap);
		break;
		case 57: numVersiculos = BibliaKJV.getNumVerCapFilemon(cap);
		break;
		case 58: numVersiculos = BibliaKJV.getNumVerCapHebreos(cap);
		break;
		case 59: numVersiculos = BibliaKJV.getNumVerCapSantiago(cap);
		break;
		case 60: numVersiculos = BibliaKJV.getNumVerCapPedro1(cap);
		break;
		case 61: numVersiculos = BibliaKJV.getNumVerCapPedro2(cap);
		break;
		case 62: numVersiculos = BibliaKJV.getNumVerCapJuan1(cap);
		break;
		case 63: numVersiculos = BibliaKJV.getNumVerCapJuan2(cap);
		break;
		case 64: numVersiculos = BibliaKJV.getNumVerCapJuan3(cap);
		break;
		case 65: numVersiculos = BibliaKJV.getNumVerCapJudas(cap);
		break;
		case 66: numVersiculos = BibliaKJV.getNumVerCapApocalipsis(cap);
		break;


	}

	return numVersiculos;
}

// Método que retorna JSON {name,#l,#c,#v,texto}, de un versículo específico de la BibliaKJV.
Biblia.prototype.loadVersiculoKJV = function(libro,cap,name) {
	var jsonItem;

	switch(libro){
		case 1: jsonItem = BibliaKJV.getVersiculoGenesis(cap,name);
		break;
		case 2: jsonItem = BibliaKJV.getVersiculoExodo(cap,name);
		break;
		case 3: jsonItem = BibliaKJV.getVersiculoLevitico(cap,name);
		break;
		case 4: jsonItem = BibliaKJV.getVersiculoNumeros(cap,name);
		break;
		case 5: jsonItem = BibliaKJV.getVersiculoDeuteronomio(cap,name);
		break;
		case 6: jsonItem = BibliaKJV.getVersiculoJosue(cap,name);
		break;
		case 7: jsonItem = BibliaKJV.getVersiculoJueces(cap,name);
		break;
		case 8: jsonItem = BibliaKJV.getVersiculoRut(cap,name);
		break;
		case 9: jsonItem = BibliaKJV.getVersiculoSamuel1(cap,name);
		break;
		case 10: jsonItem = BibliaKJV.getVersiculoSamuel2(cap,name);
		break;
		case 11: jsonItem = BibliaKJV.getVersiculoReyes1(cap,name);
		break;
		case 12: jsonItem = BibliaKJV.getVersiculoReyes2(cap,name);
		break;
		case 13: jsonItem = BibliaKJV.getVersiculoCronicas1(cap,name);
		break;
		case 14: jsonItem = BibliaKJV.getVersiculoCronicas2(cap,name);
		break;
		case 15: jsonItem = BibliaKJV.getVersiculoEsdras(cap,name);
		break;
		case 16: jsonItem = BibliaKJV.getVersiculoNehemias(cap,name);
		break;
		case 17: jsonItem = BibliaKJV.getVersiculoEster(cap,name);
		break;
		case 18: jsonItem = BibliaKJV.getVersiculoJob(cap,name);
		break;
		case 19: jsonItem = BibliaKJV.getVersiculoSalmos(cap,name);
		break;
		case 20: jsonItem = BibliaKJV.getVersiculoProverbios(cap,name);
		break;
		case 21: jsonItem = BibliaKJV.getVersiculoEclesiastes(cap,name);
		break;
		case 22: jsonItem = BibliaKJV.getVersiculoCantares(cap,name);
		break;
		case 23: jsonItem = BibliaKJV.getVersiculoIsaias(cap,name);
		break;
		case 24: jsonItem = BibliaKJV.getVersiculoJeremias(cap,name);
		break;
		case 25: jsonItem = BibliaKJV.getVersiculoLamentaciones(cap,name);
		break;
		case 26: jsonItem = BibliaKJV.getVersiculoEzequiel(cap,name);
		break;
		case 27: jsonItem = BibliaKJV.getVersiculoDaniel(cap,name);
		break;
		case 28: jsonItem = BibliaKJV.getVersiculoOseas(cap,name);
		break;
		case 29: jsonItem = BibliaKJV.getVersiculoJoel(cap,name);
		break;
		case 30: jsonItem = BibliaKJV.getVersiculoAmos(cap,name);
		break;
		case 31: jsonItem = BibliaKJV.getVersiculoAbdias(cap,name);
		break;
		case 32: jsonItem = BibliaKJV.getVersiculoJonas(cap,name);
		break;
		case 33: jsonItem = BibliaKJV.getVersiculoMiqueas(cap,name);
		break;
		case 34: jsonItem = BibliaKJV.getVersiculoNahum(cap,name);
		break;
		case 35: jsonItem = BibliaKJV.getVersiculoHabacuc(cap,name);
		break;
		case 36: jsonItem = BibliaKJV.getVersiculoSofonias(cap,name);
		break;
		case 37: jsonItem = BibliaKJV.getVersiculoHageo(cap,name);
		break;
		case 38: jsonItem = BibliaKJV.getVersiculoZacarias(cap,name);
		break;
		case 39: jsonItem = BibliaKJV.getVersiculoMalaquias(cap,name);
		break;
		case 40: jsonItem = BibliaKJV.getVersiculoMateo(cap,name);
		break;
		case 41: jsonItem = BibliaKJV.getVersiculoMarcos(cap,name);
		break;
		case 42: jsonItem = BibliaKJV.getVersiculoLucas(cap,name);
		break;
		case 43: jsonItem = BibliaKJV.getVersiculoJuan(cap,name);
		break;
		case 44: jsonItem = BibliaKJV.getVersiculoHechos(cap,name);
		break;
		case 45: jsonItem = BibliaKJV.getVersiculoRomanos(cap,name);
		break;
		case 46: jsonItem = BibliaKJV.getVersiculoCorintios1(cap,name);
		break;
		case 47: jsonItem = BibliaKJV.getVersiculoCorintios2(cap,name);
		break;
		case 48: jsonItem = BibliaKJV.getVersiculoGalatas(cap,name);
		break;
		case 49: jsonItem = BibliaKJV.getVersiculoEfesios(cap,name);
		break;
		case 50: jsonItem = BibliaKJV.getVersiculoFilipenses(cap,name);
		break;
		case 51: jsonItem = BibliaKJV.getVersiculoColosenses(cap,name);
		break;
		case 52: jsonItem = BibliaKJV.getVersiculoTesalonicenses1(cap,name);
		break;
		case 53: jsonItem = BibliaKJV.getVersiculoTesalonicenses2(cap,name);
		break;
		case 54: jsonItem = BibliaKJV.getVersiculoTimoteo1(cap,name);
		break;
		case 55: jsonItem = BibliaKJV.getVersiculoTimoteo2(cap,name);
		break;
		case 56: jsonItem = BibliaKJV.getVersiculoTito(cap,name);
		break;
		case 57: jsonItem = BibliaKJV.getVersiculoFilemon(cap,name);
		break;
		case 58: jsonItem = BibliaKJV.getVersiculoHebreos(cap,name);
		break;
		case 59: jsonItem = BibliaKJV.getVersiculoSantiago(cap,name);
		break;
		case 60: jsonItem = BibliaKJV.getVersiculoPedro1(cap,name);
		break;
		case 61: jsonItem = BibliaKJV.getVersiculoPedro2(cap,name);
		break;
		case 62: jsonItem = BibliaKJV.getVersiculoJuan1(cap,name);
		break;
		case 63: jsonItem = BibliaKJV.getVersiculoJuan2(cap,name);
		break;
		case 64: jsonItem = BibliaKJV.getVersiculoJuan3(cap,name);
		break;
		case 65: jsonItem = BibliaKJV.getVersiculoJudas(cap,name);
		break;
		case 66: jsonItem = BibliaKJV.getVersiculoApocalipsis(cap,name);
		break;


	}

	//console.log(jsonItem.texto);

	return jsonItem;
};
