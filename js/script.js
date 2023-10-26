// M6Assignment
// Maria Cecilia Schultz

const $ = (id) => document.getElementById(id)

let form = $('empForm')

form.addEventListener('submit',(e) =>  {

    e.preventDefault(); // prevent form from submitting 

    let id = $('id').value;
    let name = $('name').value;
    let ext = $('ext').value;
    let email = $('email').value;
    let department = $('department').value;

    console.log("ID= " + id);
    console.log(`Name: ${name}`);
    console.log(`Extension: ${ext}`);
    console.log(`Email: ${email}`);
    console.log(`Department: ${department}`);

}); 


