const schedule = require('node-schedule');
const scrapeBooks = require('./scraper');

const scheduleScraping = () => {
  // Schedule the job to run daily at midnight
  schedule.scheduleJob('0 0 * * *', () => {
    console.log('Running scheduled book scraping');
    scrapeBooks();
  });
};

module.exports = scheduleScraping;
