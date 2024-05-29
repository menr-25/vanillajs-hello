function excuseGenerator() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let excuse = `${randomElement(who)} ${randomElement(action)} ${randomElement(what)} ${randomElement(when)}`;

  return excuse;
}

document.getElementById("excuse").innerText = excuseGenerator();
