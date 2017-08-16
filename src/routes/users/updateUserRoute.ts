import Boom from 'boom';
import User from '../../models/User';
import Joi from 'joi';
import { verifyUniqueUserHandler } from './handlers/verifyUniqueUserHandler';
import { updateUserHandler } from './handlers/updateUserHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';

const updateUserRoute = {
    method: 'PATCH',
    path: '/api/users/{id}',
    config: {
        auth: 'jwt',
        pre: [{
            method: verifyUniqueUserHandler,
            assign: 'user'
        },
        {
            method: updateUserHandler,
            assign: 'response'
        }],
        handler: defaultResponseHandler,
        validate: {
            payload: Joi.object({
                username: Joi.string().alphanum().min(2).max(30),
                email: Joi.string().email()
            }),
            params: Joi.object({
                id: Joi.objectId().required()
            })
        }
    }
}

export default updateUserRoute;
