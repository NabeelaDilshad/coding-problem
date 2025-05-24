const users = [];
let editIndex = -1
const userForm = document.getElementById("Management-form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("useremail");
const addressInput = document.getElementById("userAddress");
const usertable = document.querySelector("#usertable tbody")
const formButton = document.querySelector('#Management-form button')
console.log(users)

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();
  if (!name && !email && !address) {
    return;
  }

  //   const obj = {
  //     name: name,
  //     email: email,
  //     address: address,
  //   };
  //   users.push(obj);
  if (editIndex === -1) {
    users.push({ name, email, address })
  }
  else {
    users[editIndex] = { name, email, address }
    editIndex = -1
    formButton.textContent = "Add User"
  }

  nameInput.value = ""
  emailInput.value = ""
  addressInput.value = ""
  console.log(users)
  renderList()
});


function EditUser(index) {
  console.log("edit user", index)
  nameInput.value = users[index].name
  emailInput.value = users[index].email
  addressInput.value = users[index].address
  editIndex = index;
  formButton.textContent = "Update User"
}

function DeleteUser(index) {
  console.log("delete user", index)
  users.splice(index, 1)
  renderList()
}


function renderList() {
  // clear the list
  usertable.innerHTML = ""
  users.forEach((user, index) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
            <td> ${user.name}</td>
            <td> ${user.email}</td>
            <td> ${user.address}</td>
            <div class="action">
                <button onclick=EditUser(${index})>Edit</button>
                <button onclick=DeleteUser(${index})>Delete</button>
            </div>
        `
    usertable.appendChild(tr)
  })
}