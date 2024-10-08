import express from 'express';
import OpenAI from 'openai';

const app = express();
const port = 3000;

app.use(express.json());

const openai = new OpenAI({
  apiKey: "5749e83b-fa24-4b7a-92a4-3a5a654568c7",
  baseURL: 'https://ark.cn-beijing.volces.com/api/v3',
});

app.post('/ai/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.chat.completions.create({
      messages,
      model: 'ep-20241006164232-s5ckx',
    });
    res.json(completion.choices[0]?.message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/ai/chat/stream', async (req, res) => {
  try {
    const { messages } = req.body;
    const stream = await openai.chat.completions.create({
      messages,
      model: 'ep-20241006164232-s5ckx',
      stream: true,
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const part of stream) {
      const chunk = part.choices[0]?.delta?.content || '';
      res.write(`data: ${JSON.stringify({ content: chunk })}\n\n`);
    }
    res.write(`data: [DONE]\n\n`);
    res.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
