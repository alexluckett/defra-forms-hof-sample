'use strict';

// module.exports = config => superclass => class extends superclass {
//     successHandler(req, res, next) {
        

//         return super.successHandler(req, res, next);
//     }
// };

module.exports = stepName => superclass => class ConsoleLoggerBehaviour extends superclass {
    successHandler(req, res, next) {
        let jsonModel = req.sessionModel.toJSON();

        console.log("Submission received, step" + stepName + ". Dumping to console", jsonModel);
        super.successHandler(req, res, next);
    }
};