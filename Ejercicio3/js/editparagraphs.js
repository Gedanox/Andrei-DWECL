class editor{
    count = 0;
    editCreator(paragraphs){
        for (let paragraph of paragraphs){
            this.count++;
            let temp = paragraph.innerHTML;
            let container = document.createElement("div");
            let edit = document.createElement("button");
            edit.innerHTML = "Edit";

            edit.addEventListener("click", () => {
                paragraph.classList.toggle("hidden");
                let editcontainer = document.createElement("div");
                let textarea = document.createElement("textarea");
                textarea.value = temp;
                let confirmcontain = document.createElement("div");
                let save = document.createElement("button");
                save.innerHTML = "Save";

                save.addEventListener("click", () => {
                    paragraph.innerHTML = textarea.value;
                    temp = textarea.value;
                    paragraph.append(container);
                    paragraph.classList.toggle("hidden");
                    editcontainer.remove();
                });

                let cancel = document.createElement("button");
                cancel.innerHTML = "Cancel";
                cancel.addEventListener("click", () => {
                    paragraph.classList.toggle("hidden");
                    editcontainer.remove()
                });

                confirmcontain.append(save);
                confirmcontain.append(cancel);
                editcontainer.append(textarea);
                editcontainer.append(confirmcontain);
                paragraph.parentNode.insertBefore(editcontainer,paragraph);
            });
            container.append(edit);
            paragraph.append(container);
            this.addNotes(paragraph, paragraphs.length);
        }

    }

    addNotes(paragraph, countchecker) {
        let notes = document.createElement("button");
        notes.innerHTML = "Add notes";
        notes.addEventListener("click", () => {
            notes.classList.toggle("hidden");
            this.createTextarea(notes);
        });
        paragraph.parentNode.insertBefore(notes,paragraph);
        if(this.count == countchecker){
            let notes = document.createElement("button");
            notes.innerHTML = "Add notes";
            notes.addEventListener("click", () => {
                notes.classList.toggle("hidden");
                this.createTextarea(notes);
            });
            paragraph.parentNode.append(notes);
        }
    }

    createTextarea(notes){
        let notecontain = document.createElement("div");
        let textarea = document.createElement("textarea");
        let confirmcontain = document.createElement("div");
        let save = document.createElement("button");
        let note = document.createElement("p");
        save.innerHTML = "Confirm Note";
        save.addEventListener("click", () => {
            note.innerHTML = textarea.value;
            notes.parentNode.insertBefore(note, notes);
            notes.classList.toggle("hidden");
            notecontain.remove();
        });

        let cancel = document.createElement("button");
        cancel.innerHTML = "Cancel";
        cancel.addEventListener("click", () => {
            notes.classList.toggle("hidden");
            notecontain.remove()
        });

        confirmcontain.append(save);
        confirmcontain.append(cancel);
        notecontain.append(textarea);
        notecontain.append(confirmcontain);
        notes.parentNode.insertBefore(notecontain, notes);
    }
}
export {editor};