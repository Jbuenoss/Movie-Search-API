import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
            .notEmpty()
            .withMessage("The title is required")
            .isString()
            .withMessage("the title must to be string")
            .isLength({ min: 5 })
            .withMessage("The title must be at least 5 characters long."),
        body("rating")
            .notEmpty()
            .withMessage("The rating is required.")
            .isNumeric()
            .withMessage("The rating must be a number.")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("The rating must be between 0 and 10.");
                }
                return true;
            }),
        body("description")
            .notEmpty()
            .withMessage("The description is required.")
            .isString()
            .withMessage("The description must be a string."),
        body("director")
            .notEmpty()
            .withMessage("The director's name is required.")
            .isString()
            .withMessage("The director's name must be a string."),
        body("poster")
            .notEmpty()
            .withMessage("The image is required.")
            .isURL()
            .withMessage("The image must be a URL."),
    ];
};
