let firstCard = null;
        let secondCard = null;
        let lock = false;
 
        const boxes = document.querySelectorAll('.box');
 
        boxes.forEach(box => {
            box.classList.add('hidden');
            box.addEventListener('click', () => {
                if (lock || box === firstCard || box.classList.contains('matched')) return;
 
                box.classList.remove('hidden');
               
                if (!firstCard) {
                    firstCard = box;
                } else {
                    secondCard = box;
                    lock = true;
 
                    if (firstCard.dataset.value === secondCard.dataset.value) {
                        firstCard.classList.add('matched');
                        secondCard.classList.add('matched');
                        resetCards();
                    } else {
                        setTimeout(() => {
                            firstCard.classList.add('hidden');
                            secondCard.classList.add('hidden');
                            resetCards();
                        }, 1000);
                    }
                }
            });
        });
 
        function resetCards() {
            firstCard = null;
            secondCard = null;
            lock = false;
        }