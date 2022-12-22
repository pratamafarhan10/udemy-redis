## SETRANGE and GETRANGE

These commands can be used to get or update data very quickly from the database. Example
| id | type | color| material |
| -- | ---- | -----| -------|
| 1 | couch | brown| leather|
| 2 | table | red| wood|
| 3 | chair | green| plastic|

we can encode this data into this

| id  | type | color | material |
| --- | ---- | ----- | -------- |
| 1   | a    | a     | a        |
| 2   | b    | b     | b        |
| 3   | c    | c     | c        |

and then we can store into redis db like this

| id     | type |
| ------ | ---- |
| item:1 | aaa  |
| item:2 | bbb  |
| item:3 | ccc  |

now we have lists of task
1. Fetch one to three properties of a single item
To get the couch `GETRANGE item:1 0 0 `
To get the couch and the color `GETRANGE item:1 0 1`
To get the couch, the color, and the material `GETRANGE item:1 0 2`

2. Update one to three properties of a single item
Update table, red, and wood into table, brown, wood `SETRANGE item:2 1 a`

3. Fetch all properties related to several items
`MGET item:1 item:2 item:3`

4. Create several items
`MSET item:4 "abc" item:5 "bcb"`

## INCR
Redis process all commands synchronously or one at a time in nature. So for example we have instagram post and there are 2 upvote requests at the same time then redis will process it one by one.

1. Current upvotes: 20
2. 2 upvote requests
3. Redis INCR by 1, current upvotes: 21
4. Redis INCR by 1, current upvotes: 22