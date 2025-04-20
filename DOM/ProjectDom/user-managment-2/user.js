let users = [];
let editingIndex = -1;

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userTableBody = document.querySelector("#userTable tbody");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (editingIndex === -1) {
    users.push({ name, email });
  } else {
    users[editingIndex] = { name, email };
    editingIndex = -1;
    userForm.querySelector("button").textContent = "Add User";
  }

  nameInput.value = "";
  emailInput.value = "";

  renderTable();
});

function renderTable() {
  userTableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <button class="edit" onclick="editUser(${index})">Edit</button>
        <button class="delete" onclick="deleteUser(${index})">Delete</button>
      </td>
    `;

    userTableBody.appendChild(row);
  });
}

function editUser(index) {
    console.log("users", users)
  nameInput.value = users[index].name;
  emailInput.value = users[index].email;
  editingIndex = index;
  userForm.querySelector("button").textContent = "Update User";
}

function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}
