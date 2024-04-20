const addNotesBtn = document.querySelector("#add-btn-id");

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("notes-card-div");
  const noteHTML = `
    <div class="operations-btn">
    <button class="edit-btn">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
  </div>

  <textarea
    name="notes"
    class="notes-textarea-class"
    id="notes-textarea-id"
    cols="30"
    rows="10"
  ></textarea>
    
    `;
  note.insertAdjacentHTML("afterbegin", noteHTML);

  document.querySelector(".notes-cards-container").appendChild(note);
};

addNotesBtn.addEventListener("click", () => addNewNote());
