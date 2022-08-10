

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = (page * 9)- 9;
   let endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   // loops through the list of students
   for(let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {

         // creates and appends the HTML markup for the list of students and their details
         const studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>`;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      };
   };
};

/*
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // console.log(list);
   let numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   // loops through the pages and creates a button for each page, appending the button to the HTML
   for(let i = 1; i <= numOfPages; i++) {
      const button = `
         <li>
            <button type="button">${i}</button>
         </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   };
   const activeBtn = document.querySelector('button');
   activeBtn.className = 'active';

   // listen for a click on the buttons and adds an active class when clicked 
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const btn = document.querySelector('.active');
        btn.className = '';
        
        const newBtn = e.target;
        newBtn.className = 'active';

        // calls the showPage function
        showPage(list, e.target.textContent);
      }
   });
};
// calls the showPage and addPagination function
showPage(data, 1);
addPagination(data);
