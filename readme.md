# Redis

Redis is a database that we can use to persist any data. Redis is incredibly fast. Redis can store or retrive data extremely quickly. 

**Redis is process all commands synchronously - one at a time**

## Why Redis is Fast?

1. All data is stored in a memory.

Most databases stored their data in memory or a hard drive. Accessing data from memory is fast, getting data from a hard drive is relatively slow. There is a downside to this approach, it can be challenging to work with dataset that is larger than the amount of memory that your computer has

2. Redis stores all of the data in a simple data structure

All of the data is organized in a classic data structure like linked list, sorted set, hash maps, and so on.

3. Redis is very fast because it is simple in nature

Redis is kept very simple on purpose. Different from traditional database such as postgresql.

## Data type

Because redis works in memory, we can store any data structure such as

1. String
2. List
3. Hash
4. Set
5. Sorted Set
6. Bitmap
7. Hyperloglog
8. Json
9. Index