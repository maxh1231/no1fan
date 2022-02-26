# #1 Fan ![Badge for License](https://img.shields.io/badge/license-Open-informational)

Made by [Leithen Crider](https://github.com/Thenlie), [Jill Holmes](https://github.com/Jillium), Benjamin Holt, and [Max Humpherys](https://github.com/maxh1231).

## Description

#1 Fan is a collaborative project created as part of the University of Utah's full-stack developer bootcamp. It is intended to serve as a one-stop shop for music lovers to listen to and discover new music, save their favorite artists and albums, find upcoming concerts (for a specific artist or venue or the user's general location), and catalogue a user's attended concerts.

The entire application – both front- and back-end – was built from the ground up using the below user story, acceptance criteria, APIs, and languages.

## User Story

```
AS A music lover
I WANT a central hub to find artists, albums, tracks, and concerts
SO THAT I can save my favorites, discover new music, and keep track of all the concerts I've attended.
```

## Acceptance Criteria

```
GIVEN I want to find popular music and concerts
WHEN I visit #1 Fan
THEN I am presented with today's ten most popular artists, ten most popular tracks, a random top track, and upcoming concerts in my area
WHEN I click an available track preview
THEN I can listen to 30 seconds of that track
WHEN I create an account
THEN my account information and credentials are stored in a server-side database and a unique, hash-generated profile picture is generated
WHEN I log out
THEN registered-user-specific features are disabled
WHEN I search for an artist
THEN I am shown the top results for that artist query as well as top tracks and albums related to that artist
WHEN I select an artist
THEN I am taken to a dedicated page about that artist
WHEN I visit an artist page
THEN I can read a bio about that artist and view their albums, recommended similar artists, upcoming concerts, and recent concerts
WHEN I click "Read more on Last.fm"
THEN I am taken to the artist's Last.fm page
WHEN I click a recommended artist
THEN I am taken to that artist's page
WHEN I select an album
THEN I am taken to that album's page where I can preview that album's tracks
WHEN I click a heart to favorite an artist or album
THEN that artist or album is saved to my account
WHEN I click on a venue in the upcoming concerts list
THEN I am shown upcoming concerts for that venue and a map of that venue's location
WHEN I click the date of an upcoming concert
THEN I am taken to a website where I can purchases tickets to that event
WHEN I click on a venue in the recent concerts list
THEN I am shown recent concerts at that venue
WHEN I click the date of a recent concert
THEN I am taken to the Setlist.fm page for that concert, where I can view setlist and other information about that concert
WHEN I click on the green checkmark next to a recent concert
THEN that concert is saved to my account, indicating that I attended
WHEN I visit my dashboard
THEN my user info is displayed, including my favorite artists and albums and any shows I've attended
WHEN I choose to delete my account
THEN my account and associated information is deleted
```

## Built With

-   HTML
-   CSS
-   JavaScript
-   Tailwind CSS
-   Node.js
-   Sequelize
-   Handlebars
-   Moment
-   BCrypt
-   Express
-   Dotenv
-   MySQL2

## APIs

-   [Deezer](https://developers.deezer.com/api)
-   [Last.fm](https://www.last.fm/api#getting-started)
-   [Seatgeek](https://platform.seatgeek.com/)
-   [Setlist.fm](https://api.setlist.fm/docs/1.0/index.html)

## Deployed Application and Screenshots

https://no1fan.herokuapp.com/

### Landing Page

![Landing Page](./public/assets/screenshot1.png)

### Search Page

![Search Page](./public/assets/screenshot2.png)

## Want to contribute?

Fork a copy of the repo and have fun! Feel free to add pull requests for any rad features you develop.

## License

This application is open-license.

## Questions

Feel free to contact any of us via our respective GitHub pages!
