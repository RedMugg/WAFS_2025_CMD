function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId= setTimeout(function(){
        method();
    }, delay);
}

const [red, green, blue] = [255, 255, 255]
const bodySection = document.querySelector('body')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  bodySection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  debounce(handleScroll, 100);
})

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/219';

//Get complete url from the data you want
const myURL = baseURL + endpointMe;

console.log(myURL);

//Call function " getData" for the data you need
getData(myURL).then( data219 => {

	//Fill wanted data in variables
	let myName = data219.data.name;
	let myNickname = data219.data.nickname;
    let myBio = data219.data.bio;

    //Find the needed sections in the html code
	let mainH1 = document.querySelector("h1:nth-of-type(1)");
	let subline = document.querySelector("h2:nth-of-type(1)");
    let bio = document.querySelector("p:nth-of-type(1)")

	//Fill the h1 with the given name
	mainH1.textContent = `Yoyoyo mijn naam is ${myName}`;
	subline.textContent = `Ik wordt ook wel eens de ${myNickname} genoemd.`;
    bio.textContent = `Ik ben een echte ${myBio}`;

	console.log(data219.data);
} );


async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}