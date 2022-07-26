const like = document.getElementById("like");
const unlike = document.getElementById("unlike");

const handleLikes = (rate) => {
  switch (rate) {
    case "like":
      like.innerText = Number(like.innerText) + 1;
      break;
    case "unlike":
      unlike.innerText = Number(unlike.innerText) + 1;
      break;
    default:
      break;
  }
};

const handleTable = () => {
  const row = document.getElementById("txtRows").value;
  const col = document.getElementById("txtColumns").value;
  const createTable = document.getElementById("createTable");
  const table = document.createElement("table");
  if (row < 1 && col < 1) {
    return alert("הכנס מספרים גדולים מ-0 בעמודות ובשורות");
  }
  for (let i = 1; i <= row; i++) {
    let tr = table.insertRow();
    for (let j = 1; j <= col; j++) {
      let td = tr.insertCell();
      td.appendChild(document.createTextNode(`${i * j}`));
    }
  }
  createTable.append(table);
};

let canvas = document.getElementById("canvasFace");
let ctx = canvas.getContext("2d");

const face = () => {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.arc(175, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.arc(155, 60, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(195, 60, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
face();

let btnHappy = document.getElementById("btnHappy");
let btnSad = document.getElementById("btnSad");

const moodFace = (mood) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  face();
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  if (mood == "happy") {
    btnSad.style = "none";
    btnHappy.style.backgroundColor = "red";
    ctx.arc(175, 85, 15, 0, -1 * Math.PI);
  } else {
    btnHappy.style = "none";
    btnSad.style.backgroundColor = "red";
    ctx.arc(175, 100, 15, 0, -1 * Math.PI, true);
  }
  ctx.stroke();
  ctx.closePath();
};
