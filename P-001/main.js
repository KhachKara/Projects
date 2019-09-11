var socket = new WebSocket("ws://myserver.com:8080/");
socket.onopen = function() {
  alert("Соединение установлено.");
  socket.send("Привет");
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
  alert("Получены данные " + event.data);
  document.getElementById(testArea).textContent = event.data;
};

socket.onerror = function(error) {
  alert("Ошибка " + error.message);
};