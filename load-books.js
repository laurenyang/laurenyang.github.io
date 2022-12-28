/* Function to read book JSON data*/
async function populate() {
    console.log("in populate function top");

    const data = getJSON();
    console.log(data);
    /*
    const requestURL = 'https://github.com/laurenyang/laurenyang.github.io/blob/main/data.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request, {mode: "no-cors"});
    const bookData = await response.json();
    */
    console.log("in populate function");
  
    //populateHeader(bookData);
    populateHeroes(bookData);
  
  }

  async function getJSON() {
    const response = await fetch('https://github.com/laurenyang/laurenyang.github.io/blob/main/data.json');
    const json = await response.json();
    return json;
  }
  
 

  /*
  function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }*/
  
  function populateHeroes(obj) {
    const section = document.querySelector('summary');
    const all_books = obj.books;
    const myPara1 = document.createElement('p');
    myPara1.textContent = "test";
    section.appendChild(myPara1);
  
    /*
    for (const book of all_books) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
    */
  }

  populate();
  