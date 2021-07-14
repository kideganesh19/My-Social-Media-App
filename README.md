#Social Media App


## Database Setup

```mysql
create database SocialMediaAppdb;
create user SMAuser identified with mysql_native_password by 'socialpass';
grant all privileges on SocialMediaAppdb.*  to SMAuser;
flush privileges;
```

In this project you can write the posts, See the posts of other users, See the posts you have written under the my posts tab.
