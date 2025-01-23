function() {
  fetch('https://raw.githubusercontent.com/adawdawdfefs/redditrandnsfw/refs/heads/main/nsfwsubreddits.txt')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n').filter(line => line.trim() !== '');
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      const fullUrl = 'https://reddit.com/' + randomLine.trim();
      window.location.href = fullUrl;
    })
    .catch(err => alert('Error: ' + err));
};
