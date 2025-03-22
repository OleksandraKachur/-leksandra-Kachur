<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 
      This is an HTML comment
      You can write text in a comment and the content won't be visible in the page
    -->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://glitch.com/favicon.ico" />

    <!--
      This is the page head - it contains info the browser uses
      Like the title, which appears on the browser tab but not inside the page
      Further down you'll see the content that displays in the page
    -->
    <title>oleksandra.kachur</title>

    <!-- The website stylesheet -->
    <link rel="stylesheet" href="/style.css" />

    <!-- The website JavaScript file -->
    <script src="/script.js" defer></script>
  </head>
  <body>
    <!--
      The body includes the content you see in the page
      Each element is defined using tags, like this <div></div>
      The attributes like class="wrapper" let us style elements in the CSS
    -->
    <div class="wrapper">
      <div class="content" role="main">
        <h1 class="title">My bio</h1>
        <img
          src="https://cdn.glitch.global/dc901bed-f468-48d9-aaf7-c225870e5e06/photo_2025-02-27_14-12-07.jpg?v=1740658338457"
          class="illustration"
          alt="Editor illustration"
          title="Click the image!"
        />
        <div class="instructions">
          <h2>Добрий день!</h2>
          <p>
           Мене звати Олександра Качур. Мені 17 років. Я люблю подоржувати та переважно я це робила зі своєю сім’ю та друзями. Моя мама до війни займалась поїздками. Вона збирала уже багато людей,тому з легкістю можна було знайти нові знайомства. Завдяки моїм батькам я побувала близько 13 країн не враховуючи Україну, я вважаю це дуже круто. Влітку ми їздили до Італії, Франції, а взимку ми їздили переважно на лижні курорти. Мої батьки катаються на лижах ще зі своїх студентських років і тому мене з братом вони поставили на лижі у достатньо юному віці.
          </p>
          <!--  🚧 TODO: ADD BUTTON HERE -->

          <!-- Once you've added the button from TODO.md, click it in the page -->
          <!-- Check out the function in script.js to see how it works -->
        </div>
      </div>
    </div>
    <!-- The footer holds our remix button — you can keep or delete it ✂ -->
    <footer class="footer">
      <div class="links"></div>
      <a
        class="btn--remix"
        target="_top"
        href="https://glitch.com/edit/#!/remix/glitch-hello-website"
      >
        <img
          src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
          alt=""
        />
        Remix on Glitch
      </a>
    </footer>
  </body>
</html>
