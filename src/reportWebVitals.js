const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && window.performance) {
    let entries = [];
    const observer = new PerformanceObserver((list) => {
      entries = entries.concat(list.getEntries());
      onPerfEntry(entries);
    });
    observer.observe({ type: 'web-vital', buffered: true });
    
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        observer.takeRecords();
        observer.disconnect();
      }
    }, false);
  }
};

export default reportWebVitals;