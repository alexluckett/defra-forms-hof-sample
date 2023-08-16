module.exports = SuperClass => class extends SuperClass {
    validate(req, res, next) {
        console.log(req.form.values);

        if (req.form.values["are-you-a-business"] && req.form.values["are-you-a-business"].toLowerCase() === "yes") {
            return next({
                "defra-number": new this.ValidationError(
                    'defra-number',
                    {
                        type: 'defra-no-must-be-supplied-if-business'
                    }
                )
            });
        }

        return super.validate(req, res, next);
    }
};