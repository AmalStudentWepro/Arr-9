let students = ["Anisa", "Sabina", "Donik", "Sardor", "Aziz"]

function deleteStudent() {
  let name = prompt("Введите имя для удаления:")
  
  let index = students.indexOf(name)
  if (index !== -1) {
    students.splice(index, 1)
    alert(name + " удалён(а)")
  } else {
    alert("Такого человека нет")
  }
}

deleteStudent()
console.log(students)
