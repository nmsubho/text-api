const httpStatus = require('http-status');
const catchAsync = require('../shared/catchAsync');
const sendResponse = require('../shared/sendResponse');
const ApiError = require('../errors/ApiError');
const TextService = require('../services/text.service');

exports.createText = catchAsync(async (req, res) => {
  const { content } = req.body;

  const result = await TextService.createText(content);

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Text added successfully',
    data: result,
  });
});

exports.getTextList = catchAsync(async (req, res) => {
  const result = await TextService.getTextList();
  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Texts fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});

exports.getTextById = catchAsync(async (req, res) => {
  const result = await TextService.getTextById(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Text fetched successfully',
    data: result,
  });
});

exports.updateTextInformation = catchAsync(async (req, res) => {
  const { content } = req.body;

  const result = await TextService.updateTextInformation(
    content,
    req.params.id
  );

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Text updated successfully',
    data: result,
  });
});

exports.deleteText = catchAsync(async (req, res) => {
  const result = await TextService.deleteText(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Text deleted successfully',
    data: null,
  });
});

exports.getNumberOfWords = catchAsync(async (req, res) => {
  const result = await TextService.getTextById(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Number Of Words fetched successfully',
    data: { numberOfWords: result.wordCount },
  });
});

exports.getNumberOfCharacters = catchAsync(async (req, res) => {
  const result = await TextService.getTextById(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Number Of Characters fetched successfully',
    data: { numberOfCharacters: result.charCount },
  });
});

exports.getNumberOfSentences = catchAsync(async (req, res) => {
  const result = await TextService.getTextById(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Number Of Sentences fetched successfully',
    data: { numberOfSentences: result.sentenceCount },
  });
});

exports.getNumberOfParagraphs = catchAsync(async (req, res) => {
  const result = await TextService.getTextById(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Number Of Paragraphs fetched successfully',
    data: { numberOfParagraphs: result.paragraphCount },
  });
});

exports.getLongestWords = catchAsync(async (req, res) => {
  const result = await TextService.getTextById(req.params.id);

  if (!result) {
    throw new ApiError(
      httpStatus.SERVICE_UNAVAILABLE,
      'Text not found or deleted'
    );
  }

  sendResponse(res, {
    status: httpStatus.OK,
    statusType: 'success',
    success: true,
    message: 'Longest Words fetched successfully',
    data: { longestWords: result.longestWords },
  });
});