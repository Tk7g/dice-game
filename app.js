// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
// <div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идвэхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1 -ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    switchToNextPlayer();
      }
});

// HOLD товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click', function(){
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нэмж өгнө.

  scores[activePlayer] = scores[activePlayer] + roundScore;
// Дэлгэц дээр оноог нь өөрчилнө.
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
// Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
if (scores[activePlayer] >= 10){
  // Ялагч гэсэн техтийг нэрнийх нь оронд гаргана
  document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");

}else{
  // Тоглогчийг ээлжийг солино.
  switchToNextPlayer();
}
// Дэлгэц дээр оноог нь өөрчилнө.
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  
});
// Энэ функц нь тоглох ээлжийг дараачийн  тоглогч руу шилжүүлдэг.
function switchToNextPlayer(){
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
   activePlayer === 0 ? (activePlayer = 1 ) : (activePlayer = 0);
  // Улаан цэгийг шилжүүлэх
  document.querySelector('.player-0-panel').classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгоно.
  diceDom.style.display = "none";  
}
// Шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector('.btn-new').textContent = 