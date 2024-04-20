const addNotesBtn = document.querySelector("#add-btn-id");

//ADDING DATA TO LOCAL STORAGE
const updateLocalStorage = () => {
  //RETURNS ARRAY
  const allNotes = document.querySelectorAll("textarea");
  const notes = [];

  allNotes.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);
  localStorage.setItem("allNotesData", JSON.stringify(notes));
};

//ADDING A NOTE CARD
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("notes-card-div");
  const noteHTML = `
    <div class="operations-btn">
    <button class="edit-btn btn">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete-btn btn"><i class="fa-solid fa-trash"></i></button>
  </div>

  <div class="note-content ${text ? "" : "hidden"}" ></div>
  <textarea
    name="notes"
    class="note-textarea ${text ? "hidden" : ""}"
    id="note-textarea-id"
    cols="30"
    rows="10"
  ></textarea>`;
  note.insertAdjacentHTML("afterbegin", noteHTML);
  document.querySelector(".notes-cards-container").appendChild(note);

  const noteEditbtn = note.querySelector(".edit-btn");
  const noteDeletebtn = note.querySelector(".delete-btn");
  const noteContent = note.querySelector(".note-content");
  const noteTextArea = note.querySelector(".note-textarea");

  // DELETING A NOTE
  noteDeletebtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorage()

  });

  //TOGGLE TEXTAREA AND NOTE
  noteTextArea.value = text;
  noteContent.innerHTML = text;

  noteEditbtn.addEventListener("click", () => {
    noteContent.classList.toggle("hidden");
    noteTextArea.classList.toggle("hidden");
  });

  //ADDING NOTES TO NOTE DIV FROM TEXTAREA
  noteTextArea.addEventListener("change", (event) => {
    const textAreaValue = event.target.value;
    noteContent.innerHTML = textAreaValue;

    // ADDING NOTES TO LOCAL STORAGE
    updateLocalStorage();
  });
};

// DATA RETRIEVING FROM LOCAL STORAGE
const retrievedNotes = JSON.parse(localStorage.getItem("allNotesData"));
if (retrievedNotes) {
  retrievedNotes.forEach((note) => {
    addNewNote(note);
  });
}
addNotesBtn.addEventListener("click", () => addNewNote());
