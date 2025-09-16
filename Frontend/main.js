function GetData(){
    fetch('http://localhost:8000/student/task/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function CreateData(){
    fetch('http://localhost:8000/student/task/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            student_reference: 1,
            task_name: 'Create_project',
            description: 'using django',
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function GetBook(){
    fetch('http://localhost:8000/library/book/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
function GetLaptop(){
    fetch('http://localhost:8000/library/laptop/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}