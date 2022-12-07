// navbar 
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
});






function createPokeCard(data){
  // creating Element
  const card = document.createElement(`div`);
  card.classList.add(`card-set`);
  mainSet.append(card);
  
  card.innerHTML = `
  
  `;
  
  
}


class Events{
constructor(eventName, date, time, location, data){
  this.date = date;
  this.time = time;
  this.location = location;
  this.data = data;
  this.eventName = eventName;
};

createCard(place){
  const mainSet = document.querySelector(`#${place}`)
  // creating Element
  const card = document.createElement(`div`);
  card.classList.add(`card-set`);
  mainSet.append(card);
  
  card.innerHTML = `
  <h1>${this.eventName}</h1>
  <span>${this.date}</span> 
  <span>${this.time}</span>
  <h2>${this.location}</h2>
  <p>${this.data}</p>
  `;

 
}

}

const Botherum = new Events('Come tour Botherum',
`Jun 17 - 18, 2023`,'10 AM - 5 PM',
`Historic Botherum
341 Madison Pl, Lexington, KY`,
`Providing education, resources & networking
opportunities to promote the love of gardening, floral design, civic & environmental 
responsibilities since 1931. Member of National Garden Clubs and South Atlantic Region.`);

Botherum.createCard('all-events');
Botherum.createCard('comming-events');
Botherum.createCard('popular');



const CentralKY = new Events(`Central KY Home & Garden Show`,`Mar 31 - Apr 2, 2023`,`5 PM`,`Central Bank Center
430 W Vine St, Lexington, KY`,
`The 45th Annual Central Kentucky Home and Garden 
Show will have home improvement, deals and sales, inspirational ideas, experts and so much more at their annual home event!`);
CentralKY.createCard('all-events');
CentralKY.createCard('comming-events');
CentralKY.createCard('popular');