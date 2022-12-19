class editor{
    editCreator(paragraphs){
        for (let paragraph of paragraphs){
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
        }
    }
}
export {editor};