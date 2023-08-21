import newsService from '../services/newsService.js';

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({ message: 'Submit all fields for registration' });
    }

    const news = await newsService.create({
      title,
      text,
      banner,
      user: { _id: '64d3ae5b01a2129415a4f50e' }
    });

    if (!news) {
      return res.status(400).send({ message: 'Error while creating news' });
    }

    res.status(201).send({
      message: 'News created sucessfully',
      news: {
        title,
        text,
        banner,
        user: news.user
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const findAll = async (req, res) => {
  try {
    const news = await newsService.findAll();

    if (news.length === 0) {
      return res.status(400).send({ message: 'There are no registered news' });
    }

    res.send(news);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export default {
  create,
  findAll
}
