/* JavaScript que controla Data Atual no topo da Tela, lado esquerdo */
type="text/javascript"

	dayName = new Array("domingo", "segunda-feira", "terça-feira", 
		"quarta-feira", "quinta-feira", "sexta-feira", "sábado")

	monName = new Array("janeiro", "fevereiro", "março", "abril", 
		"maio", "junho", "agosto", "outubro", "novembro", "dezembro")

now = new Date
			
type="text/javascript"

	document.write("<h5><i>Hoje é " + dayName[now.getDay()]
		+ ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " 
		+ now.getFullYear() + " </i></h5>")
				