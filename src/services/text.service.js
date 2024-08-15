const httpStatus = require('http-status');
const ApiError = require('../errors/ApiError');
const Text = require('../models/text.model');
const analyzeText = require('../utils/analyzeText');
const redis = require('redis');
const catchAsync = require('../shared/catchAsync');
const client = redis.createClient();

client.on('error', (err) => {
  throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
});

// await client.connect();

createText = async (content) => {
  const analysis = analyzeText(content);

  const result = await Text.create({
    content,
    ...analysis,
  });

  return result;
};

getTextList = async () => {
  const result = await Text.find();
  const total = await Text.countDocuments();

  return { data: result, meta: { total } };
};

getTextById = async (id) => {
  const result = await Text.findById(id);
  return result;

  // const cacheKey = `text-analysis-${id}`;
  // await client.connect().catch(console.error);
  // Check cache
  // return new Promise((resolve, reject) => {
  //   client.get(cacheKey, async (err, data) => {
  //     if (err) return reject(err);
  //     console.log(data);
  //     if (data) {
  //       return resolve(JSON.parse(data));
  //     }

  //     // If not in cache, fetch from DB
  //     const text = await Text.findById(id);
  //     console.log(text);
  //     if (!text) return resolve(null);

  //     // Cache the result
  //     client.setex(cacheKey, 3600, JSON.stringify(text)); // Cache for 1 hour
  //     return resolve(text);
  //   });
  // });
  // client.get(cacheKey, async (err, data) => {
  //   if (err) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
  //   console.log(data);
  //   if (data) {
  //     return JSON.parse(data);
  //   }

  //   // If not in cache, fetch from DB
  //   const text = await Text.findById(id);
  //   console.log(text);
  //   if (!text) return null;

  //   // Cache the result
  //   client.setex(cacheKey, 3600, JSON.stringify(text)); // Cache for 1 hour
  //   return text;
  // });
};

updateTextInformation = async (content, id) => {
  const analysis = analyzeText(content);
  const result = await Text.findOneAndUpdate(
    { _id: id },
    {
      content,
      ...analysis,
    },
    {
      new: true,
    }
  );

  return result;
};

deleteText = async (id) => {
  const result = await Text.findByIdAndDelete(id);

  return result;
};

const TextService = {
  createText,
  getTextList,
  getTextById,
  updateTextInformation,
  deleteText,
};

module.exports = TextService;
