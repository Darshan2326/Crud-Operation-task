// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("crudForm");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const rollNoInput = document.getElementById("rollNo");
    const tableBody = document.getElementById("tableBody");
    
    let data = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const rollNo = rollNoInput.value;

        if (firstName && lastName && rollNo) {
            const entry = { firstName, lastName, rollNo };
            data.push(entry);
            renderTable();
            form.reset();
        }
    });

    function renderTable() {
        tableBody.innerHTML = "";
        data.forEach((entry, index) => {
            const row = document.createElement("tr");
            
            row.innerHTML = `
                <td>${entry.firstName}</td>
                <td>${entry.lastName}</td>
                <td>${entry.rollNo}</td>
                <td>
                    <button class="edit" onclick="editEntry(${index})">Edit</button>
                    <button class="delete" onclick="deleteEntry(${index})">Delete</button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    }

    window.editEntry = (index) => {
        const entry = data[index];
        firstNameInput.value = entry.firstName;
        lastNameInput.value = entry.lastName;
        rollNoInput.value = entry.rollNo;
        data.splice(index, 1);
    };

    window.deleteEntry = (index) => {
        data.splice(index, 1);
        renderTable();
    };
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
}

function showMoreScreen(screenId) {
    const screens = document.querySelectorAll('.more-screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    showSection('moreSection');
}




// Multiple Tab

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



//   Main menu

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


//                  auto Complate 

(function () {
    "use strict";
    let inputField = document.getElementById('input');
    let ulField = document.getElementById('suggestions');
    inputField.addEventListener('input', changeAutoComplete);
    ulField.addEventListener('click', selectItem);
  
    function changeAutoComplete({ target }) {
      let data = target.value;
      ulField.innerHTML = ``;
      if (data.length) {
        let autoCompleteValues = autoComplete(data);
        autoCompleteValues.forEach(value => { addItem(value); });
      }
    }
  
    function autoComplete(inputValue) {
      let destination = ["Italy", "Spain", "Portugal", "Brazil" , "Hindi","Kanadda","hindi"];
      return destination.filter(
        (value) => value.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  
    function addItem(value) {
      ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
    }
  
    function selectItem({ target }) {
      if (target.tagName === 'LI') {
        inputField.value = target.textContent;
        ulField.innerHTML = ``;
      }
    }
  })();



//                                          Multivalue Auto Complate

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("autocomplete-input");
    const list = document.getElementById("autocomplete-list");
    const suggestions = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Lemon", "Mango", "Orange", "Pineapple"];

    input.addEventListener("input", function() {
        const query = this.value.split(',').pop().trim();
        list.innerHTML = '';

        if (!query) {
            return false;
        }

        suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                const item = document.createElement("li");
                item.textContent = suggestion;
                item.addEventListener("click", function() {
                    const currentValues = input.value.split(',');
                    currentValues.pop();
                    currentValues.push(this.textContent);
                    input.value = currentValues.join(', ') + ', ';
                    list.innerHTML = '';
                });
                list.appendChild(item);
            }
        });
    });

    input.addEventListener("keydown", function(e) {
        let items = list.getElementsByTagName("li");
        if (items.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            currentFocus++;
            addActive(items);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            currentFocus--;
            addActive(items);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (currentFocus > -1) {
                if (items[currentFocus]) {
                    items[currentFocus].click();
                }
            }
        }
    });

    let currentFocus = -1;

    function addActive(items) {
        if (!items) return false;
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;
        items[currentFocus].classList.add("autocomplete-selected");
    }

    function removeActive(items) {
        for (let item of items) {
            item.classList.remove("autocomplete-selected");
        }
    }

    document.addEventListener("click", function(e) {
        if (e.target !== input) {
            list.innerHTML = '';
        }
    });
});



//                      Collapsible


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//                      multiple Collapsible
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = item.querySelector(".accordion-content");

            if (header.classList.contains("active")) {
                header.classList.remove("active");
                content.style.maxHeight = null;
            } else {
                headers.forEach(h => h.classList.remove("active"));
                const allContents = document.querySelectorAll(".accordion-content");
                allContents.forEach(c => c.style.maxHeight = null);

                header.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});


//                              images
// script.js
document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const fileNameInput = document.getElementById('fileName');
    const imageList = document.getElementById('imageList');

    const file = fileInput.files[0];
    const fileName = fileNameInput.value || file.name;

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');
            
            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = fileName;
            
            const caption = document.createElement('p');
            caption.textContent = fileName;

            const removeButton = document.createElement('button');
            removeButton.textContent = '×';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', () => {
                imageList.removeChild(imageItem);
            });

            imageItem.appendChild(image);
            imageItem.appendChild(caption);
            imageItem.appendChild(removeButton);
            imageList.appendChild(imageItem);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
});


//                      popup

// script.js
// script.js
document.getElementById('popupButton').addEventListener('click', function() {
    window.open(
        'https://jalaacademy.com', 
        'popupWindow', 
        'width=600,height=400,scrollbars=yes,resizable=yes'
    );
});



// document.getElementById('popupButton_in_window').addEventListener('click', function() {
//     window.open(
//         'https://jalaacademy.com', 
//         '_blank', 
//         'width=600,height=400,scrollbars=yes,resizable=yes'
//     );
// });


// 3rd pop up

// script.js
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var openModalBtn = document.getElementById("openModalBtn");
    var closeModalSpan = document.getElementsByClassName("close")[0];
    var closeModalBtn = document.getElementById("closeModalBtn");

    // Open the modal
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal when the user clicks on <span> (x)
    closeModalSpan.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks on the close button
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});



//  4th box alert box
// script.js// script.js
document.addEventListener('DOMContentLoaded', function() {
    var alertButton = document.getElementById("alertButton");

    alertButton.onclick = function() {
        alert("This is an alert Box!");
    }
});


//  5th popup conform box
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var confirmButton = document.getElementById("confirmButton");

    confirmButton.onclick = function() {
        var result = confirm("Confirm Message Box");
        if (result) {
            alert("You clicked OK!");
        } else {
            alert("You clicked Cancel!");
        }
    }
});


// 6th prompt popup
function showPrompt() {
    let userInput = prompt("Please enter your name:");
    if (userInput !== null) {
        alert("Hello, " + userInput + "!");
    }
}



//  Links
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('.link');
    
//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             alert(`You clicked ${this.textContent}`);
//         });
//     });
// });

