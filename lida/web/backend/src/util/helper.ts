import { NextFunction, Response, Request } from 'express';
import Validator from 'validatorjs';

export function requestValidate(validationRulesAndMessages: any) {
    return function (req: Request, res: Response, next: NextFunction) {
        let input: any = {
            ...req.body,
            ...req.query
        };
        let validation = new Validator(input, validationRulesAndMessages.rules, validationRulesAndMessages.messages != undefined ? validationRulesAndMessages.messages : {});
        if (validation.fails()) {
            return res.status(422).json(validation.errors.errors)
        }
        next();
    }
}

export const isEmpty = (value: any) => {
    if (value == null || value == 'null') {
        return true;
    }
    if (typeof value == "object") {
        return Object.keys(value).length == 0;
    }
    return (
        (Array.isArray(value) && value.length == 0)
        || ((value == undefined || value == 'undefined' || value == null || value == ''))
    )
}

export async function _json(data: any) {
    return await new Promise(async (resolve, reject) => {
        try {
            let dataS: any = await data;
            if (isEmpty(dataS)) {
                resolve([]);
            } else {
                resolve(JSON.parse(JSON.stringify(dataS)))
            }
        } catch (error) {
            reject(error)
        }
    })
}