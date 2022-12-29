
let noteList = [];
let flag=0;
let view = "grid"; //default view is grid-view
let id = 0;

function addNotes(){
   
    let titleName = document.getElementById("titleName").value;
    let notesName = document.getElementById("notesName").value
   
    
        let note = {
            "title": titleName,
            "notes": notesName
        }
        
        noteList.push(note)
        alert("Notes added successfully");
        document.querySelector("form").reset();
        return true;
    }

function displayNotes(){

    let y = 0;
    let display = document.querySelectorAll("section");
    for(let index =0; index<display.length; index++){
        display[index].remove();
    }

    noteList.forEach(note =>{
        let section = document.createElement('section');
       // section.style.border="3px solid pink";
       const noteContainer=document.getElementById('note-container');
       // body.style.border="2px solid black";
        noteContainer.appendChild(section);
        let h2 = document.createElement("h2");
        let h2Text = document.createTextNode(note.title);
        h2.appendChild(h2Text);
        section.appendChild(h2);

        let p = document.createElement("p"); 
        let pText = document.createTextNode(note.notes);
        p.appendChild(pText);
        section.appendChild(p);
        let btn = document.createElement("button");
        let btntext = document.createTextNode('Delete Note');
        btn.appendChild(btntext);

        
        btn.addEventListener("click", function(){
            deleteUser(y);
            y++;
        })
        section.appendChild(btn);
    })
}


function deleteUser(id1){
   
    noteList.splice(id1, 1);
    displayNotes();
    
}

function toggleView(){
    alert("Changing View");
    let body = document.getElementById("note-container");
    if(flag===0){
        body.style.display='flex';
        flag=1;

    }
    else{
        body.style.display='block';
        flag=0;
    }

}
////


