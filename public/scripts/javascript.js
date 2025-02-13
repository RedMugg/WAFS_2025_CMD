// Handle scroll gradient of the background (white -> black)
const [red, green, blue] = [255, 255, 255]
const bodySection = document.querySelector('body')

// Link the scroll to a RGB code
window.addEventListener('scroll', () => {
	let y = 1 + (window.scrollY || window.pageYOffset) / 1200
	y = y < 1 ? 1 : y
	const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
	bodySection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// Tosti/Leerdoelen scripts
// set counter
let i = 0;

// Get in document title and tekst
const leerdoelTitel = document.getElementById("leerdoelTitel")
const leerdoelTekst = document.getElementById("leerdoelTekst")
console.log(leerdoelTekst.innerHTML)

// Handle the tosti states
async function clickTosti() {
	i += 1;

	// Keep track of the counter not going beyond 4
	if (i > 4){
		i = 0;
	}
	getTosti = document.querySelector(".tosti");
	switch (i) {
		case 0:
			getTosti.src = "/images/tosti1.png";
			leerdoelTitel.innerHTML = "Leerdoelen"
			leerdoelTekst.innerHTML = "Kom meer over mijn leerdoelen te weten door op de tosti te klikken!"
			break;
		case 1:
			getTosti.src = "/images/tosti2.png";
			leerdoelTitel.innerHTML = "Leerdoel 1: Netheid/Precies"
			leerdoelTekst.innerHTML = "Ik wil graag wat netter gaan werken vanaf het begin van een project. Zoals bij deze website heb ik alle comments en opknap beurten aan de code pas achteraf gedaan wanneer ik (bijna) klaar was. Dit wil ik veranderen zodat ik daarmee gelijk ook preciezer te werk kan. Hiermee bedoel ik nettere CSS, maar ook HTML en Javascript. Dit loopt bij mij nog wel eens spaak namelijk."
			break;
		case 2:
			getTosti.src = "/images/tosti3.png";
			leerdoelTitel.innerHTML = "Leerdoel 2: Samenwerken"
			leerdoelTekst.innerHTML = "Als 'licht ervaren' programmeur weet ik van mijzelf dat ik op mijn eigen manier lekker door kan coderen en het eerste idee gelijk wil uitwerken. Bij het samenwerken kan dit natuurlijk een hinder zijn en dat heb ik eerder ook ondervonden. Het is namelijk niet handig om op je zelf door te gaan en dit niet verder te communiceren met jouw team. Ik wil daarom ook leren samen te werken op gebied van coderen. Hiermee bedoel ik dan het tijdig gebruik maken van comments, ideeën/plannen communiceren en gebruik maken van elkaars talenten."
			break;
		case 3:
			getTosti.src = "/images/tosti4.png";
			leerdoelTitel.innerHTML = "Leerdoel 3: Tools"
			leerdoelTekst.innerHTML = "Op dit moment ben ik mij nog niet heel erg bewust van handige tools om te gebruiken bij het web developen, laat staan programmeren over het algemeen. Ik gebruik nu nog echt de basis stukjes binnen HTML, CSS, Javascript en Node. Hier wil ik graag verandering in brengen aangezien die tools mij waarschijnlijk veel gaan helpen in het maken van toekomstige projecten."
			break;
		case 4:
			getTosti.src = "/images/tosti5.png";
			leerdoelTitel.innerHTML = "Nieuwe tosti?"
			leerdoelTekst.innerHTML = "Klik dan op de knop hier links!"
			break;
	}
	console.log(i);
}
