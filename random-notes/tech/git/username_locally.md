## Set git email and username localy on a per repository basis

When a repository needs to use a specific email and user name configuration instead of
relying on the global configurations, edit its `.git/config` file and add the email and
username under `[user]` confs:

```
...
[user]
        name = user
        email = user@email.com
```
