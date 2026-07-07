function saveHabit() {
  let habit = document.getElementById("habit").value;

  if (habit == "") {
    alert("Enter a habit");

    return;
  }

  document.getElementById("result").innerHTML = "Habit Saved : " + habit;
}
