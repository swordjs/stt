<div class="in-translation">
  <img class="logo ml-50px" src="./InTranslation.svg" alt="" />
  <p class="translating text-20px mt-17.81px typing">Translating on an alien planet in ...</p>
</div>

<style>
  @keyframes typing-animation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }

  .logo{
    animation: blink 2s infinite linear;
  }

  .translating {
    font-family: 'Al Bayan';
    color: rgba(0, 0, 0, 0.5);
  }

  .typing {
    white-space: nowrap;
    overflow: hidden;
    animation: typing-animation 5s steps(40, end) infinite;
  }
</style>
