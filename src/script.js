const ctx = document.getElementById('batteryChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Íon-Lítio', 'Chumbo-Ácido', 'Fluxo', 'CAES', 'Hidrelétrica Reversível'],
    datasets: [
      {
        label: 'Densidade (Wh/kg)',
        data: [250, 40, 60, 15, 20],
        backgroundColor: '#4e79a7'
      },
      {
        label: 'Custo relativo ($/kWh)',
        data: [150, 100, 250, 180, 120],
        backgroundColor: '#f28e2c'
      },
      {
        label: 'Vida útil (anos)',
        data: [10, 5, 20, 30, 50],
        backgroundColor: '#76b7b2'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));
});
