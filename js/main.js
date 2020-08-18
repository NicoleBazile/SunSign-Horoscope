document.getElementById('button').onclick = zodiacSign;
function zodiacSign(){
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
if ((month == 3 && day >= 21) || (month == 4 && day <= 19)){
  document.getElementById('sign').innerHTML = "Aries: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate";
  document.getElementById("myImg").src = "./img/aries.png";
}else if((month == 4 && day >= 20) || (month == 5 && day <= 20)){
  document.getElementById('sign').innerHTML= "Taurus: Reliable, patient, practical, devoted, responsible, stable";
  document.getElementById("myImg").src = "./img/tau.png";
}else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
  document.getElementById('sign').innerHTML= "Gemini: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas";
  document.getElementById("myImg").src = "./img/gem.png";
} else if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
  document.getElementById('sign').innerHTML= "Cancer: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive";
  document.getElementById("myImg").src = "./img/can.png";
}else if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
  document.getElementById('sign').innerHTML= "Leo: Creative, passionate, generous, warm-hearted, cheerful, humorous";
  document.getElementById("myImg").src = "./img/leo.png";
}else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
  document.getElementById('sign').innerHTML= "Virgo: Loyal, analytical, kind, hardworking, practical";
  document.getElementById("myImg").src = "./img/vir.png";
}else if((month == 9 && day >= 23) || (month == 10 && day <= 22)){
  document.getElementById('sign').innerHTML= "Libra: Loyal, analytical, kind, hardworking, practical";
  document.getElementById("myImg").src = "./img/lib.png";
}else if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
document.getElementById('sign').innerHTML= "Scorpio: Resourceful, brave, passionate, stubborn, a true friend";
document.getElementById("myImg").src = "./img/sco.png";
}else if((month == 11 && day >= 21) || (month == 12 && day <= 21)){
  document.getElementById('sign').innerHTML= "Sagittarius: Generous, idealistic, great sense of humor";
  document.getElementById("myImg").src = "./img/sag.png";
}else if((month == 12 && day >= 21) || (month == 1 && day <= 19)){
document.getElementById('sign').innerHTML= " Capricorn: Responsible, disciplined, self-control, good managers";
document.getElementById("myImg").src = "./img/capri.png";
}else if((month == 1 && day >= 21) || (month == 2 && day <= 18)){
document.getElementById('sign').innerHTML= "Aquarius: Progressive, original, independent, humanitarian";
document.getElementById("myImg").src = "./img/aqu.png";
}else if((month == 2 && day >= 21) || (month == 3 && day <= 20)){
document.getElementById('sign').innerHTML= "Pisces: Compassionate, artistic, intuitive, gentle, wise, musical";
document.getElementById("myImg").src = "./img/pis.png";
}
}
