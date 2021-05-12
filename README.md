# AERT-Webpage

![image](https://user-images.githubusercontent.com/58304673/112229708-d91bbc80-8c09-11eb-8701-00aff7b28bdc.png)

# User guide
* Public folder conatins the website styling file, images, as well the Aboutpage, Blog, Homepage, downlaods, Quesrypage, Statuspage, folders 
* Aboutpage folder: contains about page html file and image
* Blog folder: contains the blog page html file
* Downloads folder: contains the hompage trainning pdf files
* Homepage folder: contains the index.html file which is the html code of the homepage
* images folder: contains the homepage images
* Querypage folder: contains the javacript and html files for the query page
* Statuspage folder: contains the html and javascript files files for the status page
* images for the all of the pages
* website.css file: css styling for all of the pages

# Home Page
The main purpuse of the Home page is the allow users to select and view lightning data training resorces a which will download as a pdf on the users browser. The home page will also display live feed of AERT's twitter feed that will allows the user to scroll through. Along with these features the page will display AERT's most recent YouTube video from their channel and quick links to the users twitter and YouTube page at the bottom. 

# Status Page
The main purpose of the status page is to allow the users to view lightning data on the map display which also allowing for users to select what data they would like to see by filtering using checkboxes and GOES-17/GOES-16 satilite buttons. The map itself will also allow the user to play the data on the map by using a playable timeslider. The map also features a search bar that allows the user to zoom into a specified area. The website also has a second section that will allow the user to view time series data as well as filtering the data presented via checkboxes and GOES-17/GOES-16 satilite buttons. An additional feature the page has is a placeholder for a page navigation bar.

# Query Page

The main purpose of the Query Page is to take the user input of the minimum and maximum coordinates and plot those points on the map. The user will then be able to get a better visualization of where they want the lightning data to be displayed. The user will also need to input a start and end date along with a start and end hour so the backend servers will be able to retrieve that targeted lighting data and send it to the user via email.

# About Page

This page contains information regarding what AERT is as a whole along with an image of the team itself

# Blog Page

This page was requested from the client as a space holder for any future projects and descriptions that AERT wanted to incporate.

# Software Requirements and Libraries
1. https://code.visualstudio.com/
2. https://desktop.github.com/
3. https://www.anaconda.com/
## Anaconda Packages to install
* Cartopy
* Xarray
* Imageio
* NetCDF4

# Reading in netCDF4 Files
!. NetCDF4 folder contains the netcdf4_read.py file. The file conatins the python code that runs one NC file at a time



