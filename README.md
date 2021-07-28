#My-Social-Media-App


## Database Setup

```mysql
create database SocialMediaAppdb;
create user SMAuser identified with mysql_native_password by 'socialpass';
grant all privileges on SocialMediaAppdb.*  to SMAuser;
flush privileges;
```

Using this application, users can create posts, comment on posts and see all existing posts
