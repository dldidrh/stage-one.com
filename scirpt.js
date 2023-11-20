function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
    cloneButton();

}

cloneButton();

function getRandomPosition(minX, maxX, minY, maxY) {
    var x = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    var y = Math.floor(Math.random() * (maxY - minY + 1) + minY);
    return {x, y};
}

function cloneButton() {
    var originalButton = document.getElementById('originalButton');
    var cloneButton = originalButton.cloneNode(true);

    cloneButton.id = 'cloneButton'

    var randomPosition = getRandomPosition(0, 1000, -500, -600);

    cloneButton.style.left = randomPosition.x + 'px';
    cloneButton.style.top = randomPosition.y + 'px';

    cloneButton.querySelector('button').onclick = function() {
        cloneButton();
    };

    document.body.appendChild(cloneButton);
}



function clonedButton() {

        var dustButton = document.getElementById('dustButton');
        var clonedButton = dustButton.cloneNode(true);
    
        clonedButton.id = 'clonedButton'
    
        var randomedPosition = getRandomPosition(0, 600, -500, -600);
    
        clonedButton.style.left = randomedPosition.x + 50 + 'px';
        clonedButton.style.top = randomedPosition.y + 50 + 'px';
    
        clonedButton.querySelector('.dust_button img').onclick = function() {
            clonedButton();
        };
    
        document.body.appendChild(clonedButton);
    }

   
    function showEchoingText() {
        // 텍스트 엘리먼트 생성
        var originalText = document.createElement('div');
        originalText.textContent = "우하하! 먼지투성이야 우하하! 먼지투성이야 우하하! 먼지투성이야"; // 원하는 기존 텍스트로 설정
        originalText.classList.add('echo-text');
  
        // 클릭 이벤트가 발생한 위치에서 텍스트가 시작되도록 설정
        var clickX = event.clientX;
        var clickY = event.clientY;
        originalText.style.left = clickX + 'px';
        originalText.style.top = clickY + 'px';
  
        // body에 텍스트 추가
        document.body.appendChild(originalText);
  
        // 애니메이션 추가
        animateEcho(originalText);
      }
  
      function animateEcho(element) {
        var duration = 3000; // 애니메이션 지속 시간 (밀리초)
        var startTime = null;
  
        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          var progress = currentTime - startTime;
  
          // 애니메이션 진행 상태에 따라 텍스트 크기 조절
          element.style.transform = `scale(${1 + progress / duration})`;
  
          // 애니메이션이 끝날 때까지 반복
          if (progress < duration) {
            requestAnimationFrame(animate);
          } else {
            // 애니메이션이 끝나면 엘리먼트 제거
            element.parentNode.removeChild(element);
          }
        }
  
        // 애니메이션 시작
        requestAnimationFrame(animate);
      }
    