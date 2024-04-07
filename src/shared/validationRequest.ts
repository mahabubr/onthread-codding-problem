import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
        url: req.url,
      });

      return next();
    } catch (error: any) {
      const errorDetails = JSON.parse(error.message);
      const formattedErrors = errorDetails.map((err: any) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      res
        .status(400)
        .json({ error: "Validation failed", details: formattedErrors });
    }
  };

export default validateRequest;
