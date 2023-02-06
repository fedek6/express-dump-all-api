![logo](1otri4.jpg)

# express-dump-all-api

Dummy API to dump all incoming request.

This is helpful when building some local APIs etc.

You send any request to `localhost:PORT` and you get debug output in your console.

## Example output:

```
🙉 Server is listening on 1500
👃 Incoming request: 1
Headers
{
  "content-type": "application/json",
  "user-agent": "PostmanRuntime/7.30.0",
  "accept": "*/*",
  "cache-control": "no-cache",
  "postman-token": "53c77148-577e-4f99-b874-a1079c19bf63",
  "host": "localhost:1500",
  "accept-encoding": "gzip, deflate, br",
  "connection": "keep-alive",
  "content-length": "24"
}
Body
{
  "mickeymouse": 1000233
}
Query params
{
  "aaa": "bbb"
}
Info
{
  "url": "/aaaa/?aaa=bbb",
  "method": "POST",
  "ip": "::1"
}
🏁 End of request: 1
```
