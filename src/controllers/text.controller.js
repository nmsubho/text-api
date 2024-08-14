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
