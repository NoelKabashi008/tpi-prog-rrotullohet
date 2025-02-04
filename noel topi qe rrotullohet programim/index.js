let ball = document.getElementById('ball');
    let orbitSpeed = 1;
    let reverse = false;

    function updateOrbit() {
      ball.style.animation = `orbit ${orbitSpeed}s linear infinite`;
      ball.style.animationDirection = reverse ? 'reverse' : 'normal';
    }

    function startOrbit() {
      updateOrbit();
    }

    function stopOrbit() {
      ball.style.animation = 'none';
    }

    function reverseOrbit() {
      reverse = !reverse;
      updateOrbit();
    }

    function faster() {
      orbitSpeed = Math.max(1, orbitSpeed - 2.0);
      updateOrbit();
    }

    function slower() {
      orbitSpeed += 2.0;
      updateOrbit();
    }