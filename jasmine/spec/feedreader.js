/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('valid', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    
    it('url defined', function() {
        for(let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
        }
    });
        
    it('has name', function() {
        for(let feed of allFeeds) {
            expect(feed.name).not.toBe(undefined);
            expect(feed.name).not.toBe('');
        }
    });
});

//gives the green light on menu is hidden//
    describe ('The menu', function() {
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

//creates the toggle on and off in the html//
        it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    
//Test for inital load feed
    describe ('Initial Entries', function() {

    beforeEach(function(done) {
        loadFeed(0, done);
    });

    it('check entry', function() {
      let feed = document.querySelector('.feed');
      let entries = feed.querySelectorAll('.entry')
      expect(entries.length).toBeGreaterThan(0);

    });
});

//Test for new content after inital load
describe('New Feed Selection', function() {

       let oldFeed;


    beforeEach(function(done) {
      loadFeed(0, function() {
        // store old feed
        oldFeed = document.querySelector('.feed').innerHTML;
        // fetch newer feed
        loadFeed(1, done);
      });
    });

    it('is different from old', function() {
      let newFeed = document.querySelector('.feed').innerHTML;
      expect(newFeed).not.toBe(oldFeed);
    });
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     Done*/
  });

});
