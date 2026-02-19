import express from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!email.includes('@')) {
    return res.status(400).send('Invalid email address');
  }

  console.log(`Message from ${name} (${email}): ${message}`);

  // Respond back
  res.send(`Thanks ${name}, we received your message and will reply to ${email}!`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});