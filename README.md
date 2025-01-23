## About

This repo seeks to recreate the "randnsfw" button as a bookmark in Firefox (it might work in Chrome and/or Safari, it is untested). It works by accessing a text file containing a very long list of nsfw subreddits. Once set up, all you have to do is click your bookmark and you we have something resembling the old randnsfw button. You do not need to download anything to your device.

Currently the greatest limitation is that this list is manually maintained, so newer nsfw subreddits will not be on it. Of course, anyone is welcome to make a pull request adding a subreddit to the list. I do not currently have any interest in creating something that scrapes the website for nsfw subreddits to automate this process, though that would be cool.

DISCLAIMER: I do not associate with any of the subreddits one can access using this tool and do not endorse anything they post.

For my friend <3

## Structure

This repo contains three (important) files.

1. ``nsfwsubreddits.txt``

  This one contains a textfile with subreddit names on each line of the format "r/subreddit_name\n". It was taken from this reddit post: https://www.reddit.com/r/NSFWGenerators/comments/1ckyl7i/ultimate_list_of_nsfw_subreddits_2024/. Thus, it is likely missing any number of NSFW subreddits. Feel free to make pull requests updating this file.

2. ``randnsfw.js``

  This one contains a javascript function which accesses the textfile and opens a window at the subreddit selected randomly.

3. ``README``

  You are here!

## How to use

To use, you do *not* need to download *anything* from this repo to your local device. Instead, create a bookmark in Firefox and name it whatever you want. Then edit the bookmark and into the URL field copy-paste the following text:

```
javascript:(function() {
  fetch('https://raw.githubusercontent.com/adawdawdfefs/reddit-randnsfw/refs/heads/main/nsfwsubreddits.txt')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n').filter(line => line.trim() !== '');
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      const fullUrl = 'https://reddit.com/' + randomLine.trim();
      window.location.href = fullUrl;
    })
    .catch(err => alert('Error: ' + err));
})();
```

Then simply click your bookmark. Enjoy!
