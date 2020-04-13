# activity log angular

This project is a simple activity logger displayed in a grid.

This project uses:

* Bootstrap 4
* Angular 9
* PHP 5.6
* MySQL 5.6

## [View Demo](https://ajavadi34.github.io/activity-log-angular/)


### QUICK START
1. Clone repo *activity-log-angular*
2. Clone repo *activity-log-service* into a web server directory that supports php
3. Create a MySQL database and import the *setup.sql* script
4. Create a *db_connect.php* file in the root of the project folder
5. Paste the following code into the file and enter your MySQL credentials:
```
    <?php

    define('DB_USER', 'username');
    define('DB_PASSWORD', 'password');
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'db_name');

    ?>
```
6. Navigate to the url (ex: http://localhost/activity-log/) and start logging

Enjoy!