document.querySelectorAll('.faq-card summary').forEach((summaryElement) => {
    summaryElement.addEventListener('click', () => {
      if (summaryElement.parentNode.getAttribute('open')) {
        summaryElement.parentNode.removeAttribute('open');
      } else {
        summaryElement.parentNode.setAttribute('open', '');
      }
    });
  });