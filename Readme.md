
## Section B: Short Answer Questions

### 6. Purpose of express.Router()

express.Router() allows developers to organize routes into separate files. It makes the application easier to maintain, read, and manage.

### 7. Error Handling in Express.js

Error-handling middleware catches errors that occur while processing requests. It helps prevent application crashes and returns an appropriate response.

Example:

```javascript
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
});
```

## Section C: Bonus

### Dynamic Port Binding

app.listen(process.env.port || 8081) allows the application to use a port provided by the environment. If no port is provided, it uses port 8081.

This is useful because hosting platforms may assign different ports to applications.
