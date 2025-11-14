fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const bars = document.querySelectorAll('article > div > div');
    const tooltips = document.querySelectorAll('.tooltip');
    
    const maxAmount = Math.max(...data.map(d => d.amount));
    
    bars.forEach((bar, index) => {
      const amount = data[index].amount;
      const heightPercent = (amount / maxAmount) * 100;
      bar.style.height = `${heightPercent}%`;
      
      // Set tooltip text
      tooltips[index].textContent = `$${amount}`;
      
      // Show tooltip on hover
      bar.addEventListener('mouseenter', () => {
        tooltips[index].classList.add('visible');
      });
      
      bar.addEventListener('mouseleave', () => {
        tooltips[index].classList.remove('visible');
      });
    });
  });