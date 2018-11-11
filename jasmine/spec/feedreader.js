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

    it('loads feed', function() {
        const container = document.querySelector('.feed');
        expect(container.children.length > 0).toBe(true);
    });
});

//Test for new content after inital load
describe('New Feed Selection', function() {

        const container = document.querySelector('.feed');
        const firstFeed = [];

        beforeEach(function(done) {

            loadFeed(0);
            
            Array.from(container.children).forEach(content => {
                firstFeed.push(content.innerText);
            });

            loadFeed(1, done);
        });
        
        it('content changes', function() {
            Array.from(container.children).forEach( (content, index) => {
                expect(content.innerText !== firstFeed[index]).toBe(true);
            });
        });
    });
    
}());
