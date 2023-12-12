export function startConfetti(){
    const defaults = { startVelocity: 3, spread: 30, ticks: 6, zIndex: 0 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    confetti(
        Object.assign({}, defaults, {
          particleCount: 100,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount: 100,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
}

export async function loopConfetti(times = 5){

    for(let i = 0; i < times; i++){
        startConfetti()
        await delay(800);
    }
}

export function stopConfetti(){
    const canvas = document.getElementById('confetti');
    console.log(canvas);
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}