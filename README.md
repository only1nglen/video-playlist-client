# VideoPlaylist

This app was created for users to share videos they like into one list, for now.

## Important Links

[VideoPlaylist API Repo](https://github.com/only1nglen/video-playlist-backend)

[VideoPlaylist API](https://ancient-peak-54308.herokuapp.com/)

[VideoPlaylist](https://only1nglen.github.io/video-playlist-client/)

## Planning Story

Started with the API and tested CRUD on videos resource with Postman using Express. As for the frontend, I simply start with making sure a user can submit a link. From there I needed to find a way to use that link and make a video render from it. I found a component online that would accept youtube video link IDs and display it on the page. Next, I had to parse each YouTube link into an ID that the component can render the ID into a video to display in the site.

### User Story

Version 1
As an unregistered user, I would like to create an account.
As an unregistered user, I would like to view and watch user added videos and playlists.

As a registered user, I would like to sign in, change password, and logout.
As a registered user, I would like to add a video.
As a registered user, I would like to play/watch the video.
As a registered user, I would like to delete and edit the video I added.

Version 2
As a registered user, I would like to create a playlist.
As a registered user, I would like to add to the playlist.
As a registered user, I would like to ply/watch to the playlist.
As a registered user, I would like to update and delete the playlist and videos in it.

### Technologies Used

-   Javascript
-   Express
-   HTML/CSS
-   Bootstrap
-   Heroku
-   React

### Unsolved Problems, Things to Do/Want to do

-   Styling needed
-   Work on Version 2
-   Use images as links instead of Urls strings
-   Users can submit any string and it will be accepted. However invalid link will not render a video. Video will display but nothing will be played. Will have to look into how to make sure valid youtube link will be accepted.

## Images

[Wireframe 1](https://i.imgur.com/3viZ0TF.jpg)
[Wireframe 2](https://i.imgur.com/YeLeOIs.jpg)
