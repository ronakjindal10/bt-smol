const asyncHandler = require('../utils/asyncHandler');
const Contact = require('../models/Contact');
const ErrorResponse = require('../utils/errorHandler');

// @desc    Increase karma of a contact
// @route   PUT /api/v1/karma/:id
// @access  Private
exports.increaseKarma = asyncHandler(async (req, res, next) => {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
        return next(new ErrorResponse(`Contact not found with id of ${req.params.id}`, 404));
    }

    // Make sure user is contact owner
    if (contact.user.toString() !== req.user.id) {
        return next(new ErrorResponse(`User ${req.user.id} is not authorized to update this contact`, 401));
    }

    contact.karma += 1;

    await contact.save();

    res.status(200).json({
        success: true,
        data: contact
    });
});