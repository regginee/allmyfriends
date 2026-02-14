const message = `Happy Valentine’s Day, for you guys who open this link :3
Just dropping by to wish you all days full of little joys, random laughs, and way more good vibes than bad.
May your mornings be easy, your afternoons productive, and your nights peaceful. Hope you find reasons to smile, moments to chill, and people who make life feel lighter, even on the messy days. No need to overthink it, just sending a little reminder that you deserve good things, always :3
Stay safe, stay kind, and may happiness sneak into all the small corners of your life today and every day <3`
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter();
  }, 600);
}
